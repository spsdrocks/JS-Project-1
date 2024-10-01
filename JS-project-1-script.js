//Beginning of Program Comments Go Here





//Title: Weather Station

//Welcome: Hello (name)! How are you today?

//Program Summary: This is a weather website that shows the current tempeture, however we ask for user input about the current conditions to ensure the greatest accruacry in our recordings. We want to ensure our consumers wellbeing and suggest what to wear and bring outside with our amazing code. However, this website is only limited to the Greater Vancouver region due to testing constrants.

//Important Program Elements Used: 

//Functions
//API
//Responses based on temperture
//Rounding numbers
//Getting values from checkboxes
//&& || if else
//Newton
//HTML
//CSS







// Beginning of Program





//Start of Var declarations
let kelvin; //Declaring kelvin var this will store what the user inputs
let celsius; //Declaring celsius var this will be kelvin - 273.15
let fahrenheit; //Declaring fahrenheit var this will be 1.8 * (kelvin-273) + 32
let newton; //Declaring newton var this will be 
let person;//Declaring person var this will store a persons name if no name is entered then it will be person

//End of Var declarations





//Start of main

//Getting the current weather DO NOT TOUCH
fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/North%20Vancouver?unitGroup=metric&key=6HQKKQ77JDJ9LGKZ7N75PKM5P&contentType=json", {
 method: 'GET', 
  headers: {
 
  },
           
}).then(response => {
  if (!response.ok) {
    throw response; //check the http response code and if isn't ok then throw the response as an error
  }
            
  return response.json(); //parse the result as JSON

}).then(response => {
  //response now contains parsed JSON ready for use
  processWeatherData(response);

}).catch((errorResponse) => {
  if (errorResponse.text) { //additional error information
    errorResponse.text().then( errorMessage => {
      //errorMessage now returns the response body which includes the full error message
    })
  } else {
    //no additional error information 
  } 
});
//End of getting the current weather




//Printing out current weather
function processWeatherData(response) {
  let tempMin; //This stores the weather min for the day
  let tempMax; //This stores the weather max for the day
  let tempAvg; //This stores the average weather for the day
  var days = response.days;
  tempMin = days[0].tempmin;
  tempMax = days[0].tempmax;
  tempAvg = (tempMin + tempMax) / 2;
  kelvin = toKelvin(tempAvg);
  celsius = toCelsius(kelvin);
  fahrenheit = toFahrenheit(kelvin);
  newton = toNewton(kelvin);
}
//End fo printing out current weather





//Start of turning tempMax to kelvin
function toKelvin(tempK){
  kelvin = (tempK + 273.15);
  kelvin = roundTemp(kelvin);
  console.log(`The tempurature in kelvin is ${kelvin}`);
  document.getElementById("temp-k").innerHTML = `The tempurature in kelvin is ${kelvin}`;
  return kelvin;
}
//End of turning tempMin to kelvin





//Start of function to turn kelvin into celsius
function toCelsius(tempK) {
  celsius = (tempK - 273.15);
  celsius = roundTemp(celsius);
  console.log(`The tempurature in celcius is ${celsius}`);
  document.getElementById("temp-c").innerHTML = `The tempurature in celcius is ${celsius}`;
  return celsius;
}
//End of function to turn kelvin into celsius





//Start of function to turn kelvin to fahrenheit
function toFahrenheit(tempK) {
  fahrenheit = ((tempK - 273.15) * 1.8 + 32);
  fahrenheit = roundTemp(fahrenheit);
  console.log(`The tempurature in fahrenheit is ${fahrenheit}`);
  document.getElementById("temp-f").innerHTML = `The tempurature in fahrenheit is ${fahrenheit}`;
  return fahrenheit;
}
//End of function to turn kelvin to fahrenheit




//Start of function to turn kelvin to newtons
function toNewton(tempK) {
  newton = ((tempK -  273.15 ) * 33 / 100);
  newton = roundTemp(newton);
  console.log(`The tempurature in newtons is ${newton}`);
  document.getElementById("temp-n").innerHTML = `The tempurature in newtons is ${newton}`;
  return newton;
}
//End of function to turn kelvin to newtons





//Function to round to two decimal places
function roundTemp(tempK) {
  return tempK.toFixed(2);
}
//End of function to round to two decimal places





//Start of prompting the user for their name (Welcome)
person = prompt("Please enter your name", "Person");
if (person != null) {
  document.getElementById("name").innerHTML =
  "Hello " + person.toLocaleLowerCase() + "! How are you today?";
  document.getElementById("thank-you").innerHTML = `Thank you ${person}, for visiting our website, please come again for current weather conditions!`;
}

//End of prompting the user for their name





//Start of weather statements
if (celsius > 25) {
  console.log("It is hot today");
  document.getElementById("tempurature-conditions").innerHTML = "It is hot today";
} else if (celsius > 20) {
  console.log("It is warm today");
  document.getElementById("tempurature-conditions").innerHTML = "It is warm today";
} else if (celsius > 10){
  console.log("It is cold today");
  document.getElementById("tempurature-conditions").innerHTML = "It is cold today";
} else {
  console.log("It is freezing today");
  document.getElementById("tempurature-conditions").innerHTML = "It is freezing today";
}


//End of weather statements






//Getting checkbox value
function getValue() {
  let sunny; //Stores a checkbox boolean
  let rainy; //Stores a checkbox boolean
  let cloudy; //Stores a checkbox boolean
  let stormy; //Stores a checkbox boolean
  let windy; //Stores a checkbox boolean





  
  sunny = document.getElementById("sunny");
  rainy = document.getElementById("rainy");
  cloudy = document.getElementById("cloudy");
  stormy = document.getElementById("stormy");
  windy = document.getElementById("windy");




  
  if (sunny.checked == true && rainy.checked == false && stormy.checked == false){
    console.log("It is sunny");
    document.getElementById("weather-conditions").innerHTML="It is sunny";
  } else if(rainy.checked == true && sunny.checked == false && stormy.checked == false && cloudy.checked == false){
    console.log("It is raining, bring a rainjacket");
    document.getElementById("weather-conditions").innerHTML="It is raining, bring a rainjacket";
  } else if (rainy.checked == true && sunny.checked == true && stormy.checked == false && cloudy.checked == false){
    console.log("It is sunny and raining, there might be a rainbow!");
    document.getElementById("weather-conditions").innerHTML="It is sunny and raining, there might be a rainbow!";
  } else if (sunny.checked == false && rainy.checked == true && (stormy.checked == true || cloudy.checked == true)){
    console.log("It is poor weather outside");
    document.getElementById("weather-conditions").innerHTML="It is poor weather outside";
  } else if ((sunny.checked == false && stormy.checked == true && windy.checked == true)||stormy.checked == true){
    console.log("It sucks outside");
    document.getElementById("weather-conditions").innerHTML="It sucks outside";
  } else if(stormy.checked == true && sunny.checked == true && windy.checked == true && cloudy.checked == true && rainy.checked == true){
    console.log("It is impossible for that to happen");
    document.getElementById("weather-conditions").innerHTML="It is impossible for that to happen";
  } else if(windy.checked == true && sunny.checked == false && stormy.checked == false && cloudy.checked == false && rainy.checked == false){
    console.log("It is windy"); 
    document.getElementById("weather-conditions").innerHTML="It is windy";
  } else {
    alert("Please select the current weather conditions and try again");
    document.getElementById("weather-conditions").innerHTML="Error";
  }


  
  
  
};






//User interface
alert("Please select the current weather conditions");
//End of user interface
//End of main




//End of Program Comments Go Here





/*


Notes:



Test Code:
.charAt(0).toUpperCase() + string.slice(1);

*/





//Thanks: Thanks for visiting our website, please come again for the daily weather conditions