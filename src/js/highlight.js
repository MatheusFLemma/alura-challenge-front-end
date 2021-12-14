const language = document.querySelector(".language__selector");
const codeArea = document.querySelector(".project-card__code-editor");
const syntaxButton = document.querySelector(".highlight__button");

function highlightSyntax() {
  const code = codeArea.innerText;

  codeArea.innerHTML = `<code class="code__preview hljs ${language.value}" contenteditable="true" aria-label="Editor de código"></code>`;
  codeArea.querySelector("code").textContent = code;

  hljs.highlightElement(codeArea.querySelector("code"));
}

syntaxButton.addEventListener("click", () => highlightSyntax());
