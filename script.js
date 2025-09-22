const lines = [
  "Oh! Let me sort my script out...",
  "Welcome to the website.",
  "This is a general knowledge quiz to test you.",
  "Let's get started."
];

const textContainer = document.getElementById('speaker-text');

let lineIndex = 0;

function typeLine(line, callback) {
  textContainer.textContent = "";
  let charIndex = 0;

  const interval = setInterval(() => {
    textContainer.textContent += line[charIndex];
    charIndex++;
    if(charIndex >= line.length) {
      clearInterval(interval);
      // wait 1 second, then disappear letters and call callback
      setTimeout(() => {
        textContainer.textContent = "";
        setTimeout(callback, 1000);
      }, 1000);
    }
  }, 50); // 50ms per letter; adjust to make faster/slower
}

function showNextLine() {
  if(lineIndex < lines.length) {
    typeLine(lines[lineIndex], () => {
      lineIndex++;
      showNextLine();
    });
  }
}

// start the sequence
showNextLine();
