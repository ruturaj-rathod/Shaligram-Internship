function compute() {
    let s1 = document.triangleSide.side1.value;
    s1 = parseInt(s1);
    let s2 = document.triangleSide.side2.value;
    s2 = parseInt(s2);
    let s3 = document.triangleSide.side3.value;
    s3 = parseInt(s3);


    // find s
    let s = (s1 + s2 + s3) / 2;

    let area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));

    const show = document.getElementById("ans");
    show.innerText = "Area is " + area;
}