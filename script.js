let hamburger = document.getElementById("hamburger");
let closeIcon = document.getElementById("close-icon");
let navLinks = document.getElementById("menu-bar");
isOpen = false
hamburger.addEventListener("click", (e) => {


  if (hamburger.style.display = 'none') {
    navLinks.style.display = 'block'
    
  } if(hamburger.style.display = 'block'){
      closeIcon.addEventListener("click", (e) => {
        navLinks.style.display = 'none'

    });
  }

});
















// hamburger.addEventListener("click", (e) => {


//   if (hamburger.style.display == 'none') {
//     navLinks.style.display = 'block'
    
//   } else{
//     hamburger.style.display = 'block'
    
//   }

// });

// closeIcon.addEventListener("click", (e) => {


//   if (navLinks.style.display == 'block') {
//     navLinks.style.display = 'none'
   
//   } else{
//     hamburger.style.display = 'block'
    
//   }

// });











