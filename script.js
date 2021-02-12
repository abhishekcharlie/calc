
function display(digit)
{
  var n=digit;
  document.getElementById("output").value+=n;
}

function calculate(){
  var value=document.getElementById("output").value;
  document.getElementById("output").value=eval(value);
}
function clea(){
  document.getElementById("output").value=" ";
}
function delet(){
  var val=document.getElementById("output").value;
  val=val.slice(0,-1);
  document.getElementById("output").value=val;
}
function clic(clicked)
{
  var cur=document.querySelector("#"+clicked);
  cur.classList.add("pressed");
  setTimeout(function()
{
  cur.classList.remove("pressed");
},100);
}
document.addEventListener("keypress",function(e){
var p=e.key;
console.log(p);

if(p=='=')
{
  calculate();
}
else if(p=='c')
{
  clea();
}
else if(p=='d')
{
  delet();
}
else
{
  display(p);
}
});
