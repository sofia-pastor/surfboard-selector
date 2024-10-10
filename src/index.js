function displayRecommendation(response) {
  new Typewriter("#content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });

  let h2 = document.querySelector("h2");
  h2.remove();
  let img = document.getElementById("imgDisplay");
  img.src = "src/surf.jpg";
}

function generateRecommendation(event) {
  event.preventDefault();
  let userSkillLevel = document.querySelector("#skill-level").value;
  let userHeight = document.querySelector("#height").value;
  let userWeight = document.querySelector("#weight").value;
  let wavesCondition = document.querySelector("#wave-conditions").value;
  let surfStyle = document.querySelector("#surf-style").value;

  let apiKey = "tb3fa10906d8aeb018ofce8736864bb2";
  let context =
    "You are a surf expert and have a lot of knowledge about it and the surfboards. Your mission is to give the best advice of which board should a person choose. Please provide a short suggestion, without a title, and make sure that your answer is in basic html format, in order to insert your answer in one or more <div>. In your answer don't give the initial '```html' neither the final '```'.";
  let prompt = `Can you please suggest a surfboard for a ${userSkillLevel} surfer who is ${userHeight} cm tall, weighs ${userWeight} kg, typically surfs ${wavesCondition} waves, and prefers a ${surfStyle} style?`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecommendation);
  let waiting = document.querySelector("#content");
  waiting.innerHTML = "⌛ Searching for the best option for you...";
}

let surfboardFormElement = document.querySelector("#surfboard-form");
surfboardFormElement.addEventListener("submit", generateRecommendation);
