function getInput(id) {
  return document.getElementById(id).value;
}

function showResponse(data) {
  document.getElementById('response').value = JSON.stringify(data, null, 2);
}

async function getSettings() {
  const id = getInput('idInstance');
  const token = getInput('apiTokenInstance');
  const res = await fetch(`https://api.green-api.com/waInstance${id}/getSettings/${token}`);
  const data = await res.json();
  showResponse(data);
}

async function getStateInstance() {
  const id = getInput('idInstance');
  const token = getInput('apiTokenInstance');
  const res = await fetch(`https://api.green-api.com/waInstance${id}/getStateInstance/${token}`);
  const data = await res.json();
  showResponse(data);
}

async function sendMessage() {
  const id = getInput('idInstance');
  const token = getInput('apiTokenInstance');
  const phone = getInput('phone');
  const message = getInput('message');

  const res = await fetch(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId: `${phone}@c.us`,
      message: message
    })
  });
  const data = await res.json();
  showResponse(data);
}

async function sendFileByUrl() {
  const id = getInput('idInstance');
  const token = getInput('apiTokenInstance');
  const phone = getInput('phone');
  const fileUrl = getInput('fileUrl');

  const res = await fetch(`https://api.green-api.com/waInstance${id}/sendFileByUrl/${token}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatId: `${phone}@c.us`,
      urlFile: fileUrl,
      fileName: "file"
    })
  });
  const data = await res.json();
  showResponse(data);
}
