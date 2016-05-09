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
    sendToDom();
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

  function checkRadioState(){
    for (var i = 0; i < type.length; i++){
      if (type[i].checked){
        return type[i].value;
      }
    }
  }

  function sendToDom(){
    domString = `<table class='table table-striped'>`;
    domString += `<thead><tr>`
    domString += `<th>Name</th><th>Email</th><th>Pledge Amt</th><th>Type</th>`
    domString += `</tr></thead><tbody>`

    let donorInfo = Walkathon.getDonors();
    console.log(donorInfo);
    for (var i = 0; i < donorInfo.length; i++){
      domString += `<tr><td>${donorInfo[i].name}</td>`
      domString += `<td>${donorInfo[i].email}</td>`
      domString += `<td>\$${donorInfo[i].pledge}.00</td>`
      if (donorInfo[i].type === 'lump-sum'){
        domString += `<td>Lump sum</td>`
      } else if (donorInfo[i].type === 'per-lap'){
        domString += `<td>Per Lap</td></tr>`
      }
    }
    domString += `</tbody></table>`
    output.innerHTML = domString;
  }

  submit.addEventListener('click', checkInputs);
  cancel.addEventListener('click', clearInputs);

  return walk;
})(Walkathon || {});
