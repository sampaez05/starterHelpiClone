import OpenAI from 'openai';

//import promptSync from 'prompt-sync';

// Initialize prompt-sync
//const prompt = promptSync({ sigint: true });

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: keyData,dangerouslyAllowBrowser: true
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
      return assistantMessage.toString();
      //messages.push({ role: 'assistant', content: assistantMessage }); //this line just pushes it to the history
    } catch (err) {
      console.error('Error calling OpenAI API:', err);
    }
}