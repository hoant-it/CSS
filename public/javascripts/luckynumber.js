var btnStart= document.getElementById("btnStart");
var lblNumber= document.getElementById("lblNumber");
var lblArlet= document.getElementById("lblArlet");
var minNumber= 197005
var maxNumber= 321787
var balanceNumber= maxNumber-minNumber+1
var timesRun=0;
var arr=["may giat","tu lanh","tivi"]
var numberFinal=0;
var numberSpecial=221025

btnStart.addEventListener("click", function () {
    if(arr.length<=0){
        alert ("het qua roi")
        return

    }
    timesRun=0;
  var interval=   setInterval(() => {

   
 
    if(timesRun === 30){
        clearInterval(interval);
    } 
       
            // console.log(Math.floor(Math.random() * balanceNumber) + minNumber)
          
            numberFinal=Math.floor(Math.random() * balanceNumber) + minNumber;
            lblNumber.innerText=numberFinal;

            if(timesRun ===  30  && arr[0] === "tu lanh"){
                lblNumber.innerText=numberSpecial;
                lblArlet.innerText= `chuc mung `+numberSpecial+` da trung thuong ` + arr[0].toString();
                arr.shift();
            } 
            
           else if(timesRun ===  30 ){
                lblArlet.innerText= `chuc mung `+numberFinal+` da trung thuong ` + arr[0].toString();
                arr.shift();
            }
          
            // lblNumber.innerText=numberFinal

            timesRun++;
       
    }, 100);

    // console.log(Math.floor(Math.random() * balanceNumber) + minNumber)
})