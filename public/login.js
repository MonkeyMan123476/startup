function login() {
    const emailEl = document.querySelector("#emailInput");
    localStorage.setItem("emailAddress", emailEl.value);
    window.location.href = "home.html";
}

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const quoteEl = document.querySelector('#random-quote');
        quoteEl.classList.add('quote');
  
        quoteEl.textContent = '"' + data.content + '\" - ' + data.author;
  
        containerEl.appendChild(quoteEl);
    });
}

displayQuote();