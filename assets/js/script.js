// Get the modal
var modal = document.getElementById('videoModal');
// Get the iframe within the modal
var iframe = modal.querySelector('iframe');
// Get all video buttons
var videoButtons = document.querySelectorAll('.video-btn');

// When a video button is clicked, open the modal and load the video
videoButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
        var videoId = btn.getAttribute('data-video-id');
        iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
        modal.style.display = 'block';
    });
});

// When the user clicks anywhere in the modal outside the video, close it
modal.addEventListener('click', function(event) {
    modal.style.display = "none";
    iframe.src = ''; // Stop the video by clearing the src
});
