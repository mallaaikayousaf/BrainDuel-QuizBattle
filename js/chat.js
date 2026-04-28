// Chat system (already defined in roasts.js, but here's the extension)
// This complements the Chat object from roasts.js

// Add keyboard support for chat
document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        Chat.sendCustom();
      }
    });
  }
});

// Auto-scroll chat to bottom when new messages arrive
const observeChat = () => {
  const chatLog = document.getElementById('chatLog');
  if (chatLog) {
    const observer = new MutationObserver(() => {
      chatLog.scrollTop = chatLog.scrollHeight;
    });
    observer.observe(chatLog, { childList: true, subtree: true });
  }
};

// Initialize chat observer
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', observeChat);
} else {
  observeChat();
}