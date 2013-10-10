$(document).ready(function () {
    $("#career-coach-search").submit(function(){
        var url = "http://careercoach.cnm.edu/#action=loadSearchResults&SearchType=occupation&Search=";
        window.location = url + $("#career-coach-query").val();
    	return false;
    });
// Wacky stuff for that balloon quiz
    $("#calculate").click(function(){
		var answers = [	$('input[name="question1"]:checked').val() || 1,
						$('input[name="question2"]:checked').val() || 1,
						$('input[name="question3"]:checked').val() || 1,
						$('input[name="question4"]:checked').val() || 1,
						$('input[name="question5"]:checked').val() || 1];

		result = calc(answers);
		
		$("#quiz").css("display", "none");
		$("#results p.you-are").html(shapes[result-1].name);
		$("#results p.description").html(shapes[result-1].description);
		$("#results img").attr("src", shapes[result-1].image)
		$("#parent-fieldname-title").html("The Results Are In!")
		$("#results").css("display", "block");
	});
	function calc(arr) {
		//Calculate modal
		if(arr.length == 0)
			return null;
		var modeMap = {},
			maxCount = 1,
			modes = [arr[0]];

		for(var i = 0; i < arr.length; i++) {
			var el = arr[i];

			if(modeMap[el] == null)
				modeMap[el] = 1;
			else
				modeMap[el]++;

			if (modeMap[el] > maxCount) {
				modes = [el];
				maxCount = modeMap[el];
			} else if (modeMap[el] == maxCount) {
				modes.push(el);
				maxCount = modeMap[el];
			}
		}
		//If more than one mode, just return the first. Whatever, I don't have time for this.
		return modes[0];
	}
});
var shapes = [
	{
		'name' 			: "You're one of the Kissing Bees balloons!",
		'description' 	: "<p>You love love! You know how to show affection for others and you pride yourself on quality friendships and relationships and you always seek to please others.</p><p>Want to know more about bees? And kissing? Check out CNM's biology and chemistry programs. <a href='/registration'>Register now.</a></p>",
		'image' 		: 'http://www.balloonfiesta.com/uploads/companydirectory/id71/LillyLittleBee.jpg'
	},
	{
		'name' 			: "You're the Darth Vader balloon!",
		'description' 	: "<p>You may be an evil genius, but deep down people know you have a soft streak for those you care about. Keep on soaring, Vader!</p><p>Are you the next George Lucas? Check out CNM Film program to get started on the path to a galaxy far, far away. <a href='/registration'>Register now.</a></p>",
		'image' 		: 'http://www.balloonfiesta.com/uploads/companydirectory/id6/darth-photo.jpg'
	},
	{
		'name' 			: "You're the Creamland Cow balloon!",
		'description' 	: "<p>You are cheerful, likable, and don’t take yourself too seriously. People enjoy being around you and turn to you when they need a fun friend.</p><p>If you love  animals, check out CNM's Veterinary Technology Program! <a href='/registration'>Register now.</a></p>",
		'image' 		: 'http://www.balloonfiesta.com/uploads/companydirectory/id70/Airabellecow.jpg'
	},
	{
		'name' 			: "You're the Scuba Diver balloon!",
		'description' 	: "<p>You are practical, capable and a good planner. You aren’t afraid to take risks, but like to know what’s ahead.</p><p>Dive into the world of career and technical education at CNM. The college offers a wide range of career and technical programs including culinary, welding, healthcare, construction, computers and so much more. <a href='/registration'>Register now.</a></p>",
		'image' 		: 'http://www.balloonfiesta.com/uploads/companydirectory/id147/Scuba1L.jpg'
	},
	{
		'name' 			: "You're the Jack balloon!",
		'description' 	: "<p>You are fun loving and enjoy making people laugh. People come to you for a chuckle in times of need.</p><p>Like helping people feel better? CNM has a large variety of healthcare programs, where you can learn to turn a frown upside down! <a href='/registration'>Register now.</a></p>",
		'image' 		: 'http://www.balloonfiesta.com/uploads/companydirectory/id12/jack-photo.jpg'
	}
]