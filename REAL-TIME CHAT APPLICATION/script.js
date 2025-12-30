const chatBox = document.getElementById("chatBox");
const messageInput = document.getElementById("messageInput");
const usernameInput = document.getElementById("username");

function sendMessage() {
  const message = messageInput.value.trim();
  const user = usernameInput.value.trim() || "User";

  if (message === "") return;

  addMessage(user, message);
  messageInput.value = "";
}

function addMessage(user, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";
  msgDiv.innerHTML = `<strong>${user}:</strong> ${text}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}