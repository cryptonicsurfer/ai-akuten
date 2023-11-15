// import { Configuration, OpenAIApi } from 'openai-edge'
import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
const today = new Date();
const formattedDate = today.toISOString().split('T')[0];
export const runtime = 'edge'
const openai = new OpenAI()
export async function POST(req) {
  const systemMessage = {
    role: 'system',
    content: `Du är en hjälpsam assistent i Falkenberg, Halland. dagens datum är ${formattedDate}. Dina svar är formatterade i markdown. Du besvarar frågor som rör ai akuten och hur små och medelstora företag kan dra nytta av ai. Vid tillfälle, informera användaren att den kan boka in ett introduktionsmöte med oss på AI akuten på den här länken "/book"`
  };
    // Extract the `messages` from the body of the request
  const { messages } = await req.json()
  const messagesWithSystemMessage = [systemMessage, ...messages]
  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-1106',
    stream: true,
    messages: messagesWithSystemMessage,
    max_tokens: 1000,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}