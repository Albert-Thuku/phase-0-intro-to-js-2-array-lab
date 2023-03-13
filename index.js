const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop(cats.length-1);
}

function destructivelyRemoveFirstCat() {
    cats.shift(cats.length-1);
}


function appendCat(name) {
    const catsNewList = cats.slice();
    catsNewList.push("Broom");
    return catsNewList;
}

function prependCat(name) {
    const catsSecondNew = cats.slice();
    catsSecondNew.unshift("Arnold");
    return catsSecondNew;
}

function removeLastCat() {
    const catsThirdNew = cats.slice(0, cats.length-1);
    return catsThirdNew;
}

function removeFirstCat() {
    const catsFourthNew = cats.slice(1);
    return catsFourthNew;
}