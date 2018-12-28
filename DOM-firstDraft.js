
// ================================================================
// --                       DOM
// ================================================================
console.log('');
console.log('Start program-DOM');

const buttonGen = document.querySelector('.btn');
const inputNum = document.querySelector('.search-bar');
const boxDiv = document.querySelector('#wrapper-main');

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
const createHexaDiv = (hexaColor) => {
  //let hexaColor = hexaNum();                                 // Store random Hexa number

  let wrapperDiv = document.createElement('div');
  wrapperDiv.className = 'wrapper-div';
  boxDiv.appendChild(wrapperDiv);
  applyColor(wrapperDiv, hexaColor);           // Apply a random Hexa to background color

  let text = document.createElement('h4');
  text.textContent = hexaColor;
  text.className = 'text';
  wrapperDiv.appendChild(text);

  let inputBox = document.createElement('input');
  inputBox.value = hexaColor;
  inputBox.className = 'input-box';
  wrapperDiv.appendChild(inputBox);
  
  let copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copy';
  copyBtn.className = 'copy-btn';
  wrapperDiv.appendChild(copyBtn);

}

const applyColor = (container, hexaColor) => {
  container.style.backgroundColor = hexaColor;
}

const applyHexa = () => {
  let hexaColor = hexaNum();
  createHexaDiv(hexaColor);
}
//let intervalColor = setInterval(applyHexa, 1000);

buttonGen.addEventListener('click',() => {
  
  let times = inputNum.value;
  inputNum.value = '';
  boxDiv.innerHTML = ''; 
  //console.log(times);

    if (times == 5 || times < 5 || times == ''){
      for(let i=0 ; i<5 ; i++){
        //createHexaDiv();
        applyHexa();
    }
    } else {
      for (let i=0 ; i<times ; i++) {
        //createHexaDiv();
        applyHexa();
    }
    }
  //setInterval(repeat,3000);

});

/*
function copyToClipBoard() {
  //"use strict";
  let copyHexa = document.querySelector('.input-box');
  console.log(copyHexa);
  document.execCommand("copy", false, copyHexa.select());
}

let copyButton = document.querySelector('.copy-btn');
console.log(copyButton);
*/

//copyButton.addEventListener('click',copyToClipBoard);



console.log('End program-DOM');
