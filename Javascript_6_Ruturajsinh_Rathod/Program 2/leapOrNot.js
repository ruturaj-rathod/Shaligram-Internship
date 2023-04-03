function isLeapYear() {

    let n = document.checkLeapYear.year.value;
    n = parseInt(n);

    const show = document.getElementById("ans");

    if(n % 4 == 0) {
        show.innerText = n + " is Leap Year";
    } else {
        show.innerText = n + " is not Leap Year";
    }
}