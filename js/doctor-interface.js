var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

var symptoms;

var displayDoctors = function(doctors){
  console.log(doctors);
  // doctors.forEach(function(doctor){
  //   $('#body').text('<tr>'+
  //                     '<td><img src='+doctor.img+'></img></td>'+
  //                     '<td>'+doctor.firstName+doctor.lastName+'</td>'+
  //                     '<td>'+doctor.bio+'</td>'+
  //                   '</tr>')
  // });
}

$(document).ready(function(){
  $('#symptomButton').click(function(event) {
    symptoms = $('#symptoms').val();
    var doctors = getDoctors(symptoms);
    console.log(doctors);
    displayDoctors(doctors);
  });
});

exports.displayDoctors = displayDoctors();
