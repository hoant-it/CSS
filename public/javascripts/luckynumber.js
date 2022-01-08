var btnStart= document.getElementById("btnStart");
var lblNumber= document.getElementById("lblNumber");
var lblArlet= document.getElementById("lblArlet");
var minNumber= 197005
var maxNumber= 321787
var balanceNumber= maxNumber-minNumber+1
var timesRun=0;
var divPt= document.getElementById("divPt");
var arr=[ {STT:1, tenPT:"xe may vison", dv:"pcs", sl:1},
{STT:2, tenPT:"tu lanh", dv:"pcs", sl:2},
{STT:3, tenPT:"may giat", dv:"pcs", sl:4},
]
var numberFinal=0;
var numberSpecial=221025



function renderTablePhanThuong(){
    if(arr.length>0){
     var arrPtTable=    arr.map(item =>{
         return `
         <tr>
             <td>${item.STT}</td>
             <td>${item.tenPT}</td>
             <td>${item.dv}</td>
             <td>${item.sl}</td>
         </tr>
     `
     });

     var arrHtmlPt= arrPtTable.join('');
     divPt.innerHTML=` <table  class="tbl-Pt">
     <tr>
         <th> STT </th>
         <th> Phần Thường </th>
         <th> Đơn Vị </th> 
         <th> Số Lượng </th>
     </tr>
     ${arrHtmlPt}
 </table>`

    }
}

renderTablePhanThuong();

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