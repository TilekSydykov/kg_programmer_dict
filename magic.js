class RUPhrase {ru;ky;}
class ENPhrase {en;ky;}

let ru = [];
let en = [];

fetch("ru_translations.json").then(it => {
    it.json().then(r => ru = r)
});

fetch("en_translations.json").then(it => {
    it.json().then(r => en = r)
});
let s = document.getElementById('input');
let h = document.getElementById("holder");
s.onkeyup = function (data) {
    let word = s.value;
    if (word === ''){
        h.innerHTML = "";
        return
    }
    let l = word.length;
    let answer = "";
    ru.filter(w => w.ru.toLowerCase().indexOf(word.toLowerCase()) > -1).forEach(i=> {
        let g = i.ru.toLowerCase().indexOf(word.toLowerCase());
        answer += `${i.ru.slice(0, g)}<b><i style="color: red">${i.ru.slice(g, g + l)}</i></b>${i.ru.slice(g+l, i.ru.length)} -> <b>${i.ky}</b><br>`
    });
    en.filter(w => w.en.toLowerCase().indexOf(word.toLowerCase()) > -1).forEach(i=> {
        let g = i.en.toLowerCase().indexOf(word.toLowerCase());
        answer += `${i.en.slice(0, g)}<b><i style="color: red">${i.en.slice(g, g + l)}</i></b>${i.en.slice(g+l, i.en.length)} -> <b>${i.ky}</b><br>`
    });
    h.innerHTML = answer;
};
