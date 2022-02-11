function ins(v) {
    document.getElementById("Inserted_value").value += v;
}

 function result() {
    let Num = document.getElementById("Inserted_value").value;
    let res = eval(Num);
    document.getElementById("Result").value = res;
 }