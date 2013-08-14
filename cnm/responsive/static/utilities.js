$(document).ready(function () {
    $("#career-coach-search").submit(function(){
        var url = "https://cnm.emsicareercoach.com/#action=loadSearchResults&SearchType=occupation&Search=";
        window.location = url + $("#career-coach-query").text();
    	return false;
    });
});