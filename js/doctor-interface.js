var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

var displayDoctors = function(doctors){
  console.log(typeof doctors);
  doctors.forEach(function(doctor){
    $('#body').append('<tr>'+
                      '<td><img src="'+doctor.img+'"></img></td>'+
                      '<td>'+doctor.firstName+doctor.lastName+'</td>'+
                      '<td>'+doctor.bio+'</td>'+
                    '</tr>')
  });
}

$(document).ready(function(){
  $('#symptomButton').click(function(event) {
    var symptoms = $('#symptoms').val();
    getDoctors(symptoms, displayDoctors);
  });
});
