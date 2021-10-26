
var request =new XMLHttpRequest ();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
 console.log(data);
    var res=data.filter((ele)=>ele.population < 100000);
    console.log(res.map((ele)=>ele.name));
    console.log(res.map((ele)=>ele.capital));
    console.log(data[104]);
  
    }