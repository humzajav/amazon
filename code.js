var black = document.getElementById("black");
var red = document.getElementById("red");
var blue = document.getElementById("blue");
var pink = document.getElementById("pink");
var purple = document.getElementById("purple");
var image = document.getElementById("image");
var colors = [black,red,blue,pink,purple];
for(let i=0; i<colors.length ;i++)
{
    colors[i].addEventListener('click',function(){
        if(i===0){
            image.src = "https://i.imgur.com/iOeUBV7.png";
        }
        else if(i===1)
        {
            image.src = "https://i.imgur.com/PTgQlim.png";
        }
        else if(i===2)
        {
            image.src = "https://i.imgur.com/Mplj1YR.png";
        }
        else if(i===3)
        {
            image.src = "https://i.imgur.com/Zygu7I3.png";
        }
        else
        {
            image.src = "https://i.imgur.com/xSIK4M8.png";
        }
        })
}
document.onload = startTime();
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = h % 12;
    h = h ? h : 12;
    h = checkTimes(h);
    document.getElementById('timeShow').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime,500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  function checkTimes(i){
      if(i<10){
          i = "0"+i;
      }
      else if(i>=10 && i<13){
          i = i;
      }
      return i;
  }
var timeShow = document.getElementById('timeShow');
var timeButton = document.getElementById('timebutton');
timebutton.addEventListener('click',function(){
    hearticon.id = 'heart';
    timeShow.className = 'show';
    hearttext.id = 'heartRate'
})
var hearticon = document.getElementById('heart');
var hearttext = document.getElementById('heartRate');
var heart = document.getElementById('heartbutton');
heart.addEventListener('click',function(){
    timeShow.className = 'gone';
    hearticon.id = 'heartdi'
    hearttext.id = 'heartRatediv'
})

