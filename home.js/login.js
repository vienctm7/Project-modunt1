let count = 0;
function showEye() {
    // e.preventDefault(e);
    count++;
    let password1 = document.getElementById("current-password");
    let eye1 = document.getElementById("eye");
    if (count == 1) {
        password1.type = "text";
    }
    else if (count = 2) {
        password1.type = "password";
        count = 0;
    }
    eye1.classList.toggle("fa-eye");
}
let proviceInfo = JSON.parse(localStorage.getItem("proviceInfo"));
function signUpButton() {
    let usernameValue = document.getElementById("usernameSignup").value;
    let emailValue = document.getElementById("emailSignup").value;
    let passwordValue = document.getElementById("passwordSignup").value;
    let saveinfo = {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
    } 
    if (proviceInfo == null) {
        proviceInfo = [];
        proviceInfo.push(saveinfo);
        localStorage.setItem("proviceInfo", JSON.stringify(proviceInfo));
    } else {
        let flag=true;
        for (i = 0; i < proviceInfo.length; i++) {
            if(proviceInfo[i].email==emailValue){
                flag=false;
                break;
            }else{
                flag=true;
            }
            // if (proviceInfo[i].email == emailValue) {
            //     alert("Email đã được sử dụng vui lòng nhập lại email ")
            //     break;
            // } else if (proviceInfo[i].username == usernameValue) {
            //     alert("Tên tài khoản đã được sử dụng vui lòng nhập lại")
            //     break;
            // } else {
            //     proviceInfo.push(saveinfo);
            //     localStorage.setItem("proviceInfo", JSON.stringify(proviceInfo));
            //     alert("Đăng kí thành công!")
            // }
        }
        if(flag==true){
            proviceInfo.push(saveinfo);
            localStorage.setItem("proviceInfo", JSON.stringify(proviceInfo));
            myFunction("snackbar");
            setTimeout(function() {
                window.location.href="login.html";
            }, 6000);
        }else{
            myFunction("snackbarLogin");
        }
    }
}
function myFunction(thamSo) {
    console.log("33333",thamSo);
    var x = document.getElementById(thamSo);
    x.className = thamSo;
    setTimeout(function(){ x.className = x.className.replace(thamSo, ""); }, 5000);
}
function login() {
    let proviceInfo = JSON.parse(localStorage.getItem("proviceInfo"));
    let usernameLogin = document.getElementById("username").value;
    let passwordLogin = document.getElementById("current-password").value;
    let flag = true;
    for (i = 0; i < proviceInfo.length; i++) {
        if (usernameLogin == proviceInfo[i].username && passwordLogin==proviceInfo[i].password) {
            flag=true;          
            break;
        } else {
            flag=false;
        }
        
    }
    if (flag==true) {
        myFunction("snackbar");
        setTimeout(function() {
            window.location.href="index.html";
        }, 6000);
    }else{
        myFunction("snackbarLogin");
        
    }
}
let adminInfo = {username12:"vien102", password12:"dovanvien"};
localStorage.setItem("adminInfo",JSON.stringify(adminInfo));
function loginAdmin() {
    let adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
    let usernameLogin = document.getElementById("username").value;
    let passwordLogin = document.getElementById("current-password").value;
        if (usernameLogin == adminInfo.username12 && passwordLogin==adminInfo.password12) {
            myFunction("snackbar");
            setTimeout(function() {
                window.location.href="admin.html";
            }, 6000);
        }else{
            myFunction("snackbarLogin");
        }   
}

