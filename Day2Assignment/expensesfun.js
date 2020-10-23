const getNumber = function(val){
    if(isNaN(val))
        return 0;
    else 
        return parseFloat(val);
}

const $get = function(id){
    return document.getElementById(id);
}

const addFunc = function(v1, v2){
    v1 = getNumber(v1);
    v2 = getNumber(v2);
    return v1 + v2;
}

const subFunc = function(v1, v2){
    return v1 - v2;
}
const mulFunc = function(v1, v2){
    return v1 * v2;
}
const divFunc = function(v1, v2){
    return v1 / v2;
}
const getDate = function(dt){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = dt.getFullYear();
    const month = months[dt.getMonth()];
    const day = dt.getDate();
    return day + " " + month + " " + year;
}