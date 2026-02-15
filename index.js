const form = document.getElementById("form");
const input = document.getElementById("search");
const result = document.querySelector("#result");
const temp = document.getElementById("temp");
const description = document.getElementById("description");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = input.value.trim();

  if (location !== "") {
    getLocation(location);
  }
});

async function getLocation(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.toLowerCase()}?key=${process.env.WEATHER_API_KEY}`;
  try {
    loader.classList.remove("hidden");
    temp.textContent = "";
    description.textContent = "";

    const response = await fetch(url);

    if (!response.ok) {
      result.textContent = "City not found! Try another one!";
      return;
    }

    const data = await response.json();
    temp.textContent = `The temperature in ${data.timezone} is ${data.currentConditions.temp} F.`;
    description.textContent = data.description;
    console.log(data);
  } catch (e) {
    result.textContent = "An error occured! Try again!";
    console.error("Error:", e.message);
  } finally {
    loader.classList.add("hidden");
  }
}
