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
