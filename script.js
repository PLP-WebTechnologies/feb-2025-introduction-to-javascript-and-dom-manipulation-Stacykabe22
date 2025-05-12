function changeText() {
  document.getElementById("dynamicText").textContent = "Text has been changed!";
}

function changeStyle() {
  const textElement = document.getElementById("dynamicText");
  textElement.style.color = "crimson";
  textElement.style.fontSize = "28px";
}

function toggleElement() {
  const container = document.getElementById("container");
  const existing = document.getElementById("toggleElement");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newDiv = document.createElement("div");
    newDiv.id = "toggleElement";
    newDiv.textContent = "I was added dynamically!";
    container.appendChild(newDiv);
  }
}
