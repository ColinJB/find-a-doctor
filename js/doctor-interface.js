var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;


var displayDoctors = function(doctors){
  doctors.forEach(function(doctor){
    var doctorId = doctorId++;
    $('#body').append('<tr>'+
                      '<td><img src="'+doctor.img+'"></img></td>'+
                      '<td>'+doctor.firstName+' '+doctor.lastName+'</td>'+
                      '<td class="textCenter">'+doctor.gender+'</td>'+
                      '<td class="textCenter"><span class="w3-badge w3-blue" id="number">'+doctor.practiceNumber+'</span></td>'+
                      '<td><span id="bio-'+doctorId+'" class="bio">'+doctor.bio+'</span>'+'<form id='+doctorId+'><input type="hidden" value='+doctorId+' id="id"><span class="click" onclick="'+(document.getElementById(doctorId).submit());+'">Click for bio</span></form>'+'</td>'+
                    '</tr>')
  });
}

$(document).ready(function(){
  $('#symptomButton').click(function(event) {
    var symptoms = $('#symptoms').val();
    getDoctors(symptoms, displayDoctors);
  });

  $('.click').click(function(event){
    var doctorId = $('#id').val();
    $('#bio-'+doctorId+'').show();
  })
});
