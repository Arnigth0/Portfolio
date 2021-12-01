let fixNav = ( () => {
    if(window.scrollY >= 20){
        document.body.classList.add('fixed_nav');
    } else {
        document.body.classList.remove('fixed_nav');
    } 

    if(window.scrollY >= 1600){
        document.body.classList.add('show');
    } else {
        document.body.classList.remove('show');
    } 
});


window.addEventListener('scroll', fixNav)

const texts = ["Student", "Coder"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if(count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}());

