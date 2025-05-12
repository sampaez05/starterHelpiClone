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


//this code is a singular serve and return the openAI API, the chat history is not saved so as to not pollute potential future messages
export async function chatSend(message) {
  //this defines the call made to the API, with both the instructions to the system and the actual message to the user
  const payload = [
    { role: 'system',  content: 'Just be helpful and straightforward, doing your best to avoid talking about potentially controversial topics' },
    { role: 'user',    content: message }
  ];

  try {
    const resp = await openai.chat.completions.create({
      model:    'gpt-4o',
      messages: payload
    });
    //this returns the actual content of the message to be used
    return resp.choices[0].message.content;
  } catch (err) {
    console.error('Error calling OpenAI API:', err);
  }
}