'use-strict';

var Walkathon = (function(walk){
  let donors = {
    name: 'John Donut',
    pledge: 70
  }

  walk.getDonors = function(){
    return donors;
  }

  walk.addDonor = function(donor){
    console.log('addDonor running')
    console.log(donor);
  }

  return walk;
})(Walkathon || {});
