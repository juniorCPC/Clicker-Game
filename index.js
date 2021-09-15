let x;
let cc;
let cbp;
// if the key value pair exists, we set x equal to the stored value
// else, set x to 0
if (localStorage.getItem("count")) {
  x = parseInt(localStorage.getItem("count"));
} else {
  x = 0;
}
if (localStorage.getItem("clickBoosts")) {
  cc = parseInt(localStorage.getItem("clickBoosts"));
} else {
  cc = 1;
}
if (localStorage.getItem("clickBoostPrice")) {
  cbp = parseInt(localStorage.getItem("clickBoostPrice"));
} else {
  cbp = 20;
}
let ac;
let acp;
if (localStorage.getItem("autos")) {
  ac = parseInt(localStorage.getItem("autos"));
} else {
  ac = 0;
}
if (localStorage.getItem("autoClickerPrice")) {
  acp = parseInt(localStorage.getItem("autoClickerPrice"));
} else {
  acp = 50;
}
function reset_all() {
  cbp = 20;
  cc = 1;
  x = 0;
  ac = 0;
  acp = 50;
  localStorage.setItem("clickBoostPrice", cbp);
  localStorage.setItem("clickBoosts", cc);
  localStorage.setItem("count", x);
  localStorage.setItem("autos", ac);
  localStorage.setItem("autoClickerPrice", acp);
  document.getElementById("acp").innerHTML = acp;
  document.getElementById("autoClicks").innerHTML = ac;
  document.getElementById("clickBoostPriceCurrent").innerHTML = cbp;
  document.getElementById("cc").innerHTML = cc;
  document.getElementById("counter").innerHTML = x;
}
document.getElementById("acp").innerHTML = acp;
document.getElementById("autoClicks").innerHTML = ac;
function buyAC() {
  if (x < acp) {
    return;
  } else {
    ac += 1;
    x -= acp;
    acp = Math.ceil(acp * 1.15);
    localStorage.setItem("autos", ac);
    localStorage.setItem("autoClickerPrice", acp);
    document.getElementById("acp").innerHTML = acp;
    document.getElementById("autoClicks").innerHTML = ac;
    document.getElementById("counter").innerHTML = x;
  }
}
document.getElementById("btn").addEventListener("click", iterate);
document.getElementById("counter").innerHTML = x;
document.getElementById("reset").addEventListener("click", reset_all);
document.getElementById("acbtn").addEventListener("click", buyAC);
function iterate() {
  x += cc;
  localStorage.setItem("count", x);
  console.log(x);
  document.getElementById("counter").innerHTML = x;
}
function buy_cc() {
  if (x < cbp) {
    return;
  } else {
    cc += 1;
    console.log(cc);
    x -= cbp;
    cbp = Math.ceil(cbp * 1.15);
    console.log(cbp);
    localStorage.setItem("clickBoostPrice", cbp);
    localStorage.setItem("clickBoosts", cc);
    document.getElementById("clickBoostPriceCurrent").innerHTML = cbp;
    document.getElementById("cc").innerHTML = cc;
    document.getElementById("counter").innerHTML = x;
  }
}
document.getElementById("ccbtn").addEventListener("click", buy_cc);
function autoclick() {
  x += ac;
  localStorage.setItem("count", x);
  document.getElementById("counter").innerHTML = x;
}
setInterval(function () {
  autoclick();
}, 1000);
