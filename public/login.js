function login() {
    const emailEl = document.querySelector("#emailInput");
    localStorage.setItem("emailAddress", emailEl.value);
    window.location.href = "home.html";
}