const userEmailEl = document.querySelector('.user-email');
userEmailEl.textContent = getEmail();

function getEmail() {
    let displayEmail = localStorage.getItem('emailAddress');
    if (displayEmail === "") {
        return "Unknown user";
    }
    return displayEmail;
}

async function loadPosts() {
    const response = await fetch("/api/posts")
    const posts = await response.json()
  
    if (posts.length) {
        // Modify the DOM to display the posts
        for (const [i, post] of posts.entries()) {
            addCard(post.story, post.address, post.likes, post.dislikes);
        }
    } else {
        addCard("...there was an orangutan named Bartholomew living in the jungle. Bartholomew woke up one day to see a large, colorful Toucan stealing his food.", "PreviousUser@email.com", 7, 2);
    }
}

loadPosts();


function postText() {
    let storyText = document.querySelector("#postInput").value;

    if (storyText.length >= 75) {
        addCard(storyText, getEmail(), 0, 0);
        document.querySelector("#postInput").value = "";
        document.querySelector("#notify").textContent = "";
        savePost(storyText, getEmail());
    } else {
        document.querySelector("#notify").textContent = "Your post must be at least 75 characters.";
    }
}

async function savePost(text, email) { this
    const newPost = { address: email, story: text, likes: 0, dislikes: 0};
    try {
        const response = await fetch('/api/post', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(newPost),
        });
  
        // Store what the service gave us as the posts
        const posts = await response.json();
        localStorage.setItem('posts', JSON.stringify(posts));
    } catch {
        // If there was an error then just track scores locally
        let posts = [];
        const postsText = localStorage.getItem('posts');
        if (postsText) {
            posts = JSON.parse(postsText);
        }

        posts.splice(posts.length - 1, 0, newPost);

        localStorage.setItem('posts', JSON.stringify(posts));
    }
}

function addCard(storyText, userEmail, likes, dislikes) {
    let newPost = document.createElement("div");
    newPost.setAttribute("class", "prev-post");

    let postDisplay = document.querySelector(".previous-posts");
    postDisplay.appendChild(newPost);

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    newPost.appendChild(card);

    makeCardBody(card, storyText);
    makeButtonBar(card, userEmail, likes, dislikes);
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

function makeButtonBar(card, userEmail, likes, dislikes) {
    let buttonBar = document.createElement("div");
    buttonBar.setAttribute("class", "buttons");
    card.appendChild(buttonBar);

    let emailDisplay = document.createElement("h5");
    emailDisplay.setAttribute("class", "card-email");
    emailDisplay.textContent = userEmail;
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
    likeNumber.textContent = likes;
    likeButton.appendChild(likeNumber);


    // Dislike Button
    let dislikeButton = document.createElement("button");
    dislikeButton.setAttribute("type", "button");
    dislikeButton.setAttribute("class", "btn btn-sm btn-danger");
    dislikeButton.textContent = "Dislike";
    reactionButtons.appendChild(dislikeButton);

    let dislikeNumber = document.createElement("span");
    dislikeNumber.setAttribute("class", "badge bg-secondary");
    dislikeNumber.textContent = dislikes;
    dislikeButton.appendChild(dislikeNumber);
}