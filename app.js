// alert("In the example below, we have created the div with the ‘loading_indicator’ div and applied some CSS to make it a rounded loading indicator.");



var t=new Date();
var dstr=t.toDateString();
document.querySelector(".hand").innerHTML=dstr;
   
function timeStr(){    
var t=new Date();
var ltstr=t.toLocaleTimeString();
document.querySelector(".hand1").innerHTML=ltstr;
  }
setInterval(timeStr,1) 

// time
const d = new Date();
let year = d.getFullYear();
document.querySelector(".demo").innerHTML = year;

// loader spinner

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
       document.querySelector("body").style.visibility = "hidden";
       document.querySelector("body").style.backgroundColor = "red";
       document.getElementById("loading_indicator").style.visibility = "visible";
    } else {
       setTimeout(() => {
          document.getElementById("loading_indicator").style.display ="none";
          document.querySelector("body").style.visibility = "visible";
          document.querySelector("body").style.backgroundColor = " #c1cee3";
       }, 3000)
    }
 };

//  joke script

const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "/vBEicanuS6xN3rZgIBHwA==oTxBDMoeGOkRhgKg";

const options = {
   method: "GET",
   headers:{
      "X-Api-Key": apiKey,
   },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";

 async  function getjoke(){


   try {
      jokeEl.innerText = "Updating...";
   btnEl.disabled = true;
   btnEl.innerText = "Loading....";
   const response = await fetch(apiURL, options);
   const data = await response.json();

   btnEl.disabled = false;
   btnEl.innerText = "tell me a joke";

   jokeEl.innerText = data[0].joke;
   } catch (error) {
      jokeEl.innerText = "An error happened, please try again later";
      btnEl.disabled = false;
      btnEl.innerText = "tell me a joke";
      console.log(error);
   }

};

btnEl.addEventListener("click", getjoke);