const markDownInput = document.getElementById("markdown-input");
const htmlOuput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markDownInput.value;

  text = text.replace(/^#\s+(.*)$/gm, "<h1>$1</h1>");
  text = text.replace(/^##\s+(.*)$/gm, "<h2>$1</h2>");
  text = text.replace(/^###\s+(.*)$/gm, "<h3>$1</h3>");
  text = text.replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.*)__/g, "<strong>$1</strong>");
  text = text.replace(/\*(.*)\*/g, "<em>$1</em>");
  text = text.replace(/_(.*)_/g, "<em>$1</em>");
  text = text.replace(/!\[(.*)\]\((.*)\)/g, '<img alt="$1" src="$2">');
  text = text.replace(/\[(.*)\]\((.*)\)/g, '<a href="$2">$1</a>');
  text = text.replace(/^>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

  return text;
}

markDownInput.addEventListener("input", () => {
  const htmlResult = convertMarkdown();

  htmlOuput.textContent = htmlResult;
  preview.innerHTML = htmlResult;
});
