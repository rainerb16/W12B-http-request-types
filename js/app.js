// POST
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



// PATCH
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



// DELETE
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



// GET
function showTweets() {
    let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                let showPosts = (JSON.parse(this.responseText));
                for(i = 0; i < showPosts.length; i++) {
                    let allTitles = document.getElementById("posts-container").innerHTML += "<h3 id='post-title'><u>" + showPosts[i].title + "</u></h3>" + "<p id='post-content'>" + showPosts[i].body + "</p>";
                    document.getElementById("post-result").innerHTML = "All Posts!";
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


// BONUS - COMMENTS
