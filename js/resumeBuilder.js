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
	"skills" : ["Python","JavaScript","SQL","C++","AngularJS","PostgreSQL","MongoDB"]
};



HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

HTMLbioPic = HTMLbioPic.replace("%data%", bio.profile);
HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		console.log(bio.skills[i]);
	}
};


var work = {
	"jobs": [
		{
			"employer": "Romp International",
			"title": "Oversea Sales Representative",
			"dates": "November 2014 - June 2015",
			"description":"Negotiated with retailers, distributors based on China and Russia to sell ROMP gear."
		},
		{
			"employer": "Groupon Korea",
			"title": "Sales Representative",
			"dates": "June 2013 - April 2014",
			"description": "Negotiated with 175 hotels in Seoul to provide highly discounted accommodation Groupon Deals."
		}
	]
};

var education = {
	"schools": [
		{	
			"name":"University of Illinois in Chicago",
			"city": "Chicago, IL",
			"degree": "Bachelor",
			"majors": ["Computer Science"],
			"dates" : "January 2017 - December 2018",
			"url": "http://www.uic.edu"
		},
		{
			"name":"Oakton Community College",
			"city": "Desplaines, IL",
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
			"link": "practicebasicblog.appspot.com/blog",
		},
		{
			"title" : "Restaurant Website/Mobile App",
			"dates" : "Spring 2016",
			"description" : "Created Single-Page web Applications with on a MEAN stack. Created mobile apps with Ionic and Cordova.",
			"link":""
		}
	]
}
