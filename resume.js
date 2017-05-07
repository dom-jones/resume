$(document).ready(function(){
   $(".education").click(function(){
       $(".credentials1").fadeToggle(1000);
   });
   
});

$(document).ready(function(){
   $(".experience").click(function(){
       $(".credentials").fadeToggle(1000);
   });
   
});

$(document).ready(function(){
       $(".logo").draggable({revert: true, revertDuration: 1000});
   });

   $(document).ready(function(){
   $("button1").click(function(grey){
        $("button1").css("background", "grey");
   });
   });

 $(document).ready(function(){
   $("button").click(function(grey){
        $("button").css("background", "grey");
   });
});

