// Ambil semua elemen yang dibutuhkan
const pilihGambar = document.querySelector(".terpilih");
const imGambar = document.querySelectorAll(".gambar");
const inNama = document.querySelector("#nama");
const konten = document.querySelector("#container");
const sebelum = konten.querySelector(".prev");
const sesudah = konten.querySelector(".next");

// Variabel untuk menyimpan indeks gambar aktif
let gambarAktifIndex = null;

// Fungsi untuk menampilkan gambar yang dipilih
function tampilkanGambar(elemen) {
  const sumber = elemen.getAttribute("src");
  const alt = elemen.getAttribute("alt");

  pilihGambar.setAttribute("src", sumber);
  pilihGambar.classList.add("fade");

  inNama.innerHTML = alt;
  inNama.style.color = "#fff";
  inNama.style.fontSize = "2em";
  inNama.style.textShadow = "#4a0077 -1px -1px 30px";
  inNama.style.border = "2px solid #4e008e";
  inNama.style.borderRadius = "50px";
  inNama.style.padding = "0 10rem 10px";

  setTimeout(() => {
    pilihGambar.classList.remove("fade");
  }, 500);

  imGambar.forEach((g) => (g.className = "gambar"));
  elemen.classList.add("active");
}

// Tambahkan event listener ke setiap gambar
imGambar.forEach((gbr, index) => {
  gbr.addEventListener("dblclick", () => {
    gambarAktifIndex = index;
    tampilkanGambar(gbr);

    sebelum.classList.remove("hidden");
    sesudah.classList.remove("hidden");
  });
});

// Navigasi ke gambar sebelumnya
sebelum.addEventListener("click", () => {
  if (gambarAktifIndex > 0) {
    gambarAktifIndex--;
    tampilkanGambar(imGambar[gambarAktifIndex]);
  }
});

// Navigasi ke gambar berikutnya
sesudah.addEventListener("click", () => {
  if (gambarAktifIndex < imGambar.length - 1) {
    gambarAktifIndex++;
    tampilkanGambar(imGambar[gambarAktifIndex]);
  }
});
