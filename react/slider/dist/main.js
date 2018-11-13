// $(document).ready(function() {
//   var btn = document.getElementsByClassName('play');
//   btn.click(function() {
//     btn.toggleClass("paused");
//     return false;
//   });
// });

var btn = document.getElementsByClassName('button play');
btn[0].onclick=function(){
  this.classList.toggle('paused');
  this.classList.toggle('play')
}