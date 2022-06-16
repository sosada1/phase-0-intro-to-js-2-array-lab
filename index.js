
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
    return (cats);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return (cats);
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return (cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return (cats);
}
function appendCat(name){
    const apCats = [...cats, name];
    return (apCats);        
    }
function prependCat(name){
    const preCats = [name, ...cats];
    return (preCats);
}
function removeLastCat(){
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return (copyOfCats);
}

function removeFirstCat(){
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return (copyOfCats);
}