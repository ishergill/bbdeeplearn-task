import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export async function POST(request) {
  try {

    const openai = new OpenAI({
      apiKey: process.env.OPEN_API_KEY,
    });

    // Extract parameters from the request 
    const params = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You find yourself in a mystical realm filled with wonders and dangers. What would you like to explore?",
        },
        {
          role: "user",
          content: params.prompt,
        },
      ],
      temperature: 0,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return NextResponse.json(response);
  } catch (error) {
    // Handle any errors in process
    console.error("An error occurred:", error);
    return NextResponse.error("Internal Server Error", { status: 500 });
  }
}