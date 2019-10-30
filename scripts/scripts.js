let image = document.querySelector('#seasonChange');
let otherimage = document.querySelector('#fourSeasons');

   image.onclick = () => {
     if (image.getAttribute("src") === "images/dryseason.jpeg") {
       image.setAttribute("src", "images/rainyseason.jpeg");
     } else {
       image.setAttribute("src", "images/dryseason.jpeg");
     }
   };

  otherimage.onmouseover = () => {
    otherimage.classList.toggle("border");
  }
