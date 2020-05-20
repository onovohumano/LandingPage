// document.addEventListener("DOMContentLoaded", onExitPage, false);
// // let oneTime = true
// let startTime = 0
// let endTime = 0
// let seconds = 0

// function onExitPage() { 
//   let el = document.documentElement
//   el.addEventListener("mouseleave", openMessage, false);
// }

// function openMessage() {
//   end()
//   console.log(seconds + " seconds");

//   if(seconds == 0 || seconds >= 10){
//     // $('#exampleModal').modal('show')
//     alert("Modal")
//     start()
//   }
// }

// function start() {
//   startTime = new Date();
// };

// function end() {
//   if(startTime > 0) {
//     endTime = new Date();
//     var timeDiff = endTime - startTime; //in ms
//     // strip the ms
//     timeDiff /= 1000;
//     // get seconds 
//     seconds = Math.round(timeDiff);
//     console.log(seconds + " seconds");
//   }
// }
window.onload = () => {
document.documentElement.addEventListener("mouseleave", () => {
  $(document).ready(function(){
    $("#exampleModal").modal('show');
});
})
}
