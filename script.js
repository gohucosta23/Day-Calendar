$(document).ready(function () {

    var m = moment();
    var dayTime = $("#time");
    console.log(m.format("ddd DD/MM/YYYY"))
    

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

    });
    ten.one("click", function () {

      $("#column2").append($("<textarea rows= 1 cols= 40 autofocus>"));

    });
    eleven.one("click", function () {

      $("#column3").append($("<textarea rows= 1 cols= 40 autofocus>"));

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
    $(".add").on("click", function(){

        $("textarea").css("backgroundColor", "grey");

        var eventsStorage =  localStorage.getItem($("textarea").val());

        console.log($("textarea").val())

        

        var eventos = localStorage.setItem("events", JSON.stringify(events));

        if(eventos != null){
            events = eventos;
        }

        events.push(eventsStorage);
        
    })
    var events = [];
   
  })
