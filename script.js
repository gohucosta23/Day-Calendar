$(document).ready(function () {

    var m = moment();
    var dayTime = $("#time");
    dayTime.text(m.format("ddd DD/MM/YYYY"))
    
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
    var events = [];
    var columnText = "";
    columnText = JSON.stringify($("form").children().val());

    
    
   
    console.log(columns[0].parent().attr("id"))
    for (var i = 0; i < columns.length; i++) {

        if (currentTime > columns[i].val()) {

            columns[i].css("backgroundColor", "grey");
        }

        if (currentTime == columns[i].val()) {

            columns[i].css("backgroundColor", "red");
        }
    }

   
       
        nine.one("click", function () {
        

        $("#column1").append($("<textarea rows= 1 cols= 40 autofocus>"));
        localStorage.setItem("column1", $("#column1"));
      });
        
    
      ten.one("click", function () {
  
        $("#column2").append($("<textarea rows= 1 cols= 40 autofocus>"));
        localStorage.setItem("column2", $("#column2"));
      });
      eleven.one("click", function () {
  
        $("#column3").append($("<textarea rows= 1 cols= 40 autofocus>"));
        localStorage.setItem("column3", $("#column3"));
      });
      twelve.one("click", function () {
  
        $("#column4").append($("<textarea rows= 1 cols= 40 autofocus>"));
  
      });
      one.one("click", function () {
  
        $("#column5").append($("<textarea rows= 1 cols= 40 autofocus>"));
  
      });
      two.one("click", function () {
  
        $("#column6").append($("<textarea rows= 1 cols= 40 autofocus>"));
  
      });
      three.one("click", function () {
  
        $("#column7").append($("<textarea rows= 1 cols= 40 autofocus>"));
  
      });
      four.one("click", function () {
  
        $("#column8").append($("<textarea rows= 1 cols= 40 autofocus>"));
  
      });
      five.one("click", function () {
  
        $("#column9").append($("<textarea rows= 1 cols= 40 autofocus>"));
  
      });
         
      

    $("#buttonAddEvent1").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("textarea").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    
    $("#buttonAddEvent2").on("click", function (event) {


        event.preventDefault()

        
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent3").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent4").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent5").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent6").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent7").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent8").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    $("#buttonAddEvent9").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("form").children().val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("event", JSON.stringify(events));
    })
    // function loadLocalStorage() {



    //     var storageData = JSON.parse(localStorage.getItem("events"));
    //     console.log(storageData)
    //     var textareas = $("#column1");
    //     textareas.text(storageData[0]);
    //     /* step 1 determine where this data is going to go (maybe change the data type)
    //        EX : $("TEXTAREA"){TARGET CORRECT CORRECT JQUERY ELEMENT}*/

    // }
    // loadLocalStorage();

})
