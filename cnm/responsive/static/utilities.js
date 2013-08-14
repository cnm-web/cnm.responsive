$(document).ready(function () {
    $("#career-coach-search").click(function(){
        var url = "https://cnm.emsicareercoach.com/#action=loadSearchResults&Search=";
        window.location = url + $("#career-coach-query").text();
    });
});