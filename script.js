const quotesContainer = document.querySelector(".quotesCon");
const quotesGen = document.querySelector(".genQuotes");

const generateQ = function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.quotable.io/random");
  xhr.send();

  xhr.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const html = `
     <div class="content">${data.content}</div>
     <div class="author">-${data.author}</div> <hr>
  `;
    quotesContainer.insertAdjacentHTML("beforeend", html);
  });
};

quotesGen.addEventListener("click", generateQ);
