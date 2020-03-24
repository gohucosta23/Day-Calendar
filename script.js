window.onload = function() {



    var m = moment();
    var dayTime = $("#time");
    dayTime.text(m.format("ddd MM/DD/YYYY"))

    var currentTime = parseInt(m.format("HH"));

    var nine = $("#nine").val(9);
    var ten = $("#ten").val(10);
    var eleven = $("#eleven").val(11);
    var twelve = $("#twelve").val(12);
    var one = $("#one").val(13);
    var two = $("#two").val(14);
    var three = $("#three").val(15);
    var four = $("#four").val(16);
    var five = $("#five").val(17);    
    var columns = [nine, ten, eleven, twelve, one, two, three, four, five];
    var newText;
    var nine = localStorage.getItem("nine");
    
    $("#nine").append(localStorage.getItem("Nine"));
    $("#ten").append(localStorage.getItem("Ten"));
    $("#eleven").append(localStorage.getItem("Eleven"));
    $("#twelve").append(localStorage.getItem("Twelve"));
    $("#one").append(localStorage.getItem("One"));
    $("#two").append(localStorage.getItem("Two"));
    $("#three").append(localStorage.getItem("Three"));
    $("#four").append(localStorage.getItem("Four"));
    $("#five").append(localStorage.getItem("Five"));
    



    
    for (var i = 0; i < columns.length; i++) {

        if (currentTime > columns[i].val()) {

            columns[i].css("backgroundColor", "grey");
        }

        if (currentTime == columns[i].val()) {

            columns[i].css("backgroundColor", "red");
        }
    }

    // $(document).on("click", ".colunas", function(){
    //     var newTextArea = $("<textarea rows = '1' autofocus>");
    //     $(this).append(newTextArea)
        
    // })  
    $("#nine").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textOne");
    })  
    $("#ten").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textTwo");
    }) 
    $("#eleven").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textThree");
    }) 
    $("#twelve").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textFour");
    }) 
    $("#one").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textFive");
    }) 
    $("#two").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textSix");
    }) 
    $("#three").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textSeven");
    })
    $("#four").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textEight");
    })
    $("#five").one("click",function(){
        $(this).append("<textarea>");
        $("textarea").attr("id","textNine");
    })           

   $("#buttonAddEvent1").on("click", function () {

    var textOne = $("#textOne").val();  
    console.log(textOne)    
    localStorage.setItem("Nine", textOne);    
   });
   
    $("#buttonAddEvent2").on("click", function () {

    var textTwo = $("#textTwo").val();      
    localStorage.setItem("Ten", textTwo);  
    })
       
        
    $("#buttonAddEvent3").on("click", function () {

    var textThree = $("#textThree").val(); 
    localStorage.setItem("Eleven", textThree);  
       
    })
    $("#buttonAddEvent4").on("click", function () {

        var textFour = $("#textFour").val();      
        localStorage.setItem("Twelve", textFour);    
       
    })
    $("#buttonAddEvent5").on("click", function () {

        var textFive = $("#textFive").val();      
        localStorage.setItem("One", textFive);   
        
    })
    $("#buttonAddEvent6").on("click", function () {


        var textSix = $("#textSix").val();      
        localStorage.setItem("Two", textSix);   
        
    })
    $("#buttonAddEvent7").on("click", function () {


        var textSeven = $("#textSeven").val();      
        localStorage.setItem("Three", textSeven);  
        
    })
    $("#buttonAddEvent8").on("click", function () {


        var textEight = $("#textEight").val();      
        localStorage.setItem("Four", textEight);  
        
    })
    $("#buttonAddEvent9").on("click", function () {


        var textFive = $("#textFive").val();      
        localStorage.setItem("Five", textFive);    
        
    })


}