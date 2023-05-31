

function currTime() {
  let d = new Date();
  
let dd=d.getDate();
  let dm=d.getMonth();
  dm=dm +1;
  let dy=d.getFullYear();
  let th=d.getHours();
  let tm=d.getMinutes();
  let ts=d.getSeconds();
  let dateDay=d.getDay();
 // console.log(dateDay)

  document.querySelector("#date-date").innerHTML = dd;
  document.querySelector("#date-mon").innerHTML = dm;
  document.querySelector("#date-year").innerHTML = dy;

  document.querySelector("#time-hrs").innerHTML = th;
  document.querySelector("#time-mins").innerHTML = tm;
  document.querySelector("#time-secs").innerHTML = ts;




  let days=document.getElementById("days");
 let ss=days.getElementsByTagName("input")[dateDay].checked=true;

let i;
  if(th<12)
  {
    console.log("am");
    i=0
  }
  else
  {
    console.log("pm")
    i=1;
  }

  let amPM=document.getElementById("morn-aftn");
  let aa=amPM.getElementsByTagName("input")[i].checked=true;

}

//currTime();
setInterval(currTime, 1000);




