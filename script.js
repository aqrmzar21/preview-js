// Ambil elemen penting
const pilihGambar = document.querySelector(".terpilih");
const imGambar = document.querySelectorAll(".gambar");
const inNama = document.querySelector("#nama");
const sebelum = document.querySelector(".prev");
const sesudah = document.querySelector(".next");

let gambarAktifIndex = null;

// Fungsi untuk update tampilan gambar
function tampilkanGambar(elemen) {
  const src = elemen.getAttribute("src");
  const alt = elemen.getAttribute("alt");

  pilihGambar.setAttribute("src", src);
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

  updateNavigasi();
}

// Fungsi untuk update visibilitas tombol Prev/Next
function updateNavigasi() {
  sebelum.classList.toggle("hidden", gambarAktifIndex === 0);
  sesudah.classList.toggle("hidden", gambarAktifIndex === imGambar.length - 1);
}

// Event klik ganda di gambar
imGambar.forEach((gambar, index) => {
  gambar.addEventListener("dblclick", () => {
    gambarAktifIndex = index;
    tampilkanGambar(gambar);
  });
});

// Navigasi sebelumnya
sebelum.addEventListener("click", () => {
  if (gambarAktifIndex > 0) {
    gambarAktifIndex--;
    tampilkanGambar(imGambar[gambarAktifIndex]);
  }
});

// Navigasi berikutnya
sesudah.addEventListener("click", () => {
  if (gambarAktifIndex < imGambar.length - 1) {
    gambarAktifIndex++;
    tampilkanGambar(imGambar[gambarAktifIndex]);
  }
});

// Navigasi dengan keyboard arrow
document.addEventListener("keydown", (e) => {
  if (gambarAktifIndex !== null) {
    if (e.key === "ArrowLeft" && gambarAktifIndex > 0) {
      gambarAktifIndex--;
      tampilkanGambar(imGambar[gambarAktifIndex]);
    } else if (e.key === "ArrowRight" && gambarAktifIndex < imGambar.length - 1) {
      gambarAktifIndex++;
      tampilkanGambar(imGambar[gambarAktifIndex]);
    }
  }
});
