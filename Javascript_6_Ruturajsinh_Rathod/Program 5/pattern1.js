function isPrime(n) {
    flage = true;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            flage = false;
            break;
        }
    }
    return flage;
}

function pattern() {
    let print = document.getElementById('print');
    let str = "";
    let space = 3, num = 2;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < space; j++) {
            str += " ";
        }
        space--;
        let n = 2 * i + 1;
        let count = 0;
        while(count != n) {
            if(isPrime(num)) {
                str += num+",";
                count++;
            }
            num++;
        }
        str += "\n";
    }

    print.innerText = str;
}