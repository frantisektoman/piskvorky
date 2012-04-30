var posluchac = {
    jmeno: 'posluchac',
    obrazek: 'images/prazdny.png'
};
exports.posluchac = posluchac;
var prazdny = {
    jmeno: 'prazdny',
    obrazek: 'images/prazdny.png'
}
exports.prazdny = prazdny;


var kameny = new Array;
exports.kameny = kameny;
kameny[0] = {
    jmeno: 'kolecko',
    obrazek: 'images/kolecko.png'
};
kameny[1] = {
    jmeno: 'krizek',
    obrazek: 'images/krizek.png'
};

var hracNaTahu = 0;
exports.naTahu = function(){
    return kameny[hracNaTahu];
}
exports.dalsiNaTahu = function(){
    hracNaTahu++;
    if(hracNaTahu >= kameny.length){
        hracNaTahu = 0;
    }
    return kameny[hracNaTahu];
}

var posledniHrac;
exports.novyHrac = function(){
    if(! posledniHrac){
        posledniHrac = kameny[0];
        return posledniHrac;
    }
    if(posledniHrac === posluchac){
        return posledniHrac;
    }
    for(i = 0; i<=kameny.length; i++){
        if(kameny[i] === posledniHrac) {
            if(i == kameny.length-1){
                posledniHrac = posluchac;
            } else {
                posledniHrac = kameny[i+1];
            }
            return posledniHrac;
        }
    }
}

