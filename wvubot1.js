//this is all just basic initalization code
console.log("The bot is starting");

var Twit = require('twit');
var fs = require('fs'),
    path = require('path'),
    Twit = require('twit');


'use strict';
var TwitterUser = require('./TwitterUser');
var twitteruser1 = new TwitterUser('caroline','enablebot', 1);
var allUsers = [twitteruser1];


var T = new Twit({
  consumer_key:         'IAbHtq12JgpZ3hhDBc80fdA1d',
  consumer_secret:      'zjbXYBVE6lsgzOvVRdPo1M1YCHLP9LKpAw7Xm4KSoYTDI1CDcE',
  access_token:         '914483344313905152-3su41KR476g43u4atIrB7mnsQcpP0dw',
  access_token_secret:  '6a6m77RPdmKF6oF3buZTt5JiPBrfAMZgENQWiND4JZBYA',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//open up the stream to listen to twitter
var stream = T.stream('user');

//listens for when someone follows twitterbot or when someone tweets
stream.on('follow',followed);
stream.on('tweet',tweetEvent);


//this handles what to do when someone on twitter tweets
function tweetEvent(eventMsg)
{
	//var fs = require('fs');
	//var json = JSON.stringify(eventMsg,null,2);
	//fs.writeFile("tweet.json",json);
	var replyTo = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;
	var tweetId = eventMsg.id;

	console.log(replyTo +' '+ from);

	//handles what to do if a tweet is directed at account
	if (replyTo == 'WVUAdmissionBot')
	{
		//put it to lowercase so we don't miss a word because of capitalization
		//sends a person the enable arm building tutorial 
		if (text.includes('tutorial') || text.includes('guide'))
		{
			var newtweet = '@' + from + ' https://www.youtube.com/playlist?list=PLA7_By5ei42zmZThuTbNQOQCmkE4qloEA';
			tweetIt(newtweet);
		}
		if (text.includes('How many students are there in the Statler College?'))
		{
			var newtweet = '@' + from +' In the fall of 2016, the Statler College of Engineering had 3,927 undergraduate students.';
			tweetIt(newtweet);
		}
		if (text.includes('What is the size of the freshman class?'))
		{
			var newtweet = '@' + from +' In the fall of 2016, WVU had 5,124 first time freshmen enrolled. The Statler College of Engineering had 894 enrolled first time freshmen.';
			tweetIt(newtweet);
		}
		if (text.includes('When is my application due?'))
		{
			var newtweet = '@' + from +' WVU has no specific deadline in which to apply. Application goes live in Aug.';
			tweetIt(newtweet);
		}
		if (text.includes('What tests and documents do I need to apply?'))
		{
			var newtweet = '@' + from +' first time freshman: complete the undergrad app, send official transcripts to WVU, have your SAT/ACT scores sent to WVU.';
			tweetIt(newtweet);
		}

		if (text.includes('What clubs and activities are offered for engineering students?'))
		{
			var newtweet = '@' + from +' The Statler College of Engineering offers over 40 different clubs and organizations for students.';
			tweetIt(newtweet);
		}

		if (text.includes('What majors are offered?'))
		{
			var newtweet = '@' + from +' http://www.statler.wvu.edu/undergraduate/admissions-criteria';
			tweetIt(newtweet);
		}

		if (text.includes('What are your admissions requirements?'))
		{
			var newtweet = '@' + from +' 1. statler.wvu.edu/undergraduate/admissions-criteria';
			tweetIt(newtweet);
		}
		if (text.includes('Do I select my major upon admission?'))
		{
			var newtweet = '@' + from +' Students do not have to select a major upon admission.';
			tweetIt(newtweet);
		}
		if (text.includes('Is student housing available?'))
		{
			var newtweet = '@' + from +' http://housing.wvu.edu/home';
			tweetIt(newtweet);
		}

		if (text.includes('What is the required high school GPA?'))
		{
			var newtweet = '@' + from +' statler.wvu.edu/undergraduate/admissions-criteria';
			tweetIt(newtweet);
		}
			if (text.includes('Are scholarships available?'))
		{
			var newtweet = '@' + from +' http://financialaid.wvu.edu/home/scholarships http://www.statler.wvu.edu/undergraduate/paying-for-college ';
			tweetIt(newtweet);
		}

		if (text.includes('What is the Academic Common Market?'))
		{
			var newtweet = '@' + from +' visit: http://undergraduate.wvu.edu/student-resources/academic-common-market';
			tweetIt(newtweet);
		}
		if (text.includes('What kind of computer should I bring to campus?'))
		{
			var newtweet = '@' + from +' http://it.wvu.edu/files/d/38728f8b-04a0-4782-a102-ac97904cddbd/wvu-computer-buying-guide-v3.pdf';
			tweetIt(newtweet);
		}

		if (text.includes('Can I transfer credits I have earned elsewhere or through AP testing?'))
		{
			var newtweet = '@' + from +' admissions.wvu.edu/how-to-apply/transfer-students/';
			tweetIt(newtweet);
		}
		if (text.includes('Does the Statler College accept transfer students?'))
		{
			var newtweet = '@' + from +' Transfer students are admitted into Statler on a case-by-case basis depending on space.';
			tweetIt(newtweet);
		}
		if (text.includes('What materials do I need to apply as a transfer student?'))
		{
			var newtweet = '@' + from +' https://admissions.wvu.edu/how-to-apply/transfer-students#anchor-transferapply';
			tweetIt(newtweet);
		}
		if (text.includes('What criteria is needed for transfer to the Statler College?'))
		{
			var newtweet = '@' + from +' Students must be admitted into West Virginia University while also having a 2.50 GPA and math placement into Calculus I.';
			tweetIt(newtweet);
		}
		if (text.includes('Are transfer students eligible for financial aid?'))
		{
			var newtweet = '@' + from +' Yes. Visit http://financialaid.wvu.edu/students/transfer-student for more';
			tweetIt(newtweet);
		}

		if (text.includes('What sort of testing is required of international students for admission to the Statler College?'))
		{
			var newtweet = '@' + from +' Test of English as a Foreign Language (TOEFL) or Internal English Language Testing System (IELTS).';
			tweetIt(newtweet);
		}
		if (text.includes('Does the Statler College offer financial aid to international students?'))
		{
			var newtweet = '@' + from +' financialaid.wvu.edu/students/international-student';
			tweetIt(newtweet);
		}
		if (text.includes('As an international student, do I need to send other materials with my application?'))
		{
			var newtweet = '@' + from +' send copies of all academic certificates or diplomas in original language of issue.  ';
			tweetIt(newtweet);
		}

		if (text.includes('I am an international student. How do I apply for a student visa?'))
		{
			var newtweet = '@' + from +' http://oiss.wvu.edu/students/visa-info/applying-for-visa';
			tweetIt(newtweet);
		}
		if (text.includes('What are the next steps after I submit my application?'))
		{
			var newtweet = '@' + from +' Visit graduateadmissions.wvu.edu/information-for';
			tweetIt(newtweet);
		}
		if (text.includes('How quickly will the admission decision be made on my application?'))
		{
			var newtweet = '@' + from +' Admissions decisions vary by program. ';
			tweetIt(newtweet);
		}
		if (text.includes('When are assistantship decisions made?'))
		{
			var newtweet = '@' + from +' http://graduateeducation.wvu.edu/funding-and-cost/graduate-assistantships';
			tweetIt(newtweet);
		}

		if (text.includes('What is the application deadline for my program?'))
		{
			var newtweet = '@' + from +' depends on program';
			tweetIt(newtweet);
		}
		if (text.includes('How do I know if you have received my letters of recommendation or other materials?'))
		{
			var newtweet = '@' + from +' You were sent your login info and the URL to follow your status after submitting electronic application';
			tweetIt(newtweet);
		}
		if (text.includes('If I am accepted can I defer my admission to a later date?'))
		{
			var newtweet = '@' + from +' Yes. You can defer your admission for up to one academic year by completing a Change of Term form.';
			tweetIt(newtweet);
		}
		if (text.includes('How do I submit transcripts for my application?'))
		{
			var newtweet = '@' + from +' WVU Graduate Admissions POX 6510 Morgantown, WV 26506-6510';
			tweetIt(newtweet);
		}
		if (text.includes('Where should I send my recommendations?'))
		{
			var newtweet = '@' + from +' WVU Graduate AdmissionsP OX 6510 Morgantown, WV 26506-6510';
			tweetIt(newtweet);
		}
		if (text.includes('What are the school codes for submitting test scores?'))
		{
			var newtweet = '@' + from +' Important WVU Codes: SAT: 5904  ACT: 4540  TOEFL: 5904  FAFSA: 003827';
			tweetIt(newtweet);
		}
	}
	
}

//each time someone follows you, you can send them an introductory message
function followed(eventMsg)
{
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('hi @' + screenName + 'thank you for following the e-nable bot!');
  checkIfListed(screenName);
}


function tweetIt(txt)
{
	var tweet =
		{
			status: txt
		}

		T.post('statuses/update', tweet, tweeted)

  function tweeted(err,data, response)
  {
	 if(err)
	 {
	   console.log("Something went wrong")
	 }
	 else
	 {
	   console.log("It worked!")
	 }
  }
}


  











