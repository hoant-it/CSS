
function toggle() {
    var blur= document.getElementById('blur');
    blur.classList.toggle('active');
    var popup= document.getElementById('popup');
    popup.classList.toggle('active');

}

window.onload = function () {
    var readMore= document.getElementById('readMore');
    readMore.addEventListener('click',function () {
        toggle();
        
    })

    var close= document.getElementById('close');
    close.addEventListener('click',function () {
        toggle();
        
    })

    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');

    
}


