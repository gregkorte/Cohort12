'use-strict';

var Walkathon = (function(walk){
  let donors = [];

  walk.getDonors = function(){
    return donors;
  }

  walk.addDonor = function(donor){
    donors.push(donor);
  }

  return walk;
})(Walkathon || {});
