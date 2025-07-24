const pilihGambar = document.querySelector(".terpilih");
const imGambar = document.querySelectorAll(".gambar");
const inNama = document.querySelector("#nama");

const konten = document.querySelector("#container");
const sec = konten.querySelector("section#b");
sec.addEventListener("dblclick", function (a) {
  if (a.target.className == "gambar") {
    // alert('OK')
    // sekarang kita mengammbil isi atrribut src nya
    let sumber = a.target.getAttribute("src");
    let alt = a.target.getAttribute("alt");
    // kemudian kita masukkan ke dalam elemt terpilih
    pilihGambar.setAttribute("src", sumber);
    // pilihGambar.setAttribute('src', 'img/' + sumber) // ini contoh untuk ketik ada dalam folder atau beda tempat
    // masukkan class baru dalam elemt terpilih
    pilihGambar.classList.add("fade");
    inNama.innerHTML = alt;
    // inNama.style.color = "#4e008e";
    inNama.style.color = "#fff";
    inNama.style.fontSize = "2em";
    inNama.style.textShadow = "#4a0077 -1px -1px 30px";
    inNama.style.border = "2px solid #4e008e";
    inNama.style.borderRadius = "50px";
    inNama.style.padding = "0 10rem 10px";
    setTimeout(function () {
      pilihGambar.classList.remove("fade");
    }, 500);

    imGambar.forEach(function (g) {
      g.className = "gambar";
    });
    a.target.classList.add("active");
  }
  const pre = a.target.previousElementSibling;
  const nex = a.target.nextElementSibling;
  // console.log(nex);
  // console.log(pre.getAttribute('src'))
});

// const akt = document.querySelector(".active");
const sebelum = konten.querySelector(".prev");
const sesudah = konten.querySelector(".next");
// sebelum.style.display = 'none'
// sesudah.style.display = 'none'

imGambar.forEach(function (el) {
  sebelum.addEventListener("click", function (x) {
    // if (x.target.className == "active") {
    let a = el.target;
    console.log(a);
    // }
    // alert("OK");
    // console.log(akt);
  });
});

sesudah.addEventListener("click", function (y) {
  console.log("OK");
});
