const container = document.querySelector('.container');
const root = document.querySelector(':root');
const output = document.querySelector('output');
const imgDiv = document.querySelector('.overflow');


container.addEventListener('mousemove', function(event){

  // console.log(event);

  const posX = event.clientX;
  const posY = event.clientY;

  const quotientX = posX / innerWidth;
  const quotientY = posY / innerHeight;

  const width1 = 1 * quotientX;
  const width2 = 1 - width1;

  const height1 = 1 * quotientY;
  const height2 = 1 - height1;

  root.style.setProperty("--width1", `${width1}fr`);
  root.style.setProperty("--width2", `${width2}fr`);

  root.style.setProperty("--height1", `${height1}fr`);
  root.style.setProperty("--height2", `${height2}fr`);

  // console.log(imgDiv);
  let shim;

  if (imgDiv.offsetHeight > innerHeight * quotientY) {
    shim = 'shim';
  } else {
    shim = '';
  }
  output.value = `W:${imgDiv.offsetWidth}\nH: ${imgDiv.offsetHeight} ${shim}`;

  // console.log(width1, width2, width1 + width2);
  // console.log(height1, height2, height1 + height2);

});