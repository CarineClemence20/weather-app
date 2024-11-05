let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
// "It is currently 19°C (66°F) in Paris with a humidity of 80%"

let userInput = prompt("enter city");
// edit the user input remove space and put all inlowercase
userInput = userInput.trim();
userInput = userInput.toLocaleLowerCase();

if (weather[userInput] !== undefined) {
  let celsiusTemperature = Math.round(weather[userInput].temp);
  let farnheightTemperature = celsiusTemperature * (9 / 5) + 32;
  let humidity = weather[userInput].humidity;

  alert(
    `It is currently ${celsiusTemperature}°C (${farnheightTemperature}°F) in ${userInput} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userInput}`
  );
}
