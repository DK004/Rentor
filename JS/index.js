const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () =>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});


// typewriter effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["New in the city?", "Welcome to Rentor!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});





// searchbar

// let suggestions = [
//   "Badnera","PRMIT&R","Raisoni","Sipna","Sai Nagar","pote college","Address"
// ]


// getting all required elements
const gallery = document.getElementsByClassName('gallery')
const area = document.querySelectorAll(".area");
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
const card = document.getElementsByClassName('card');
// console.log(card[0].innerHTML)
// if user press any key and release

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        inputBox.onkeyup = ()=>{
          for(i=0;i<card.length;i++){
            if(card[i].innerText.toLocaleLowerCase().indexOf(inputBox.value.toLocaleLowerCase())> -1){
              card[i].style.display = 'block';
            }
            else{
              card[i].style.display = 'none';
            }
          }
        }
        emptyArray = suggestions.filter((data)=>{
          //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
          // passing return data inside li tag
          return data = '<li>'+ data +'</li>';
        });
        // searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          // allList[i].setAttribute("onclick", "select(this)");
        }
      }else{
        // searchWrapper.classList.remove("active"); //hide autocomplete box
      }
    }
    function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
      for(i=0;i<card.length;i++){
        if(card[i].innerText.toLocaleLowerCase().indexOf(inputBox.value.toLocaleLowerCase())> -1){
          card[i].style.display = 'block';
          // flag = 1
        }
        else{
          card[i].style.display = 'none';
        }
      
    }
    searchWrapper.classList.remove("active");
}
}