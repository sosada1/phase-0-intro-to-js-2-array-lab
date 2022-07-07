const cats = ["Milo", "Otis", "Garfield"] 

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
    const copyOfAppendCat = [...cats, name];
    return (copyOfAppendCat);
}

function prependCat(name){
    const copyOfPrependCat = [name, ...cats];
    return copyOfPrependCat;
}

function removeLastCat(){
    const copyRemoveLastCat = [...cats]
    copyRemoveLastCat.pop();
    return copyRemoveLastCat;
}

function removeFirstCat(){
    const copyRemoveFirstCat = [...cats]
    copyRemoveFirstCat.shift();
    return copyRemoveFirstCat;
}