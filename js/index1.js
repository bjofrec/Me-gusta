let likeNeil = 9;
let likeNichole = 12;
let likeJim = 9 ;

function clickLike(){
    let like = document.querySelector('#megusta');
    likeNeil ++;
    like.innerHTML = likeNeil;
}
function clickLike2(){
    let like = document.querySelector('#megusta1');
    likeNichole ++;
    like.innerHTML = likeNichole;
}
function clickLike3(){
    let like = document.querySelector('#megusta2');
    likeJim ++;
    like.innerHTML = likeJim;
}