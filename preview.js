const pilihGambar = document.querySelector(".terpilih");
const imGambar = document.querySelectorAll(".gambar");
const inNama = document.querySelector("#nama");

const sec = document.querySelector("section#b");
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
});

const sebelum = document.querySelector("#prev");
const sesudah = document.getElementById("prev");

sebelum.addEventListener("click", function (x) {
  alert("OK");
});
sesudah.addEventListener("click", function (x) {
  alert("OK");
});