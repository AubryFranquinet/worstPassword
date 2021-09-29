let arrCodeAscii = ['0', "=", "a", "4", "à", "&", "z", "'", "+", "°", "8", "(", "e",
    ":", "r", "§", "à", "/", ")", '"', "t", "3", ";", "_", "y", "-", "$", "¨", "6", "*",
    "u", "$", "!", "7", "^", "1", "ù", "%", "ç", "2", "£", "5", "è", "`", "8", ">", "9",
    "<", "i", "?", "o", "p", ",", "Ç", "q", "s", "d", "¡", ".", "f", "«", "g", "Ø", "h",
    "¶", "{", "j", "", "ë", "“", "#", "k", "Û", "l", "å", "m", "w", "@", "x", "[", "c", "}",
    "v", "", "„", "b", "¥", "n", 'O', 'P', 'D', 'E', 'I', 'Ť', 'Ũ', 'Ĝ', 'Ĥ', 'F', 'G', 'H',
    'Ϊ', 'Ī', 'S', 'T', 'U', 'C', 'M', 'N', 'Ä', 'β', 'Ć', 'Ç', 'Ď', 'È', 'Ќ', 'Ĺ', 'Ļ', 'Й', 'Ŏ',
    'Ṗ', 'Ŕ', 'Ř', 'Ś', 'Ū', 'Ŭ', 'ϋ', 'V', 'Á', 'Ã', 'A', 'B', 'Й', 'É', 'Ê', 'W', 'Ё', 'Ǝ', 'Š',
    'Ť', 'Ĭ', 'X', 'Y', 'Z', 'À', 'Ň', 'Ń', 'J', 'K', 'L', 'Q', 'R', 'Ŵ', 'Ẁ', 'Ϋ', 'Ŷ', 'Ź', 'Ż']

//Select password
let password1 = document.querySelector(".password1");
password1.value = ''
let password2 = document.querySelector(".password2");
password2.value = ''
let password3 = document.querySelector(".password3");
password3.value = ''
let password4 = document.querySelector(".password4");
password4.value = ''
let password5 = document.querySelector(".password5");
password5.value = ''
let password6 = document.querySelector(".password6");
password6.value = ''
let password7 = document.querySelector(".password7");
password7.value = ''
let password8 = document.querySelector(".password8");
password8.value = ''
let password9 = document.querySelector(".password9");
password9.value = ''
let password10 = document.querySelector(".password10");
password10.value = ''
let password11 = document.querySelector(".password11");
password11.value = ''
let password12 = document.querySelector(".password12");
password12.value = ''

//Select arrow
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");
let arrow4 = document.querySelector(".arrow4");
let arrow5 = document.querySelector(".arrow5");
let arrow6 = document.querySelector(".arrow6");
let arrow7 = document.querySelector(".arrow7");
let arrow8 = document.querySelector(".arrow8");
let arrow9 = document.querySelector(".arrow9");
let arrow10 = document.querySelector(".arrow10");
let arrow11 = document.querySelector(".arrow11");
let arrow12 = document.querySelector(".arrow12");


arrow1.onclick = function(){

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password1.value = arrCodeAscii[elem];
        console.log(i)
    }

}
arrow2.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password2.value = arrCodeAscii[elem];
        console.log(i)
    }

}

arrow3.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password3.value = arrCodeAscii[elem];
        console.log(i)
    }
}

arrow4.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password4.value = arrCodeAscii[elem];
        console.log(i)
    }

}

arrow5.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password5.value = arrCodeAscii[elem];
        console.log(i)
    }

}

arrow6.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password6.value = arrCodeAscii[elem];
        console.log(i)
    }

}

arrow7.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password7.value = arrCodeAscii[elem];
        console.log(i)
    }

}
arrow8.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password8.value = arrCodeAscii[elem];
        console.log(i)
    }

}
arrow9.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password9.value = arrCodeAscii[elem];
        console.log(i)
    }

}
arrow10.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password10.value = arrCodeAscii[elem];
        console.log(i)
    }

}
arrow11.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password11.value = arrCodeAscii[elem];
        console.log(i)
    }

}
arrow12.onclick = function () {

    for (let i = 0; i < 1; i++) {
        let elem = Math.floor(Math.random() * arrCodeAscii.length);
        password12.value = arrCodeAscii[elem];
        console.log(i)
    }

}
