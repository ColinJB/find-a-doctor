var apiKey = require('./../.env').apiKey;
// var displayDoctors = require('./../js/doctor-interface.js').displayDoctors;

function Doctor() {
  this.firstName;
  this.lastName;
  this.gender;
  this.practices = [];
  this.img;
  this.bio;
}

exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {
      var doctors = [];
      response.data.forEach(function(doctor){
        var newDoctor = new Doctor();
        newDoctor.firstName = doctor.profile.first_name;
        newDoctor.lastName = doctor.profile.last_name;
        newDoctor.gender = doctor.profile.gender;
        doctor.practices.forEach(function(practice){
          newDoctor.practices.push(practice)
        });
        newDoctor.img = doctor.image_url;
        newDoctor.bio = doctor.bio;
        doctors.push(newDoctor);
      });
      return doctors;
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
