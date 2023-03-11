const userEmailEl = document.querySelector('.user-email');
userEmailEl.textContent = getPlayerName();

function getPlayerName() {
    let displayEmail = localStorage.getItem('emailAddress');
    if (displayEmail === "") {
        return "Unknown user";
    }
    return displayEmail;
}