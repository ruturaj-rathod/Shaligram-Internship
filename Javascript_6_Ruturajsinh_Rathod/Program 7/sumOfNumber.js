function sum() {

    let start, end, power, sum = 0;

    start = parseInt(document.myForm.start.value);
    end = parseInt(document.myForm.end.value);
    power = parseInt(document.myForm.power.value);

    for(let i = start; i <= end; i++) {
        sum += i**power;
    }
    const show = document.getElementById("ans");
    show.innerText = "Sum of powers of numbers is " + sum;
}