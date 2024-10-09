function generateRecommendation(event) {
  event.preventDefault();
  let userSkillLevel = document.querySelector("#skill-level").value;
  let userHeight = document.querySelector("#height").value;
  let userWeight = document.querySelector("#weight").value;
  let wavesCondition = document.querySelector("#wave-conditions");
  let surfStyle = document.querySelector("#surf-style");
  let contentElement = document.querySelector("#content");

  new Typewriter("#content", {
    strings: "Your board should be...",
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let surfboardFormElement = document.querySelector("#surfboard-form");
surfboardFormElement.addEventListener("submit", generateRecommendation);
