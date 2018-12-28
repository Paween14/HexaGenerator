console.log('');
console.log('Start program-DOM');

/* =================================================================================
                          Selected Elements 
====================================================================================*/

const buttonGen = document.querySelector('.btn-generate');
const buttonPause = document.querySelector('.btn-pause');
const buttonClear = document.querySelector('.btn-clear');
const inputNum = document.querySelector('.search-bar');
const boxDiv = document.querySelector('#wrapper-main');

/* =================================================================================
                          Functions
====================================================================================*/

// create a JavaScript function which generate hexadecimal number.
const hexaNum = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// create a function which creates HTML elements on the DOM. 
const createHexaDiv = (times) => {
  boxDiv.innerHTML = "";
  let hexaColor;                                              // Store random Hexa number
  let wrapperDiv;
  
  for(let i = 0 ; i<times ; i++){
    hexaColor = hexaNum(); 
    
    wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'wrapper-div';
    wrapperDiv.style.backgroundColor = hexaColor;             // Apply a random Hexa to background color
    boxDiv.appendChild(wrapperDiv);
    //applyColor(wrapperDiv, hexaColor);                    ---Example of how to pass arg to another function ---- not related to this project       

    let text = document.createElement('p');
    text.textContent = hexaColor;
    text.className = 'text';
    wrapperDiv.appendChild(text);

    let inputBox = document.createElement('input');
    inputBox.value = hexaColor;
    inputBox.className = 'input-box';
    wrapperDiv.appendChild(inputBox);
        
    let copyBtn = document.createElement('button');
    copyBtn.innerHTML = 'Copy';
    copyBtn.className = 'copy-btn';
    wrapperDiv.appendChild(copyBtn);
    
    //copyClick *** --- a feature to copy the hexadecimal color.  
    const copyToClipBoard = () => {
      inputBox.select();
      document.execCommand('copy');
    }
    copyBtn.addEventListener('click',copyToClipBoard);
  }
}

/* ---Example of how to pass arg to another function ---- not related to this project
const applyColor = (container, hexaColor) => {
  container.style.backgroundColor = hexaColor;
}
*/

let intervalID;                           // Every setInterval() has its own ID, when clearInterval, we will use its ID to refer to it
function clearInt() {
  clearInterval(intervalID);
}

const generator = () => {
  let times = inputNum.value;
  //console.log(times);
  // inputNum.value = '';
  boxDiv.innerHTML = ''; 
  clearInt();
  
  // Set a time interval to make generate all the time and duration is 3s(3000).   
  if (times == 5 || times < 5 || times == ''){
    intervalID = setInterval(createHexaDiv,1000,5);
  } else {
    intervalID = setInterval(createHexaDiv,1000,times);
  }

  pauseBtnDefault();
}

const pauseInterval = () => {
  clearInterval(intervalID);
  buttonPause.removeEventListener('click', pauseInterval);
  buttonPause.innerHTML = '<i class="fas fa-play"></i>Unpause';
  buttonPause.addEventListener('click', unpauseInterval);
}

const unpauseInterval = () => {
  generator();
  buttonPause.removeEventListener('click', unpauseInterval);
  buttonPause.innerHTML = '<i class="fas fa-pause"></i>Pause';
  buttonPause.addEventListener('click', pauseInterval);
}

const pauseBtnDefault = () => {
  buttonPause.removeEventListener('click', unpauseInterval);
  buttonPause.innerHTML = '<i class="fas fa-pause"></i>Pause';
  buttonPause.addEventListener('click', pauseInterval);   
}


function clearAll() {
  inputNum.value = '';
  clearInt();
  boxDiv.innerHTML = ''; 
  pauseBtnDefault();
}

/* =================================================================================
                          Event Listeners 
====================================================================================*/

buttonGen.addEventListener('click', generator);
//Add event listener on mouse is in or over the divs and stop the setInterval time
buttonPause.addEventListener('click', pauseInterval);
//boxDiv.addEventListener('mouseover',clearInt);
buttonClear.addEventListener('click', clearAll);


console.log('End program-DOM');
