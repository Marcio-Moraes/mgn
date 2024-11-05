function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

let areaTransparent = document.querySelector('.overlay');
areaTransparent.addEventListener('click', (e)=>{
    if(e.target.className == 'overlay'){
        closeNav();
    }
});

let btn_mobile = document.querySelector('.menu_mobile_icon');
btn_mobile.addEventListener('click', openNav);


let listaMenuMobile = document.querySelectorAll('.menu_mobile_div a');
listaMenuMobile.forEach((item)=>{
    item.addEventListener('click', closeNav);
})