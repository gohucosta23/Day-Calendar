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
    var addButtons = [$("#buttonAddEvent1"), $("#buttonAddEvent2"), $("#buttonAddEvent3"), $("#buttonAddEvent4"), $("#buttonAddEvent5"), $("#buttonAddEvent6"), $("#buttonAddEvent7"), $("#buttonAddEvent8"), $("#buttonAddEvent9")]
    var columns = [nine, ten, eleven, twelve, one, two, three, four, five];
    var columnTextArea = [$("#column0"), $("#column1"), $("#column2"), $("#column3"), $("#column4"), $("#column5"), $("#column6"), $("#column7"), $("#column8")]
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


    


   $("#buttonAddEvent1").on("click", function (event) {
    var text = $(this).parent("div").parent("div").children("textarea").val();
        console.log(text)

    //     event.preventDefault()

    //     columnText = JSON.stringify($("#text1").val());
        
    //     console.log(columnText);
        
    //     var storedEvent = JSON.parse(localStorage.getItem("columnText"));

    //     if (storedEvent !== null) {
    //         events = storedEvent;
    //     }        
    //         events.push(columnText);
    //         localStorage.setItem("9 am", JSON.stringify(events));
    // })
    
    $("#buttonAddEvent2").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text2").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("10 am", JSON.stringify(events));
    })
    $("#buttonAddEvent3").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text3").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("11 am", JSON.stringify(events));
    })
    $("#buttonAddEvent4").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text4").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("12 pm", JSON.stringify(events));
    })
    $("#buttonAddEvent5").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text5").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("1 pm", JSON.stringify(events));
    })
    $("#buttonAddEvent6").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text6").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("2 pm", JSON.stringify(events));
    })
    $("#buttonAddEvent7").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text7").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("3 pm", JSON.stringify(events));
    })
    $("#buttonAddEvent8").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text8").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("4 pm", JSON.stringify(events));
    })
    $("#buttonAddEvent9").on("click", function (event) {


        event.preventDefault()

        columnText = JSON.stringify($("#text8").val());
        
        console.log(columnText);
        
        var storedEvent = JSON.parse(localStorage.getItem("columnText"));

        if (storedEvent !== null) {
            events = storedEvent;
        }        
            events.push(columnText);
            localStorage.setItem("5 pm", JSON.stringify(events));
    })


    // 
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
   })
