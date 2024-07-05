document.addEventListener("DOMContentLoaded", () => {
  const chatbotToggler = document.querySelector(".chatbot-toggler");
  const chatbot = document.querySelector(".chatbot");
  const sendBtn = document.getElementById("send-btn");
  const chatbox = document.querySelector(".chatbox");
  const textarea = document.querySelector(".chat-input textarea");

  // Toggle Chatbot visibility
  chatbotToggler.addEventListener("click", () => {
      document.body.classList.toggle("show-chatbot");
  });

  // Send message
  sendBtn.addEventListener("click", () => {
      sendMessage();
  });

  // Send message on Enter key
  textarea.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          sendMessage();
      }
  });

  function sendMessage() {
      const message = textarea.value.trim();
      if (message) {
          // Display outgoing message
          const outgoingMessage = document.createElement("li");
          outgoingMessage.classList.add("chat", "outgoing");
          outgoingMessage.innerHTML = `<p>${message}</p>`;
          chatbox.appendChild(outgoingMessage);

          // Clear textarea
          textarea.value = "";
          textarea.focus();
          
          // Scroll to the bottom
          chatbox.scrollTop = chatbox.scrollHeight;

          // Simulate incoming message for demo purposes
          setTimeout(() => {
              const incomingMessage = document.createElement("li");
              incomingMessage.classList.add("chat", "incoming");
              incomingMessage.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>Received your message: "${message}"</p>`;
              chatbox.appendChild(incomingMessage);
              
              // Scroll to the bottom
              chatbox.scrollTop = chatbox.scrollHeight;
          }, 1000);
      }
  }
});
