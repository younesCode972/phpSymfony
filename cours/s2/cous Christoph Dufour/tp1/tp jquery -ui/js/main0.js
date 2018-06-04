/*
//----------------animate({css},spped,callback function)
$(document).ready(
  function(){
    $("img").animate(
      {
        width:'700px'
      },3000,function(){//3000=
        $("span").fadeIn(1000);
      }
    );
  }
);
*/
/*
$(document).ready(
  function(){
    $("img").animate(
      {
        width:'500px',
        left:'100%',
        height:'100px',
        opacity:'0.0',
      },3000
    );
  }
);
*/
/*-----------------------------------------------------------*/
$(function() {
  // run the currently selected effect
  function runEffect() {
    // get effect type from
    var selectedEffect = $("#effectTypes").val();

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "scale") {
      options = {
        percent: 50
      };
    } else if (selectedEffect === "size") {
      options = {
        to: {
          width: 280,
          height: 185
        }
      };
    }

    // Run the effect
    $(".effect").show(selectedEffect, options, 500, callback);
  };

  //callback function to bring a hidden box back
  function callback() {
    setTimeout(function() {
      $(".effect:visible").removeAttr("style").fadeOut();
    }, 1000);
  };

  // Set effect from select menu value
  $("#button").on("click", function() {
    runEffect();
  });

  //$(".effect").hide();
});
/*-----------------------------------------------------------*/

/*$(function () {
  var doSomeMagic= function (effect){
    $('magic').show(effect,3000);
  }
  doSomeMagic("Scale");
});*/
