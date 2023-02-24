// const players = document.querySelectorAll(".js-player");

// const videoElements = (player) => {
//   return {
//     video: player.querySelector(".js-video"),
//     playBtn: player.querySelector(".js-play"),
//     pauseBtn: player.querySelector(".js-pause"),
//   };
// };

// const stopVideo = (video, playBtn, pauseBtn) => {
//   video.pause();
//   video.currentTime = 0;
//   playBtn.classList.add("active");
//   pauseBtn.classList.remove("active");
// };

// const stopAllVideos = (skipVideoId) => {
//   players.forEach((player) => {
//     const { video, playBtn, pauseBtn } = videoElements(player);

//     if (skipVideoId && video.id === skipVideoId) {
//       return;
//     }

//     stopVideo(video, playBtn, pauseBtn);
//   });
// };

// const play = (event) => {
//   const { video, playBtn, pauseBtn } = videoElements(
//     event.currentTarget.parentElement
//   );
//   stopAllVideos(video.id);
//   video.play();
//   playBtn.classList.remove("active");
//   pauseBtn.classList.add("active");
// };

// const pause = (event) => {
//   const { video, playBtn, pauseBtn } = videoElements(
//     event.currentTarget.parentElement
//   );
//   video.pause();
//   playBtn.classList.add("active");
//   pauseBtn.classList.remove("active");
// };

// const stop = (event) => {
//   const { video, playBtn, pauseBtn } = videoElements(
//     event.currentTarget.parentElement
//   );
//   stopVideo(video, playBtn, pauseBtn);
// };

// players.forEach((player) => {
//   const { video, playBtn, pauseBtn } = videoElements(player);
//   playBtn.addEventListener("click", play);
//   pauseBtn.addEventListener("click", pause);
//   video.addEventListener("ended", stop);
// });
