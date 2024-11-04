import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyC3RbsZRwMlPS9E82NmYBfx1XwwOocIiMY');

export async function getChatResponse(message: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `You are a compassionate mental health assistant for SoinHealth, 
    a platform dedicated to supporting women's mental wellness. Respond with empathy 
    and care to the following message: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    return "I apologize, but I'm having trouble connecting right now. Please try again in a moment.";
  }
}