function calcular(){
    var tn1 = document.getElementById('txtn1');
    var tn2 = document.getElementById('txtn2');
    var resul = document.getElementById('resul');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);

    var sub = n1 - n2;

    resul.innerText = `A divisão dos números ${n1} e ${n2} é igual a ${sub}`;
}