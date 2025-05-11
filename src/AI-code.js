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
  apiKey: keyData.replace(/"/g,''),dangerouslyAllowBrowser: true
});

// Keep conversation context in an array


export async function chatSend(message) {
  console.log(message);
  const payload = [
    { role: 'system',  content: 'Just be helpful and straightforward, doing your best to avoid talking about potentially controversial topics, Make sure to include salary ranges for each position and degree needed' },
    { role: 'user',    content: message }
  ];

  try {
    const resp = await openai.chat.completions.create({
      model:    'gpt-4o',
      messages: payload
    });
    return resp.choices[0].message.content;
  } catch (err) {
    console.error('Error calling OpenAI API:', err);
  }
}