$(document).ready(function () {
    //show pg 1 on load
    $("#right-side-about").show();
    //hide portfolio page and contact page on load
    $("#right-side-portfolio").hide();
    $("#right-side-contact").hide();
    
    //when porfolio link is clicked
     //hide about page
     //hide contact page
     //show portfolio page
    $("#portfolio").on("click", function(){
        $("#right-side-about").hide();
        $("#rigt-side-portfolio").show;
        $("#rigth-side-contact").hide;
        console.log("portfolio active");
    });
    
     //when contact page is clicked
      //hide about page
      //hide portfolio page
      //show contact page
      $("#contact").on("click", function () {
        $("#right-side-about").hide();
        $("#rigt-side-portfolio").hide;
        $("#rigth-side-contact").show;
        console.log("contact active");
    });

    //when about page is clicked
      //hide portfolio page
      //hide contact page
      //show about page
      $("#about").on("click", function () {
        $("#right-side-about").show();
        $("#rigt-side-portfolio").hide;
        $("#rigth-side-contact").hide;
        console.log("about active");
    });
})