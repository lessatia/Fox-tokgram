// (() => { "use strict";
//  const e = document.querySelectorAll(".js-player"),
//   t = e => ({ 
//   video: e.querySelector(".js-video"), 
//   playBtn: e.querySelector(".js-play"), 
//   pauseBtn: e.querySelector(".js-pause") }),
//    a = (e, t, a) => { e.pause(), e.currentTime = 0, 
//    t.classList.add("active"), 
//    a.classList.remove("active") }, s = s => { const { video: n, playBtn: c, pauseBtn: r } = t(s.currentTarget.parentElement); var i; i = n.id, e.forEach((e => { const { video: s, playBtn: n, pauseBtn: c } = t(e); i && s.id === i || a(s, n, c) })), n.play(), c.classList.remove("active"), r.classList.add("active") }, n = e => { const { video: a, playBtn: s, pauseBtn: n } = t(e.currentTarget.parentElement); a.pause(), s.classList.add("active"), n.classList.remove("active") }, c = e => { const { video: s, playBtn: n, pauseBtn: c } = t(e.currentTarget.parentElement); a(s, n, c) }; e.forEach((e => { const { video: a, playBtn: r, pauseBtn: i } = t(e); r.addEventListener("click", s), i.addEventListener("click", n), a.addEventListener("ended", c) })) })();



const players=document.querySelectorAll(".js-player");
const videoElements =(player)=>{
   return{
      video:player.querySelector(".js-video"),
      playBtn:player.querySelector(".js-play"),
      pauseBtn:player.querySelector(".js-pause"),
   };
};
const stopVideo=(video, playBtn, pauseBtn)=>{
   video.pause();
   video.currentTime=0;
   playBtn.classList.add("active");
   pauseBth.classList.remove("active");
}
const stopAllVideos=(skipVideoId)=>{
   players.forEach((player)=>{
      const{video,playBtn,pauseBtn}=videoElements(player);
      if(skipVideoId && video.id ===skipVideoId){
         return;
      }
      stopVideo(video,playBtn, pauseBtn);
   });
};

const play =(event)=>{
   const{video, playBtn,pauseBth}= videoElements(
      event.currentTarget.parentElement);
   stopAllVideos(video.id);
   video.play();
   playBtn.classList.remove("active");
   pauseBtn.classList.add("active");
};
const pause =(event)=>{
   const{video, playBtn, pauseBth}= videoElements(
      event.currentTarget.parentElement);
   video.pause();
   playBtn.classList.add("active");
   pauseBtn.classList.remove("active");
};

const stop=(event)=>{
   const{video, playBtn, pauseBth}= videoElements(
      event.currentTarget.parentElement);
   stopVideo(video, playBtn, pauseBth);
};

   players.forEach((player)=>{
      const{video,playBtn,pauseBtn}=videoElements(player);
      platBtn.addEventLitener("click", play);
      pauseBtn.addEventLitener("click", pause);
      video.addEventLitener("ended", stop);


   });