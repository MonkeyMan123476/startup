const userEmailEl = document.querySelector('.user-email');
userEmailEl.textContent = getPlayerName();

function getPlayerName() {
    let displayEmail = localStorage.getItem('emailAddress');
    if (displayEmail === "") {
        return "Unknown user";
    }
    return displayEmail;
}

function testPostText() {
    if ('content' in document.createElement('template')) {
        let postDisplay = document.querySelector(".previous-posts");
        let postTemplate = document.querySelector("#post");
        let clone = postTemplate.textContent.cloneNode(true);
        
        let storyText = document.querySelector("#postInput");
        let storyAddition = clone.querySelector(".card-text");
        storyAddition.textContent = storyText;

        let emailDisplay = clone.querySelector(".card-email");
        emailDisplay.textContent = getPlayerName();

        postDisplay.appendChild(clone);
    } else {
        userEmailEl.textContent = "template not working";
    }
}

function postText() {
    let storyText = document.querySelector("#postInput");

    let newPost = document.createElement("div");
    newPost.setAttribute("class", "prev-post");

    let postDisplay = document.querySelector(".previous-posts");
    postDisplay.appendChild(newPost);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    newPost.appendChild(card);

    makeCardBody(card, storyText);
    makeButtonBar(card);
}

function makeCardBody(card, storyText) {
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    card.appendChild(cardBody);

    let storyAddition = document.createElement("p");
    storyAddition.setAttribute("class", "card-text");
    storyAddition.textContent = storyText;
    cardBody.appendChild(storyAddition);
}

function makeButtonBar(card) {
    let buttonBar = document.createElement("div");
    buttonBar.setAttribute("class", "buttons");
    card.appendChild(buttonBar);

    let emailDisplay = document.createElement("h5");
    emailDisplay.setAttribute("class", "card-email");
    emailDisplay.textContent = getPlayerName();
    buttonBar.appendChild(emailDisplay);

    let reactionButtons = document.createElement("div");
    reactionButtons.setAttribute("class", "likes");
    buttonBar.appendChild(reactionButtons);

    // Like Button
    let likeButton = document.createElement("button");
    likeButton.setAttribute("type", "button");
    likeButton.setAttribute("class", "btn btn-sm btn-success");
    likeButton.textContent = "Like";
    reactionButtons.appendChild(likeButton);

    let likeNumber = document.createElement("span");
    likeNumber.setAttribute("class", "badge bg-secondary");
    likeNumber.textContent = 0;
    likeButton.appendChild(likeNumber);


    // Dislike Button
    let dislikeButton = document.createElement("button");
    dislikeButton.setAttribute("type", "button");
    dislikeButton.setAttribute("class", "btn btn-sm btn-danger");
    dislikeButton.textContent = "Dislike";
    reactionButtons.appendChild(dislikeButton);

    let dislikeNumber = document.createElement("span");
    dislikeNumber.setAttribute("class", "badge bg-secondary");
    dislikeNumber.textContent = 0;
    dislikeButton.appendChild(dislikeNumber);
}