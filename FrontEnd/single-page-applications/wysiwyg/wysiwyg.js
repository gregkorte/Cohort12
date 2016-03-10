"use strict";
let people = [
  {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {
      birth: 1747,
      death: 1797
    }
  },
  {
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
}
]

let output = document.getElementById('output');
let input = document.getElementById('input');
let card = document.getElementsByClassName('card');
let bio = document.getElementsByClassName('bio');

function loadDom(){
  for (let i = 0; i < people.length; i++){
    let person = people[i];
    output.innerHTML += `<person class="card"><header>${person.name}: ${person.title}</header><section><div class="bio">${person.bio}</div><img src="${person.image}"></section><footer>${person.lifespan.birth} - ${person.lifespan.death}</footer></person>`
    getBackground(i);
  }
  loadClickEvents();
}

function getBackground(i){
  if (i % 2 === 0){
    card[i].classList.add('yellow');
    return;
  }
  card[i].classList.add('blue');
  return;
}

function loadClickEvents(){
  for (let i = 0; i < card.length; i++){
    let currCard = card[i];
    let currBio = bio[i];
    currCard.addEventListener('click', function(){
      removeSelected(currCard);
      currCard.classList.add('selected');
      input.value = '';
      input.focus();
      loadKeyEvent(currBio, currCard)
    })
  }
}

// ... Loads the keypress events ... //
function loadKeyEvent(currBio, currCard){
  input.addEventListener('keyup', function(event){
    if (currCard.classList.contains('selected')){
    let newBio = event.currentTarget.value;
    currBio.innerHTML = newBio;
      if (event.keyCode === 13){
        currBio.innerHTML = newBio;
        input.value = '';
      }
    }
  })
}

// ... Removes selected class from card ... //
function removeSelected(){
  for (let i = 0; i < card.length; i++){
    card[i].classList.remove('selected');
  }
}

loadDom();