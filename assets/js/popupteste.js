const lightbox = document.querySelector("#lightbox");
window.onmousemove = (e) => {
  if(e.clientY < 10) {
    lightbox.classList.toggle("hidden", false);
    window.onclick = (e) => {
      lightbox.classList.toggle("hidden", true);
      window.onclick = null;
    }
  } 
};