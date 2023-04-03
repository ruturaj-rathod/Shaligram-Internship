function convert() {

    let celsuis = document.myForm.tempCelsuis.value;
    let fahrenheit = document.myForm.tempFahrenheit.value;

    const show = document.getElementById("ans");

    if(celsuis !== '') {
        celsuis = parseFloat(celsuis);
        fahrenheit = celsuis * (9 / 5) + 32;
        show.innerText = celsuis + " C° is equivalent to " + parseFloat(fahrenheit).toFixed(2) + " F°";
        document.myForm.tempCelsuis.value = "";
    } else {
        fahrenheit = parseFloat(fahrenheit);
        celsuis = (fahrenheit - 32) * (5 / 9);
        show.innerText = fahrenheit + " F° is equivalent to " + parseFloat(celsuis).toFixed(2) + "C°";
        document.myForm.tempFahrenheit.value = "";
    }

}