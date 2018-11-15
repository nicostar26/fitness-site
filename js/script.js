function scroll(){
    var kettlebell = document.getElementById('kettlebell');
    var cdsystem = document.getElementById('cdsystem');
    var book = document.getElementById('book');
    var suppweight = document.getElementById('suppweight');
    var wheyprotein = document.getElementById('wheyprotein');
    var apparel = document.getElementById('apparel');
    var ypos = window.pageYOffset;


if(ypos > 1100){
        kettlebell.style.opacity = '1';
        cdsystem.style.opacity = '1';
        book.style.opacity = '1';
    }

if(ypos > 2200){
    suppweight.style.opacity = '1';
    wheyprotein.style.opacity = '1';
    apparel.style.opacity = '1';
}
}

window.addEventListener('scroll', scroll);

