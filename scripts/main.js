let myImage = document.querySelector('img');

myImage.onclick = function() {
    let myScr = myImage.getAttribute('src');
if(myScr === 'images/jordan.jpg') {
    myImage.setAttribute ('src','images/jordan2.jpg');
} else {myImage.setAttribute ('src','images/jordan.jpg');}
}

let myButton = document.querySelector('button');
let myHead = document.querySelector('h1');
function setUserName () {
    var MyName = prompt('Please enter your name');
    localStorage.setItem('name',MyName);
    myHead.textContent = ('Jordan is best, ' + MyName);
}

if(!localStorage.getItem('name')) {
    setUserName();
    } else { 
        var storedName = localStorage.getItem('name');
        myHead.textContent = 'Jordan is best, ' + storedName;
    }
    myButton.onclick = function(){
        setUserName();
    }