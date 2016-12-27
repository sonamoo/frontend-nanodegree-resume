skills = ["Python","JavaScript","SQL","C++","AngularJS","MongoDB"];

var bio = {
	"name" : "Seho Lim",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "224-730-0978",
		"email" : "limseho657424@gmail.com",
		"github" :"github.com/sonamoo",
		"linkedIn" : "linkedin.com/in/seholim",
		"location"  : "Chicago"
	},
	"welcome" : "Hi guys!",
	"profile" : "images/profile.jpg",
	"skills" : skills
};

var work = {};
work.position = "Sales Representative"
work.employer = "Groupon Korea"
work.years = 1;

var education = {};
education["name"] = "University of Illinois in Chicago"
education["years"] = "2017-2018"
education["city"] = "Chicago"

HTMLheaderName = HTMLheaderName.replace("%data%",bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
HTMLlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.profile);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

HTMLworkStart
HTMLworkEmployer
HTMLworkTitle
HTMLworkDates
HTMLworkLocation
HTMLworkDescription

HTMLprojectStart = '<div class="project-entry"></div>';
HTMLprojectTitle = '<a href="#">%data%</a>';
HTMLprojectDates = '<div class="date-text">%data%</div>';
HTMLprojectDescription = '<p><br>%data%</p>';
HTMLprojectImage = '<img src="%data%">';

HTMLschoolStart = '<div class="education-entry"></div>';
HTMLschoolName = '<a href="#">%data%';
HTMLschoolDegree = ' -- %data%</a>';
HTMLschoolDates = '<div class="date-text">%data%</div>';
HTMLschoolLocation = '<div class="location-text">%data%</div>';
HTMLschoolMajor = '<em><br>Major: %data%</em>';

HTMLonlineClasses = '<h3>Online Classes</h3>';
HTMLonlineTitle = '<a href="#">%data%';
HTMLonlineSchool = ' - %data%</a>';
HTMLonlineDates = '<div class="date-text">%data%</div>';
HTMLonlineURL = '<br><a href="#">%data%</a>';
internationalizeButton = '<button>Internationalize</button>';
googleMap = '<div id="map"></div>';

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

$("#header").append(HTMLmobile);
$("#header").append(HTMLemail);
$("#header").append(HTMLgithub);
$("#header").append(HTMLlinkedIn);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);

$("#workExperience").append()
$("#education").append()
