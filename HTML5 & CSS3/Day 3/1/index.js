let videoElement = document.getElementById("videoElement");
let videoNamesElement = document.getElementsByClassName("videoNames")[0];

let videoMap = [
    {id:1, src:"videos/1.mp4"},
    {id:2, src:"videos/2.mp4"},
    {id:3, src:"videos/3.mp4"},
    {id:4, src:"videos/4.mp4"},
    {id:5, src:"videos/5.mp4"},
    {id:6, src:"videos/6.mp4"},
    {id:7, src:"videos/7.mp4"},
    {id:8, src:"videos/8.mp4"},
    {id:9, src:"videos/9.mp4"},
    {id:10, src:"videos/10.mp4"}
]


videoElement.addEventListener("dblclick", function(){
    videoElement.requestFullscreen();
});

videoNamesElement.addEventListener("click", function (e){
    if (e.target.nodeName === 'BUTTON') {
        setBackgroundToWhiteForPs();
        e.target.style.backgroundColor = "#3059A3";
        let videoId = e.target.id;
        // let targetVideo = videoMap[videoId - 1].src;
        let targetVideo = videoMap.find(v => v.id == videoId).src;
        videoElement.src = targetVideo;
    }
});

videoNamesElement.addEventListener("keydown", function(e){
    if (e.target.nodeName === 'BUTTON' && e.key === "ArrowDown") {
        setBackgroundToWhiteForPs();
        let lastVideoId = e.target.id;
        let targetVideo;
        if (lastVideoId < 10) {
            document.getElementById(`${Number(lastVideoId) + 1}`).style.backgroundColor = "#3059A3";
            targetVideo = videoMap.find(v => v.id == (Number(lastVideoId) + 1)).src;
            document.getElementById(`${Number(lastVideoId) + 1}`).focus();
        } else {
            targetVideo = videoMap.find(v => v.id == 10).src;
        }
        videoElement.src = targetVideo;
    } else if(e.target.nodeName === 'BUTTON' && e.key === "ArrowUp"){
        setBackgroundToWhiteForPs();
        let lastVideoId = e.target.id;
        let targetVideo;
        if (lastVideoId > 1) {
            document.getElementById(`${lastVideoId - 1}`).style.backgroundColor = "#3059A3";
            targetVideo = videoMap.find(v => v.id == (lastVideoId - 1)).src;
            document.getElementById(`${lastVideoId - 1}`).focus();
        } else {
            targetVideo = videoMap.find(v => v.id == 1).src;
        }
        videoElement.src = targetVideo;
    }
});

function setBackgroundToWhiteForPs(){
    let allPs = videoNamesElement.children;
    for (let i = 0; i < allPs.length; i++) {
        allPs[i].style.backgroundColor = "white";
    }
}