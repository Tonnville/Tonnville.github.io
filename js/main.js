const btns = document.querySelectorAll(".buttons button");
const face = document.getElementsByClassName("face");[0]

for (i=0; 1< btns.length; i++){
  btns[i].addEventListener("click", manageHeadClasses);
}
function manageHeadClasses(){
  //alert("testing 123")

  if(this.getAttribute("data-add")){
  head.classlist.add(this.getAttribute("data-add"));
  }
}
function manageHeadClasses(){
  if(this.getAttribute("data-remove")){
  head.classlist.remove(this.getAttribute("data-remove"));
  }


}


window.addEventListener("DOMContentLoaded", function(){

// const audio = document.getElementById('audio');
// const button = document.getElementById('button');

// audio.src  = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3'

// button.addEventListener('click', function(){
//  audio.currentTime = 0;
//  //placing it above play - will reset to 0 seconds when  click function runs; if you want it to play once leave this out
//  audio.play();
// });
//
// const video = document.getElementById('video');
// const play= document.getElementById('play-button');
// const pause = document.getElementById('pause-button')

const button = document.getElementById('button');

// play.addEventListener('click', function(){
//   video.play();
// })
//
// pause.addEventListener('click', function pausevid() {
//   video.pause();
// });

button.addEventListener('click', function(e) {
  if(e.target.innerText === 'Play') {
    video.play();
    e.target.innerText = 'Pause';
  } else {
    video.pause();
    e.target.innerText = 'Play';
  }
})


});
