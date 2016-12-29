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
	"welcome" : "Full Stack Web Developer",
	"profile" : "images/profile.jpg",
	"skills" : ["Python","JavaScript","Java","C++","AngularJS","PostgreSQL","MongoDB"]
};

var work = {
	"jobs": [
		{
			"employer": "Romp International",
			"title": "Oversea Sales Representative",
			"dates": "November 2014 - June 2015",
			"location" : "Seoul, South Korea",
			"description":
				["Negotiated with retailers, distributors based on China and Russia to sell ROMP gear.",
				 "Sponsored and communicated with more than 30 Russian, Canadian, and American professional snowboarders",
				 "Planned, prepared, and participated in ISPO Munich, an international sporting  goods sporting show, as an exhibitor"]
		},
		{
			"employer": "Groupon Korea",
			"title": "Sales Representative",
			"dates": "June 2013 - April 2014",
			"location": "Seoul, South Korea",
			"description": 
				["Negotiated with 175 hotels in Seoul to provide highly discounted accommodation Groupon Deals.",
				 "Provided roughly 20 Groupon Deals per month on the Groupon website",
				 "Negotiated with local restaurants, cafes, gyms, and food and beverage companies' headquarters to provide highly discounted Groupon Deals."]
		}
	]
};

var education = {
	"schools": [
		{	
			"name":"University of Illinois in Chicago",
			"location": "Chicago, IL",
			"degree": "Bachelor",
			"majors": ["Computer Science"],
			"dates" : "January 2017 - December 2018",
			"url": "http://www.uic.edu"
		},
		{
			"name":"Oakton Community College",
			"location": "Desplaines, IL",
			"majors": ["Computer Science"],
			"dates" : "August 2015 - December 2016",
			"url": "http://www.oakton.edu/"	
		}
	],
	"MOOC": [
		{
			"title" : "Algorithm",
			"school" : "Princeton University",
			"dates" : "January 2017 - March 2017",
			"url" : "https://www.coursera.org/learn/algorithms-part1"
		},
		{
			"title" : "Full Stack Web Development Nano Degree",
			"school" : "Udacity",
			"dates" : "September 2016 - January 2017",
			"url" : "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
		},
		{
			"title" : "Full Stack Web Development Course",
			"school" : "The Hong Kong University of Science and Technology",
			"dates" : "November 2015 - September 2016",
			"url" : "https://www.coursera.org/specializations/full-stack"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Multi-User-Blog",
			"dates": "Winter 2016",
			"description" : "Created simple multi-user blog using Google App Engine and Python. Users can read, upload, comment, and like the blog posts",
			"image": []
		},
		{
			"title" : "Restaurant Website/Mobile App",
			"dates" : "Spring 2016",
			"description" : "Created Single-Page web Applications with on a MEAN stack. Created mobile apps with Ionic and Cordova.",
			"image":[]
		}
	]
};

//function encapsulation
projects.display = function(){
	
	for (var i = 0; i < projects.projects.length; i++){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].image);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		

		if (projects.projects[i].image.length > 0){
			for (var j = 0; j < projects.projects.image.length; j++){
				var formattedImage = HTMLprojectImage.replace("$data$", projects.projects[i].image[i]);
				$(".project-entry:last").append(formattedImage);		
			}
		}
	}
};

projects.display();

HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContactsMobile = HTMLcontactGeneric.replace("%contact%","mobile").replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedContactsMobile);

var formattedContacsEmail = HTMLcontactGeneric.replace("%contact%","email").replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedContacsEmail);

var formattedContactsLinkedIn = HTMLcontactGeneric.replace("%contact%","LinkedIn").replace("%data%", bio.contacts.linkedIn);
$("#topContacts").append(formattedContactsLinkedIn);

var formattedContactsGithub = HTMLcontactGeneric.replace("%contact%","github").replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedContactsGithub);

var formattedContactsLocation = HTMLcontactGeneric.replace("%contact%","location").replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedContactsLocation);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.profile);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);

$("#main").append(internationalizeButton);

function inName(name){
	names = name.split(" ");
	console.log(name);

	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();	
	names[1] = names[1].toUpperCase();
	var internationalizedName = names.join(" ");

	return internationalizedName;
};

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++){

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		console.log(bio.skills[i]);
	}
};

function displayWork(){
	for (var i = 0; i < work.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart)
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates );
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);

		$(".work-entry:last").append(HTMLworkDescriptionStart);


		for(var j = 0; j < work.jobs[i].description.length; j++){
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description[j]);
			
			$(".workDescription:last").append(formattedDescription);		
		}
	}
};

displayWork();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});




