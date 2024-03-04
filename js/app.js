function topnavResponsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

let blog1 = document.querySelector("#painting");
let blog2 = document.querySelector("#henger");
let blog3 = document.querySelector("#brush");
let blog4 = document.querySelector("#yinyang");


function onSelect(el){
  const option = el.value;
  if (option === 'years'){
    blog1.hidden = false;
    blog2.hidden = false;
    blog3.hidden = false;
    blog4.hidden = false;
  } else if (option === '2024'){
    blog1.hidden = true;
    blog2.hidden = true;
    blog3.hidden = true;
    blog4.hidden = false;
  } else if (option === '2023'){
    blog1.hidden = true;
    blog2.hidden = false;
    blog3.hidden = false;
    blog4.hidden = true;
  } else if (option === '2022'){
    blog1.hidden = false;
    blog2.hidden = true;
    blog3.hidden = true;
    blog4.hidden = true;
  }
}