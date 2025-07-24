const pilihGambar = document.querySelector(".terpilih");
const imGambar = document.querySelectorAll(".gambar");
const inNama = document.querySelector("#nama");

const sec = document.querySelector("section#a");
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
    inNama.style.color = "#4e008e";
    inNama.style.fontSize = "3em";
    // inNama.style.textShadow = "white -1px -1px 30px";
    inNama.style.border = "2px solid #4e008e";
    inNama.style.borderRadius = "50px";
    inNama.style.padding = "0 17rem";
    setTimeout(function () {
      pilihGambar.classList.remove("fade");
    }, 500);

    imGambar.forEach(function (g) {
      g.className = "gambar";
    });
    a.target.classList.add("active");
  }
});
