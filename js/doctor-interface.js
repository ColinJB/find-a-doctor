var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;
var getDoctors = require('./../js/doctor.js').getDoctors;

var symptoms;

$(document).ready(function(){
  $('#symptomButton').click(function(event) {
    symptoms = $('#symptoms').val();
    getDoctors(symptoms);
  });
});
