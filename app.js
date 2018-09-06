// $(document).ready(function(){

//     var displayTweets = function(tweetList){
//       var tweetContainer = $("#tweet-container");
//       tweetContainer.html('');
//       var index = tweetList.length - 1; //index of the array youre on
//       while(index >= 0){ //while theres more than one tweet
//         var tweet = tweetList[index];
//         var tweetAvatar = $("<img src= />");
//         var tweetDiv = $('<div></div>'); //create a new div for the tweet
//         tweetDiv.css({"border-radius": "10px"});
//         tweetDiv.addClass("tweetSection");
//         tweetDiv.attr('user', tweet.user); //setting attr user as tweet.user
//         tweetDiv.text('@' + tweet.user + ': ' + tweet.message +  '\ncreated at ' + tweet.created_at.toDateString() + ' at ' + tweet.created_at.toLocaleTimeString());
//         tweetDiv.click(filterForTweets);
//         tweetDiv.appendTo(tweetContainer);
//         index -= 1; //go to the next tweet
//       }
//     }

//     $("#load-tweet-button").click(function(){
//       $("#load-tweet-button").text("Refresh tweets!");
//       displayTweets(streams.home)
//     })

//     function filterForTweets(event){
//       var target = $(event.target); //selecting for a specific target
//       var username = target.attr('user');
//       var usernameTweets = streams.users[username]; 
//       displayTweets(usernameTweets);
//     }

//     $("#tweet-button").click(function(){
//       var yourTweetVal = $("#create-tweet-input").val();
//       var yourTweet = writeTweet(yourTweetVal); //now the tweet is in an obj and it got pushed to the list of tweets
//       displayTweets(streams.home);
//       $("#create-tweet-input").val('');
//     })

//     $("#create-tweet-input").focus(function(){
//       $("#create-tweet-input").val("");
//       $("#create-tweet-input").css({"color": "#131313"});
//     })

//     displayTweets(streams.home);

//     });