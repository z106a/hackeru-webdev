import img1 from '../assets/0_30a0ce_da34b18a_orig.jpg';
import small from '../assets/small.jpeg';
import axios from 'axios';

import "./style.css";
console.log('hello world');

function testMe() {
  console.log('test me function');
}
testMe();

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = img1;

document.body.appendChild(bigImage);



