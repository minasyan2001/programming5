var value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
  }