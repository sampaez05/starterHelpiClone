import 'dotenv/config';
import OpenAI from 'openai';
import promptSync from 'prompt-sync';

// Initialize prompt-sync
const prompt = promptSync({ sigint: true });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Keep conversation context in an array
const messages = [
  { role: 'system', content: 'Just be helpful and straightforward, doing your best to avoid talking about potentially controversial topics' }
];

async function chatLoop() {
  while (true) {
    const input = prompt('You: ');
    if (input.toLowerCase() === 'exit') {
      console.log('Exiting...');
      break;
    }

    messages.push({ role: 'user', content: input });

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // or "gpt-4" if available
        messages: messages,
      });

      const assistantMessage = response.choices[0].message.content;
      console.log(`Assistant: ${assistantMessage}`);
      messages.push({ role: 'assistant', content: assistantMessage });
    } catch (err) {
      console.error('Error calling OpenAI API:', err);
    }
  }
}

chatLoop();