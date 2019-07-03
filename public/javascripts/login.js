var value;
var Num = document.getElementById('num');
var Name = document.getElementById('name');
var NickName = document.getElementById('nickName');
var Password = document.getElementById('pw');

var cnt = 0;
var isValid = false;

var eMail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//var phone =  /^\d{11}$/;

function checkEmail() {

    if (Num.value == "") {
        isValid = false;
        Num.style.borderColor = 'red';
    }
    else if (eMail.test(Num.value) == false /*|| phone.test(Num.value) == false*/) {
        isValid = false;
        Num.style.borderColor = 'red';
    }

    else{
        isValid = true;
        Num.style.borderColor = "#e6e6e6";
    }

}

function checkName() {

    if (Name.value == "") {
        isValid = false;
        Name.style.borderColor = 'red';
    }
    else{
        isValid = true;
        Name.style.borderColor = '#e6e6e6';
    }

}

function checkNickName() {
    if (NickName.value == "") {
        isValid = false;
        NickName.style.borderColor = 'red';
    }
    else{
        isValid = true;
        NickName.style.borderColor = '#e6e6e6'
    }
}

function checkPw() {
    if (Password.value == "") {
        isValid = false;
        Password.style.borderColor = 'red';
    }
    else{
        isValid = true;
        Password.style.borderColor = '#e6e6e6'
    }
}

function join() {
    if (isValid) {
        alert(Num.value+'\n'+Name.value+'\n'+NickName.value+'\n'+Password.value);
        document.getElementById('inputUserInfo').submit();
        //document.location.href = 'feed';
    }
}