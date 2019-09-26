

// $("#frameID").attr("src", "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0");

// var video = $('<video />', {
//     id: 'video',
//     src: 'http://video-js.zencoder.com/oceans-clip.mp4',
//     type: 'video/mp4',
//     controls: true
// });
// video.appendTo($('#gallery'));


// var jsonStructure = {

// }

var videoSection = $("#divVideo")


// var divVideo = $("<div/>", {
//     class: "embed-responsive embed-responsive-16by9",
//     id: "divVideo"
// })


var videoFrame = $("<iFrame/>", {
    id: "video",
    src: "https://www.youtube.com/embed/cBusDEvg9Tw?controls=0",
    class: "embed-responsive-item",
    allowfullscreen: true
});

// videoFrame.appendTo($(divVideo))

videoFrame.appendTo($(videoSection))



