  // Sample initial data for posts
let posts = [
    
    "Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done.Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done.",

    "Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done.Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done.",
    
    "Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done.Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done. Hello world this is my Mini Hackaton project which I done with firebase authentication and my crud app is done.",

  ];
  
  // Function to display the posts
  function displayPosts() {
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = "";
    posts.forEach((post, index) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
        <span contenteditable="false" id="post-${index}">${post}</span>
        <button onclick="editPost(${index})">Edit</button>
        <button onclick="deletePost(${index})">Delete</button>
      `;
      postsList.appendChild(postElement);
    });
  }
  
  // Function to create a new post
  function createPost() {
    const postInput = document.getElementById("postInput");
    const newPost = postInput.value.trim();
    if (newPost !== "") {
      posts.push(newPost);
      postInput.value = "";
      displayPosts();
    }
  }
  
  // Function to edit a post
  function editPost(index) {
    const postElement = document.getElementById(`post-${index}`);
    postElement.contentEditable = "true";
    postElement.focus();
  }
  
  // Function to save edited post
  function saveEditedPost(index) {
    const postElement = document.getElementById(`post-${index}`);
    posts[index] = postElement.innerText.trim();
    postElement.contentEditable = "false";
  }
  
  // Function to delete a post
  function deletePost(index) {
    posts.splice(index, 1);
    displayPosts();
  }
  
  // Display initial posts
  displayPosts();
  
  //new code i attached
  