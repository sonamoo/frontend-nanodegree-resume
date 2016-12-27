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

var work = {
	

};

var education = {

};

HTMLheaderName = HTMLheaderName.replace("%data%",bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
HTMLlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.profile);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);


$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

$("#header").append(HTMLmobile);
$("#header").append(HTMLemail);
$("#header").append(HTMLgithub);
$("#header").append(HTMLlinkedIn);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);
