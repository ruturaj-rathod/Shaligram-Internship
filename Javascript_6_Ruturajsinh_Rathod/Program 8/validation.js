document.forms[0].addEventListener('submit', function (e) { 
    e.preventDefault();
    validation();
});

var passReg  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function validation() {

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emails = document.getElementById('emails').value;
    var nationality = document.getElementById('nationality');
    var lang = document.getElementById('lang').value;
    var birthday = document.getElementById('birthday');
    var comment = document.getElementById('comment').value;
    var tnc = document.getElementById('tnc');
    var flage = true;

    var username = document.getElementById('username');
    username.innerHTML = "";
    var password = document.getElementById('passwords');
    password.innerHTML = "";
    var phoneErr = document.getElementById('mobileno');
    phoneErr.innerHTML = "";
    var emailErr = document.getElementById('emailids');
    emailErr.innerHTML = "";
    var radioErr = document.getElementById('radioErr');
    radioErr.innerHTML = "";
    var selectErr = document.getElementById('selectErr');
    selectErr.innerHTML = "";
    var mlErr = document.getElementById('mlErr');
    mlErr.innerHTML = "";
    var dobErr = document.getElementById('dobErr');
    dobErr.innerHTML = "";
    var cmtErr = document.getElementById('cmtErr');
    cmtErr.innerHTML = "";
    var chErr = document.getElementById('chErr');
    chErr.innerHTML = "";


    // Name validation
    if (user == "") {
        username.innerHTML = " * Please fill the username field";
        flage = false;
    } else if ((user.length <= 2) || (user.length > 20)) {
        username.innerHTML = " * Username lenght must be between 2 and 20";
        flage = false;
    } else if (!isNaN(user)) {
        username.innerHTML = " * only characters are allowed";
        flage = false;
    }

    // password validation
    if (pass == "") {
        password.innerHTML = " * Please fill the password field";
        flage = false;
    } else if ((pass.length <= 5) || (pass.length > 20)) {
        password.innerHTML = "* Passwords lenght must be between  5 and 20";
        flage = false;
    } else if(!passReg.test(pass)) {
        password.innerHTML = "* password should contain atleast one number and one special character";
        flage = false;
    }

    //mobile validation
    if (mobileNumber == "") {
        phoneErr.innerHTML = "* Please fill the mobile NUmber field";
        flage = false;
    } else if (isNaN(mobileNumber)) {
        phoneErr.innerHTML = "* user must write digits only not characters";
        flage = false;
    } else if (mobileNumber.length != 10) {
        phoneErr.innerHTML = "* Mobile Number must be 10 digits only";
        flage = false;
    }


    // emailId validation
    if (emails == "") {
        emailErr.innerHTML = "* Please fill the emailid field";
        flage = false;
    } else if (emails.indexOf('@') <= 0) {
        emailErr.innerHTML = "* @ Invalid Position";
        flage = false;
    } else if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        emailErr.innerHTML = " * . Invalid Position";
        flage = false;
    }

    //Gender Validation 
    if(!document.getElementById('male').checked && !document.getElementById('female').checked) {
        radioErr.innerHTML = "* Please Select Gender";
        flage = false;
    }

    //Nationality Validation
    if(!nationality.value) {
        selectErr.innerHTML = "* Please Select Nationality";
        flage = false;
    }

    // language validation 
    if(lang == "") {
        mlErr.innerHTML = "* Please Choose language";
        flage = false;
    }


    // birthday validation
    if(!birthday.value) {
        dobErr.innerHTML = "* Please Enter Birth Date";
        flage = false;
    }

    //checkbox validation
    if(comment == "") {
        cmtErr.innerHTML = "* Comment the Reason";
        flage = false;
    }


    //terms and condition
    if(!tnc.checked) {
        chErr.innerHTML = "Agree Term's and Condtion";
        flage = false;
    }

    if(flage) {
        let str = "Username is " + user;
        str += "\nPassword is " + pass;
        str += "\nMobile Number is " + mobileNumber;
        str += "\nEmail id is " + emails;
        for(let g in document.getElementsByName('gender')) {
            if(document.getElementsByName('gender')[g].checked) {
                str += "\nGender is " + document.getElementsByName('gender')[g].value;
            }
        }
        var option = nationality.options[nationality.selectedIndex];
        str += "\nNationality is " + option.text;
        str += "\nDate of birth is " + birthday.value;
        str += "\nLanguage Knows are " + lang.toString();
        alert(str);
    }
    return flage;
}