function pintar(event){
    event.target.style.backgroundColor = 'yellow';
  }
  window.onload = function() {
    const ele = document.getElementById("ele1");
    ele.addEventListener("click", pintar);
  }
  
