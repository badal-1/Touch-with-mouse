var canvas = document.getElementById("mc");
var lx;
var ly;
var color = "red";
var lw = 10;
var as = canvas.getContext("2d");
var ws = screen.width - 70;
var hs = screen.height - 300;
var sch = screen.width;
var mouseevent;
if (sch < 992) {
document.getElementById("mc").width = ws;
document.getElementById("mc").height = hs;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", rt);
function rt (e) {
color = document.getElementById("co").value;
lw = document.getElementById("th").value;
lx = e.touches[0].clientX - canvas.offsetLeft;
ly = e.touches[0].clentY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", hy);
function hy (e) {
console.log("lastx = " + lx + ", lasty = " + ly);
cx = e.touches[0].clientX - canvas.offsetLeft;
cy = e.touches[0].clientY - canvas.offsetTop;
console.log("current x = " + cx + ", current y = " + cy);
as.beginPath();
as.strokeStyle = color;
as.lineWidth = lw;
as.moveTo(lx,ly);
as.lineTo(cx,cy);
as.stroke();
lx = cx;
ly = cy;
}
canvas.addEventListener("mousedown",rew);
function rew(e)
{
color = document.getElementById("co").value;
lw = document.getElementById("th").value;
mouseevent = "mousedown";
}
canvas.addEventListener("mousemove", iop);
function iop(e)
{
cx = e.clientX - canvas.offsetLeft;
cy = e.clientY - canvas.offsetTop;
if (mouseevent == "mousedown") {
as.beginPath();
as.strokeStyle = color;
as.lineWidth = lw;
console.log("lastx = " + lx + "lasty = " + ly);
as.moveTo(lx, ly);
console.log("current x = " + cx + "currenty y = " + cy);
as.lineTo(cx, cy);
as.stroke();
}
lx = cx; 
ly = cy;
}
canvas.addEventListener("mouseup", og);
function og(e)
{
mouseevent = "mouseup";
}
canvas.addEventListener("mouseleave", poi);
function poi(e)
{
mouseevent = "mouseleave";
}
function Clear () {
as.clearRect(0,0,as.canvas.width,as.canvas.height);
}
