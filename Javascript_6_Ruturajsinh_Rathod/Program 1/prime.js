function isPrime() {

    // first way
    let n, flage = true;
    n = document.primeForm.number.value;
    n = parseInt(n);
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            flage = false;
            break;
        }
    }

    
    const show = document.getElementById("ans");
    if(flage) {
        show.innerText = n + " is Prime Number";
        show.style.color = "green";
    } else {
        show.innerText = n + " is not Prime Number";
        show.style.color = "red";
    }

    // second way
    let num  = parseInt(document.primeForm.number.value);
    let isPrime = true;
    for(let j = 2; j < n; j++) {
        if(n % j == 0) {
            isPrime = false;
            break;
        }
    }

    if(isPrime) {
        alert(num + " is Prime Number");
    } else {
        alert(num + " is not Prime NUmber");
    }
}