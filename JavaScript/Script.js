// Posts Data
const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    caption: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    caption: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    caption:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

// Getting DOMs
const screen = document.getElementById("screen");

function renderPage() {
  // Render Posts
  let renderedPosts = "";
  for (let i = 0; i < posts.length; i++) {
    renderedPosts += `
      <section class="post-wrapper round-border box-shadow wide-screen">
  
        <div class="post-header p-1">
  
          <img
            class="avatar-img pointer"
            src="${posts[i].avatar}"
            alt="vangogh avatar"
          />
  
          <div>
            <p class="user-full-name bold pointer">${posts[i].name}</p>
            <p class="post-location pointer">${posts[i].location}</p>
          </div>
  
        </div>
  
        
        <img class="post-img" src="${posts[i].post}" alt="post image" />
        <i class="fa-solid fa-heart image-middle-like"></i>
  
  
        <div class="p-1">
  
          <div class="post-icon">
            <i class="fa-regular fa-heart pointer like-button button"></i>
            <i class="fa-regular fa-comment pointer button"></i>
            <i class="fa-regular fa-share-from-square pointer button"></i>
          </div>
  
          <p class="likes bold pointer"><span class="likes-count">${posts[i].likes}</span> likes</p>
  
          <p class="user-caption">
            <span class="user-name bold pointer">${posts[i].username}</span> ${posts[i].caption}
          </p>
  
        </div>
  
      </section>
    `;
  }
  screen.innerHTML += renderedPosts;
  // Looping through posts for adding event listener
  for (let i = 0; i < posts.length; i++) {
    // Getting DOM of the post image for adding event listener
    const postImg = document.getElementsByClassName("post-img")[i];

    const imageMiddleLike =
      document.getElementsByClassName("image-middle-like")[i];

    let dblClicked = false;
    postImg.addEventListener("dblclick", function () {
      imageMiddleLike.style.display = "block";
      likeButton.className =
        "fa-solid fa-heart pointer like-button button like-filled";
      if (dblClicked === false && likeButtonClick === false) {
        posts[i].likes++;
        likesCount.textContent++;
        dblClicked = true;
      }
      setTimeout(() => {
        // removes element from DOM after given time
        // so we can re run the action
        imageMiddleLike.style.display = "none";
      }, 1000);
    });

    // Getting DOM of the like button for adding event listener
    const likeButton = document.getElementsByClassName("like-button")[i];
    const likesCount = document.getElementsByClassName("likes-count")[i];
    let likeButtonClick = false;
    likeButton.addEventListener("click", function () {
      if (
        likeButton.className == "fa-regular fa-heart pointer like-button button"
      ) {
        likeButton.className =
          "fa-solid fa-heart pointer like-button button like-filled";
        posts[i].likes++;
        likesCount.textContent++;
        likeButtonClick = true;
      } else {
        likeButton.className = "fa-regular fa-heart pointer like-button button";
        posts[i].likes--;
        likesCount.textContent--;
        likeButtonClick = false;
        dblClicked = false;
      }
    });

    if (
      likeButton.className ==
      "fa-solid fa-heart pointer like-button button like-filled"
    ) {
      renderPage();
    }
  }
}
renderPage();
