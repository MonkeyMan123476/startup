(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('emailAddress');
    if (userName) {
      const nameEl = document.querySelector('#emailInput');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }
  
    if (authenticated) {
      window.location.href="home.html";
    }
})();

async function loginUser() {
    loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
    loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const userName = document.querySelector('#emailInput')?.value;
    const password = document.querySelector('#passwordInput')?.value;
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('emailAddress', userName);
      window.location.href = 'home.html';
    } else {
    //   const modalEl = document.querySelector('#msgModal');
    //   modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    //   const msgModal = new bootstrap.Modal(modalEl, {});
    //   msgModal.show();
    }
}

async function getUser(email) {
    let scores = [];
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${email}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
}






// function login() {
//     const emailEl = document.querySelector("#emailInput");
//     localStorage.setItem("emailAddress", emailEl.value);
//     window.location.href = "home.html";
// }











// Stuff for third party quote display
function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const quoteEl = document.querySelector('#random-quote');
        quoteEl.classList.add('quote');
  
        quoteEl.textContent = '"' + data.content + '\" - ' + data.author;
  
        //containerEl.appendChild(quoteEl);
    });
}

displayQuote();