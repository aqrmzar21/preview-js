const pilihGambar = document.querySelector(".terpilih");
const imGambar = document.querySelectorAll(".gambar");

const sec = document.querySelector("section#a");
sec.addEventListener("dblclick", function (a) {
  if (a.target.className == "gambar") {
    // alert('OK')
    // sekarang kita mengammbil isi atrribut src nya
    let sumber = a.target.getAttribute("src");
    // kemudian kita masukkan ke dalam elemt terpilih
    pilihGambar.setAttribute("src", sumber);
    // pilihGambar.setAttribute('src', 'img/' + sumber) // ini contoh untuk ketik ada dalam folder atau beda tempat
    // masukkan class baru dalam elemt terpilih
    pilihGambar.classList.add("fade");

    setTimeout(function () {
      pilihGambar.classList.remove("fade");
    }, 500);

    imGambar.forEach(function (g) {
      g.className = "gambar";
    });
    a.target.classList.add("active");
  }
});
