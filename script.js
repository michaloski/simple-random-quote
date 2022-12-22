const btn = document.querySelector('.btn')

import {data} from './data.js';

const randomNum = function(){
    return Math.floor(Math.random() * 5)
}

btn.addEventListener('click', function(){
    const randomQuote = data[randomNum()];
    document.querySelector('p').textContent = `${randomQuote.quote} Author: ${randomQuote.artist}`
})

