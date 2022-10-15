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
  for (let i = 0; i < posts.length; i++) {
    screen.innerHTML += `
      <section class="post-wrapper round-border">
  
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
            <i class="fa-regular fa-heart pointer"></i>
            <i class="fa-regular fa-comment pointer"></i>
            <i class="fa-regular fa-share-from-square pointer"></i>
          </div>
  
          <span class="likes-count bold pointer">${posts[i].likes} likes</span>
  
          <p class="user-caption">
            <span class="user-name bold pointer">${posts[i].username}</span> ${posts[i].caption}
          </p>
  
        </div>
  
      </section>
    `;
  }

  // Like by double clicking on the images
  for (let i = 0; i < posts.length; i++) {
    const postImg = document.getElementsByClassName("post-img")[i];
    const imageMiddleLike =
      document.getElementsByClassName("image-middle-like")[i];

    postImg.addEventListener("dblclick", function () {
      imageMiddleLike.style.display = "block";
      setTimeout(() => {
        // removes element from DOM after given time
        // so we can re run the action
        imageMiddleLike.style.display = "none";
      }, 1000);
    });
  }
}
renderPage();
