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

  // console.log(imgDiv);
  let shim;

  if (imgDiv.offsetHeight > innerHeight * quotientY) {
    shim = 'shim';

  } else {
    shim = '';
  }

  const width1 = innerWidth * quotientX;
  const width2 = innerWidth - width1;

  const height1 = innerHeight * quotientY;
  const height2 = innerHeight - height1;

  root.style.setProperty("--width1", `${width1}px`);
  root.style.setProperty("--width2", `${width2}px`);

  root.style.setProperty("--height1", `${height1}px`);
  root.style.setProperty("--height2", `${height2}px`);


  output.value = `W:${imgDiv.offsetWidth}\nH: ${imgDiv.offsetHeight} ${shim}`;

  // console.log(width1, width2, width1 + width2);
  // console.log(height1, height2, height1 + height2);

});