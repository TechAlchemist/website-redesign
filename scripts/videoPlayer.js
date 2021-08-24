var $videoPlayer = $("#videoPlayer");
var $videoTitle = $("#videoTitle");

const videoTitles = ["Video 1", "Video 2", "Video 3"];
const videoSources = ["../videos/video1.mp4"," ../videos/video2.mp4", "../videos/video3.mp4"];
// the current position the user is in the video array
var videoPos = 0;


// Loop through all videos in the array. 
$("#nextVideo").click(function() {
    if (videoPos >= videoSources.length - 1) videoPos = 0;
    else videoPos++;
    $videoPlayer.attr("src", videoSources[videoPos]);
    $videoTitle.text(videoTitles[videoPos]);
});