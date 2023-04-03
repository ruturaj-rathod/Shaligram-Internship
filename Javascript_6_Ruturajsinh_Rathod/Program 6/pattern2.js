function pattern() {
    let print = document.getElementById('print');
    let str = "", space = 3, show = 1;

    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < space; j++) {
            str += " ";
        }
        for(let l = 1; l <= show; l++) {
            str += "* ";
        }
        
                if( 3 > i) {
                    space--;
                    show += 2;
                } else {
                    space++;
                    show -= 2;
                }
        str += "\n";
    }
    print.innerText = str;
}