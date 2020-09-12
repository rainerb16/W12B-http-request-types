// POST - CREATING TWEET
function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("post-result").innerHTML = "*Dab* Your message has been posted!";
        } else if (this.readyState != 4) {
            document.getElementById("post-result").innerHTML = "Hold up! We're Loading...";
        } else {
            document.getElementById("post-result").innerHTML = "*WOMP, WOMP* Your message did not post, please try again.";
        }
    };

    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);



// PATCH - UPDATING TWEET
function updateTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let updateData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(this.responseText));
                document.getElementById("post-result").innerHTML = "BAM! Your post is updated!";
            } else if (this.readyState != 4) {
                document.getElementById("post-result").innerHTML = "Hold up! We're Loading...";
            } else {
                document.getElementById("post-result").innerHTML = "*WOMP, WOMP* Your message did not post, please try again.";
            }
        };

        ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(updateData));
}

let updateButton = document.getElementById("tweet-update");
updateButton.addEventListener("click", updateTweet);



// DELETE - DELETING TWEET
function deleteTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;

    let deleteData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                console.log(JSON.parse(this.responseText));
                document.getElementById("post-result").innerHTML = "Ready, Set, Deleted!";
            } else if (this.readyState != 4) {
                document.getElementById("post-result").innerHTML = "Hold up! We're Loading...";
            } else {
                document.getElementById("post-result").innerHTML = "*WOMP, WOMP* Your message did not post, please try again.";
            }
        };

        ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(deleteData));
}

let deleteButton = document.getElementById("tweet-delete");
deleteButton.addEventListener("click", deleteTweet);




// GET - SHOWING ALL TWEETS
function showTweets() {
    let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let showPosts = (JSON.parse(this.responseText));
                let postElement = document.getElementById("posts-container");
                
                for(i = 0; i < showPosts.length; i++) {
                    postElement.innerHTML += "<h3 class='post-title'><u>" + showPosts[i].title + "</u></h3>" + "<p class='post-content'>" + showPosts[i].body + "</p>";
                    let comments = document.createElement("div");
                    showComments(showPosts[i].id, comments);
                    postElement.appendChild(comments);
                };
            } else if (this.readyState != 4) {
                document.getElementById("post-result").innerHTML = "Hold up! We're Loading...";
            } else {
                document.getElementById("post-result").innerHTML = "*WOMP, WOMP* Your message did not post, please try again.";
            }
        };
        ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send();
}

showTweets();



// BONUS - SHOWING ALL COMMENTS (I TRIED REAL HARD, Alex.)
function showComments(id, comments) {
    let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let tweetComments = (JSON.parse(this.responseText));
                for(i = 0; i < tweetComments; i++) {
                    let commentDiv = document.createElement("div");
                    commentDiv.innerHTML = "<h1>" + tweetComments[i].name + "</h1>" + "<h1>" + tweetComments[i].body + "</h1>"; 
                    comments.appendChild(commentDiv);
                    console.log(comments);
                }
            }
        }
        ajax.open("GET", "https://jsonplaceholder.typicode.com/posts/" + id + "/comments" , true);
        // ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(); 
};

