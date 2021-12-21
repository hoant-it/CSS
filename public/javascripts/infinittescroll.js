
const ULR = 'https://picsum.photos/250/'
const container = document.querySelector('.container')
let bnt= document.getElementById("bntId");
bnt.addEventListener("click", function () {
    alert ("" +bnt.type);
})



/*
b1 
tao 1 element hinh va append vao container div
*/
function getRanNum(){
   return Math.floor(Math.random()*100)>=150?150:Math.floor(Math.random()*100)
}

function LoadImage(numImages = 10){
    let i = 0;
    while (i < numImages){
        const img =document.createElement('img');
        img.src=`${ULR}${getRanNum()}`
        container.appendChild(img);
        i++;
    }

}

LoadImage();

/*
b2 
listen for a scroll event and load more images if we reach the bottom
of the window 
*/
window.addEventListener('scroll', () =>{
    // console.log(window.scrollY);
    // kiem tra khi scroll va do dai thua con lai cua trang ma lon hon hoac bang 
    // do dai cua trang 
    if(window.scrollY + window.innerHeight 
        >= document.documentElement.scrollHeight){
            LoadImage();
        }
})



