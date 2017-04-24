var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;


var displayDoctors = function(doctors){
  doctors.forEach(function(doctor){
    $('#body').append('<tr>'+
                      '<td><img src="'+doctor.img+'"></img></td>'+
                      '<td>'+doctor.firstName+' '+doctor.lastName+'</td>'+
                      '<td>'+doctor.gender+'</td>'+
                      '<td><span id="bio">'+doctor.bio+'</span><span class="click">Click for bio.</span>'+'</td>'+
                      '<td><span class="w3-badge w3-blue" id="number">'+doctor.practiceNumber+'</span></td>'+
                    '</tr>')
  });
}

$(document).ready(function(){
  $('#symptomButton').click(function(event) {
    var symptoms = $('#symptoms').val();
    getDoctors(symptoms, displayDoctors);
  });
});
