import OpenAI from 'openai';

//import promptSync from 'prompt-sync';

// Initialize prompt-sync
//const prompt = promptSync({ sigint: true });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: localStorage.getItem("MYKEY").replace(/"/g,''),dangerouslyAllowBrowser: true
});

// Keep conversation context in an array
const messages = [
  { role: 'system', content: 'Just be helpful and straightforward, doing your best to avoid talking about potentially controversial topics' }
];

export async function chatSend(message) {
    messages.push({ role: 'user', content: message });

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o', // or "gpt-4" if available
        messages: messages,
      });

      const assistantMessage = response.choices[0].message.content;
      console.log(`Assistant: ${assistantMessage}`);
      messages.push({ role: 'assistant', content: assistantMessage });
    } catch (err) {
      console.error('Error calling OpenAI API:', err);
    }
}