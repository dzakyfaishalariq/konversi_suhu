import { navbar } from "./componen/navbar.js";
import { celcius } from "./src/celcius.js";
import { remurer } from "./src/remurer.js";
import { farenhet } from "./src/farenhet.js";
import { kelvin } from "./src/kelvin.js";
import { progres } from "./componen/progres_bar_suhu.js";
// !melakukan komponenisasi
const n = document.getElementById("navbar");
const C = document.getElementById("celcius");
const R = document.getElementById("remurer");
const F = document.getElementById("farenhet");
const K = document.getElementById("kelvin");
const pro = document.getElementById("progres");
// const Cel = new celcius(parseInt(C.value));
// console.log(Cel.CtoR());
// !exekusi!
n.innerHTML = navbar();
let prog = progres(0, 0, 32, 273);
pro.innerHTML = prog;
C.addEventListener("input", function () {
  let nilaiC = C.value;
  if (nilaiC === "") {
    R.value = "";
    F.value = "";
    K.value = "";
    let prog = progres(0, 0, 32, 273);
    pro.innerHTML = prog;
  } else {
    let celci = new celcius(parseInt(nilaiC));
    let r, f, k;
    r = celci.CtoR();
    f = celci.CtoF();
    k = celci.CtoK();
    R.value = r.toFixed(2);
    F.value = f.toFixed(2);
    K.value = k.toFixed(2);
    let prog = progres(
      parseInt(C.value).toFixed(2),
      r.toFixed(2),
      f.toFixed(2),
      k.toFixed(2)
    );
    pro.innerHTML = prog;
  }
});
R.addEventListener("input", function () {
  let nilaiR = R.value;
  if (nilaiR === "") {
    C.value = "";
    F.value = "";
    K.value = "";
    let prog = progres(0, 0, 32, 273);
    pro.innerHTML = prog;
  } else {
    let remur = new remurer(parseInt(R.value));
    let c, f, k;
    c = remur.RtoC();
    f = remur.RtoF();
    k = remur.RtoK();
    C.value = c.toFixed(2);
    F.value = f.toFixed(2);
    K.value = k.toFixed(2);
    let prog = progres(
      c.toFixed(2),
      parseInt(R.value).toFixed(2),
      f.toFixed(2),
      k.toFixed(2)
    );
    pro.innerHTML = prog;
  }
});
F.addEventListener("input", function () {
  let nilaiF = F.value;
  if (nilaiF === "") {
    C.value = "";
    R.value = "";
    K.value = "";
    let prog = progres(0, 0, 32, 273);
    pro.innerHTML = prog;
  } else {
    let faren = new farenhet(parseInt(F.value));
    let c, r, k;
    c = faren.FtoC();
    r = faren.FtoR();
    k = faren.FtoK();
    C.value = c.toFixed(2);
    R.value = r.toFixed(2);
    K.value = k.toFixed(2);
    let prog = progres(
      c.toFixed(2),
      r.toFixed(2),
      parseInt(F.value).toFixed(2),
      k.toFixed(2)
    );
    pro.innerHTML = prog;
  }
});
K.addEventListener("input", function () {
  let nilaiK = K.value;
  if (nilaiK === "") {
    C.value = "";
    R.value = "";
    F.value = "";
    let prog = progres(0, 0, 32, 273);
    pro.innerHTML = prog;
  } else {
    let kelv = new kelvin(parseInt(K.value));
    let c, r, f;
    c = kelv.KtoC();
    r = kelv.KtoR();
    f = kelv.KtoF();
    C.value = c.toFixed(2);
    R.value = r.toFixed(2);
    F.value = f.toFixed(2);
    let prog = progres(
      c.toFixed(2),
      r.toFixed(2),
      f.toFixed(2),
      parseInt(K.value).toFixed(2)
    );
    pro.innerHTML = prog;
  }
});
