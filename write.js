const playerNameEl = document.querySelector('.user-email');
playerNameEl.textContent = this.getPlayerName();

function getPlayerName() {
    return localStorage.getItem('emailAddress') ?? 'Unknown user';
}