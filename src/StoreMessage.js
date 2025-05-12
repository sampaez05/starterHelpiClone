
//the entire point of this file is to transfer data between two other files, specifically the message to be sent to ChatGPT upon an API call
let dynamicContent = '';

export function setDynamicContent(str) {
  dynamicContent = str;
}

export function getDynamicContent() {
  return dynamicContent;
}