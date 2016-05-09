'use-strict';

var Walkathon = (function(walk){

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let pledge = document.getElementById('pledge');
  let type = document.getElementsByClassName('type');
  let submit = document.getElementById('btn-submit');
  let cancel = document.getElementById('btn-cancel');
  let output = document.getElementById('output');
  let domString = '';

  function getInputs(){
    let donor = {};
    donor.name = name.value;
    donor.email = email.value;
    donor.pledge = pledge.value;
    donor.type = checkRadioState();
    Walkathon.addDonor(donor);
    clearInputs();
  }

  function checkInputs(){
    if (!name.value || !email.value || !pledge.value || !(type[0].checked || type[1].checked)){
      alert('All fields must be filled')
      return;
    }
    getInputs();
  }

  function clearInputs(){
    for (var i = 0; i < type.length; i++){
      type[i].checked = false;
    }
    name.value = '';
    email.value = '';
    pledge.value = '';
  }

  function sendToDom(){
    let donorInfo = Walkathon.getDonors();
    for (var i = 0; i < donorInfo.length; i++){
      output.innerHTML += `<div>${donorInfo[i].name}</div>`
      output.innerHTML += `<div>${donorInfo[i].email}</div>`
      output.innerHTML += `<div>${donorInfo[i].pledge}</div>`
    }
  }

  function checkRadioState(){
    for (var i = 0; i < type.length; i++){
      if (type[i].checked){
        return type[i].value;
      }
    }
  }

  submit.addEventListener('click', checkInputs);
  cancel.addEventListener('click', clearInputs);

  return walk;
})(Walkathon || {});
