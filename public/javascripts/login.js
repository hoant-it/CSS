var u = document.getElementById("userName");
var p = document.getElementById("password");
var checkbox= document.getElementById("checkbox");

function Setcookie() {
//   console.log("checkbox " + checkbox.checked)
  if(checkbox.checked){
    document.cookie="myusername="+u.value
    document.cookie="mypass="+p.value
    document.cookie="remembercheck="+checkbox.checked
  } else{

    document.cookie="myusername=; expries=Thu, 01 Jan 1970 00:00:01 GMT;"
    document.cookie="mypass="+""
    document.cookie="remembercheck="+checkbox.checked
  }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function  getCookiedData() {
// console.log(document.cookie);
let user = getCookie('myusername')
let pass = getCookie('mypass')
let rememberCheck=(getCookie('remembercheck') ==='true')
u.value=user
p.value=pass
checkbox.checked=rememberCheck
    
}




window.onload = () => {
// alert("onloaded");
getCookiedData();
   
    checkbox.addEventListener("click",Setcookie);

    


    
}






