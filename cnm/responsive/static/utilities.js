$(document).ready(function () {
    $("#career-coach-search").submit(function(){
        var url = "http://careercoach.cnm.edu/#action=loadSearchResults&SearchType=occupation&Search=";
        window.location = url + $("#career-coach-query").val();
    	return false;
    });
});