var apiKey = require('./../.env').apiKey;

function Doctor() {
  this.firstName;
  this.lastName;
  this.gender;
  this.practices = [];
  this.img;
  this.bio;
  this.practiceNumber;
}

exports.getDoctors = function(symptoms, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ symptoms+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {
      var doctors = [];
      response.data.forEach(function(doctor){
        var newDoctor = new Doctor();
        newDoctor.firstName = doctor.profile.first_name;
        newDoctor.lastName = doctor.profile.last_name;
        newDoctor.gender = doctor.profile.gender.charAt(0).toUpperCase();
        doctor.practices.forEach(function(practice){
          newDoctor.practices.push(practice);
        });
        newDoctor.practiceNumber = newDoctor.practices.length;
        if (doctor.profile.img_url === null){
          newDoctor.img = "http://www.healthplusmedical.com.au/site/DefaultSite/skins/default/images/doctor-default-image.jpg"
        } else{
          newDoctor.img = doctor.profile.image_url;
        }
        console.log(newDoctor.img);
        newDoctor.bio = doctor.profile.bio;
        doctors.push(newDoctor);
      });
      displayDoctors(doctors);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
