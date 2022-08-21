const btn= document.querySelector(".submit");
const cnameinput= document.getElementById("input-name input");
const compbtn = document.querySelector(".complete");
const next = document.querySelector(".thank-you");
const first = document.querySelector("#card-form");

btn.addEventListener("click",(e)=>
{
    first.classList.add("hide")
    next.classList.remove("hide")
})
compbtn.addEventListener("click",(e)=>
{
    first.classList.remove("hide")
    next.classList.add("hide")
})
function dis1()
{
    var cvv= document.getElementById("input-cvc").value;
    document.getElementById("cvv").innerHTML=cvv;
}
function dis2()
{
    var cnum= document.getElementById("input-number").value;
    document.getElementById("number").innerHTML=cnum;
}
function dis3()
{
    var cname= document.getElementById("input-name").value;
    document.getElementById("name").innerHTML=cname;
}
function dis4()
{
    var cmonth= document.getElementById("input-month").value;
    document.getElementById("month").innerHTML=cmonth;
}
function dis5()
{
    var cyear= document.getElementById("input-year").value;
    document.getElementById("year").innerHTML=cyear;
}

