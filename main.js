function calculator(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert("แสดงผลรวม : "+sum.toFixed(2));
    // document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
};
function calculator1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert("แสดงผลรวม : "+sum.toFixed(2));
    // document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
};
function calculator2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert("แสดงผลรวม : "+sum.toFixed(2));
    // document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
};
function calculator3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert("แสดงผลรวม : "+sum.toFixed(2));
    // document.getElementById("result").innerHTML = "แสดงผลรวม :" +sum;
};

function myalert(){
    alert("Hello Prayut")
}

const img = document.createElement("img")

img.src = "img/aum.jpg";
img.style.width = "200px";

document.getElementById("mydiv").appendChild(img);

function bmi(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = (num1)/(num2/100*num2/100);
    alert("แสดงผลรวม : "+sum.toFixed(2));
}