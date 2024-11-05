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

// alert(weather.paris.temp);

// write your code here

function fah(celicius) {
  return (celicius * 9) / 5 + 32;
}

let userInput = prompt("enter  a city");
// edit the user input remove space and put all inlowercase

userInput = userInput.trim();
userInput = userInput.toLowerCase();

if (userInput === "paris") {
  alert(
    `It is currently ${Math.round(weather.paris.temp)}°C (${fah(
      Math.round(weather.paris.temp)
    )}°F) in Paris with a humidity of ${Math.round(weather.paris.humidity)}%`
  );
}
// } else {
//   alert(
//     `sorry,we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userInput}`
//   );
// }
else if (userInput === "tokyo") {
  alert(
    `It is currently ${Math.round(weather.tokyo.temp)}°C (${fah(
      Math.round(weather.tokyo.temp)
    )}°F)in tokyo with a humidity of ${Math.round(weather.tokyo.humidity)}%`
  );
} else if (userInput === "lisbon") {
  alert(
    `It is currently ${Math.round(weather.lisbon.temp)}°C (${fah(
      Math.round(weather.lisbon.temp)
    )}°F) in lisbon with a humidity of ${Math.round(weather.lisbon.humidity)}%`
  );
} else if (userInput === "san fransisco") {
  alert(
    `It is currently ${Math.round(weather["san francisco"].temp)}°C (${fah(
      Math.round(weather["san francisco"].temp)
    )}°F)in san francisco with a humidity of ${Math.round(
      weather["san francisco"].humidity
    )}%`
  );
} else if (userInput === "oslo") {
  alert(
    `It is currently ${Math.round(weather.oslo.temp)}°C (${fah(
      Math.round(weather.oslo.temp)
    )}°F) in oslo with a humidity of ${Math.round(weather.oslo.humidity)}%`
  );
} else {
  alert(
    `sorry,we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${userInput}
  `
  );
}
