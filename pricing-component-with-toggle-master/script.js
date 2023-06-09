// const toggle = document.querySelector('.checkbox');
// const para = document.querySelector('.emptyP');

// toggle.addEventListener("change", function() {
//   if (toggle.checked) {
//     para.innerHTML = "Hello";
//   } else {
//     para.innerHTML = "Goodbye";
//   }
// });


// const toggle = document.querySelector('.checkbox');
// const monthly = document.querySelector('.monthly-price');
// const annually = document.querySelector('.annual-price');

// toggle.addEventListener("change", function() {
//   if (toggle.checked) {
//     monthly.style.display = "none";
//     annually.style.display = "block";
//   } else {
//     monthly.style.display = "block";
//     annually.style.display = "none";
//   }
// });

const toggle = document.querySelector('.checkbox');
const monthly = document.querySelectorAll('.monthly-price');
const annually = document.querySelectorAll('.annual-price');

toggle.addEventListener("change", function() {
  if (toggle.checked) {
    for (let i = 0; i < monthly.length; i++) {
      monthly[i].style.display = "none";
    }
    for (let i = 0; i < annually.length; i++) {
      annually[i].style.display = "block";
    }
  } else {
    for (let i = 0; i < monthly.length; i++) {
      monthly[i].style.display = "block";
    }
    for (let i = 0; i < annually.length; i++) {
      annually[i].style.display = "none";
    }
  }
});