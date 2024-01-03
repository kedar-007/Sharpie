// Simulated functions for createPost, updateLastUserActivityTime, and deletePost
function createPost(post) {
  return new Promise((resolve) => {
    // Simulating asynchronous operation
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime(userId) {
  return new Promise((resolve) => {
    // Simulating asynchronous operation
    setTimeout(() => {
      const lastActivityTime = new Date().toLocaleTimeString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost(postId) {
  return new Promise((resolve) => {
    // Simulating asynchronous operation
    setTimeout(() => {
      resolve(postId);
    }, 1000);
  });
}

// Function to handle the entire process
async function processPostCreation(userId, postContent) {
  try {
    // Step 1: Create a post and update last user activity time in parallel
    const [createdPost, lastActivityTime] = await Promise.all([
      createPost(postContent),
      updateLastUserActivityTime(userId),
    ]);

    // Log posts and lastActivityTime
    console.log("All posts:", [createdPost]);
    console.log("Last Activity Time:", lastActivityTime);

    // Step 3: Delete the last post
    const deletedPostId = await deletePost(createdPost.id);

    // Log remaining posts
    console.log("Remaining Posts:", []);

  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// Example usage
const userId = 123;
const postContent = "This is a new post.";

// Call the processPostCreation function
processPostCreation(userId, postContent);
