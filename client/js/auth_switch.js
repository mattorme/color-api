$(document).ready(function(){    
    $(".signup-container").slideUp(1);
    $(".login-container").slideDown("slow");    
});

$(document).ready(function(){
    $(".signup-btn").click(function(){
        $(".login-container").slideUp(1);
        $(".signup-container").slideDown(1);    
    });
});