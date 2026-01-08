import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ANALYSIS_PROMPT = `You are analyzing a dog photo to help with pet travel planning. Extract the following information as best you can. If you're uncertain about any field, use "unknown".

Return a JSON object with exactly these fields:
{
  "breed": string (e.g., "Golden Retriever", "Mixed", or "unknown"),
  "age_estimate": string (e.g., "2 years", "6-8 months", "puppy", "senior", or "unknown"),
  "weight_estimate": string (e.g., "25", "40-50", or "unknown" - just the number),
  "rabies_vaccinated": string ("yes", "no", or "unknown" - you likely can't tell this, so default to "unknown"),
  "separation_anxiety": string ("low", "medium", "high", or "unknown" - infer from body language if visible),
  "flight_comfort": string ("low", "medium", "high", or "unknown" - default to "unknown"),
  "daily_exercise_need": string ("low", "medium", "high", or "unknown" - infer from breed characteristics),
  "environment_preference": string ("urban", "suburban", "nature", "mixed", or "unknown" - infer from breed),
  "personality_archetype": string ("friendly", "anxious", "energetic", "calm", "protective", "playful", "independent", or "unknown" - infer from expression and breed)
}

Important:
- Only return valid JSON, no other text
- If this is NOT a dog image, return: {"error": "This doesn't appear to be a dog photo. Please upload an image of your dog."}
- Be generous with your estimates but honest about uncertainty
- Base breed-related inferences on typical breed characteristics`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { image } = await req.json();
    
    if (!image) {
      return new Response(
        JSON.stringify({ error: "No image provided" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: ANALYSIS_PROMPT },
              { 
                type: 'image_url', 
                image_url: { url: image }
              }
            ]
          }
        ],
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error('AI analysis failed');
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response from AI');
    }

    // Parse the JSON response
    let analysis;
    try {
      // Extract JSON from potential markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, content];
      const jsonStr = jsonMatch[1].trim();
      analysis = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error('Failed to parse AI response:', content);
      // Return default values if parsing fails
      analysis = {
        breed: "unknown",
        age_estimate: "unknown",
        weight_estimate: "unknown",
        rabies_vaccinated: "unknown",
        separation_anxiety: "unknown",
        flight_comfort: "unknown",
        daily_exercise_need: "unknown",
        environment_preference: "unknown",
        personality_archetype: "unknown"
      };
    }

    return new Response(
      JSON.stringify({ success: true, analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('analyze-dog error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});