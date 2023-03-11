const userEmailEl = document.querySelector('.user-email');
userEmailEl.textContent = getPlayerName();

function getPlayerName() {
    let displayEmail = localStorage.getItem('emailAddress');
    if (displayEmail === "") {
        return "Unknown user";
    }
    return displayEmail;
}

function postText() {
    const postDisplay = document.querySelector(".previous-posts");
    const postTemplate = document.querySelector("#post");
    const clone = postTemplate.textContent.cloneNode(true);
    
    let storyText = document.querySelector("#postInput");
    
}