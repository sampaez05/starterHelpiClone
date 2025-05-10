import OpenAI from 'openai';

//import promptSync from 'prompt-sync';

// Initialize prompt-sync
//const prompt = promptSync({ sigint: true });

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: localStorage.getItem("MYKEY").replace(/"/g,''),dangerouslyAllowBrowser: true
});

// Keep conversation context in an array


export async function chatSend(message) {
  const payload = [
    { role: 'system',  content: 'Just be helpful and straightforward, doing your best to avoid talking about potentially controversial topics' },
    { role: 'user',    content: message }
  ];

  try {
    const resp = await openai.chat.completions.create({
      model:    'gpt-4o',
      messages: payload
    });
    console.log('Assistant:', resp.choices[0].message.content);
  } catch (err) {
    console.error('Error calling OpenAI API:', err);
  }
}