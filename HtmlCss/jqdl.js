$(document).ready(function () {
 $("button").addClass('btn btn-primary');

 $("#b1").click(function () {
    $("#1").css("background-color","grey");
    $("#para").addClass('text-danger');
});   
    $("#b2").click(function () {
        $("#1").css("background-color","black");
        $("#para").addClass('text-light');
     
    });
 });
