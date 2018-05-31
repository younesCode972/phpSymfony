
/*function myFunction()
 {
  var para = document.getElementsByTagName('p');
        for (var i = 0; i < para.length; i++)
        {

          if (i%2 == 0)
           {
            para[i].style.color="red";
           }


           para[i].onmouseover=function()
           {
            this.style.backgroundColor=" yellow ";
           }
           para[i].onmouseout=function()
          {
            this.style.backgroundColor="white";
          }
        }
    return;
  }
*/function myFunction()
   {
    var para = document.getElementsByTagName('p');
          for (var i = 0; i < para.length; i++)
      {
            if (i%2 == 0)
             {
              para[i].style.color="red";
             }
             para[i].onmousseover=function()
             {
              this.style.backgroundColor="white";
             }
             para[i].onmousseout=function()
            {
              this.style.backgroundColor="yellow";
            }
      }
      return;
  }

  var p= document.getElementsByTagName('p');
  for (var i = 0; i < p.length; i++)
  {

     p[i].onmouseover=function()
     {
      this.style.backgroundColor=" yellow ";
     }
     p[i].onmouseout=function()
    {
      this.style.backgroundColor="white";
    }
  }
