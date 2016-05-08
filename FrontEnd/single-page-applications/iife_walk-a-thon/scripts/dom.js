'use-strict';

var Walkathon = (function(walk){

  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let pledge = document.getElementById('pledge');
  let type = document.getElementsByClassName('type');
  let submit = document.getElementById('btn-submit');
  let cancel = document.getElementById('btn-cancel');

  walk.getInputs = function(){
    console.log('getInputs running');
    let donor = {};
    donor.name = name.value;
    donor.email = email.value;
    donor.pledge = pledge.value;
    donor.type = ''; //need function for class
    Walkathon.addDonor(donor);
  }

  walk.checkInputs = function(){
    console.log('checkInputs running');
    if (!name.value || !email.value || !pledge.value){
      alert('All fields must be filled')
    }
    walk.getInputs();
  }

  walk.clearInputs = function(){
    console.log('clearInputs running');
    name.value = '';
    email.value = '';
    pledge.value = '';
    type.value = ''; //need function for class
  }

  submit.addEventListener('click', walk.checkInputs);
  cancel.addEventListener('click', walk.clearInputs);

  return walk;
})(Walkathon || {});


