const textName = document.getElementById("namaDisplay");

const nama = localStorage.getItem("NameDone");

textName.textContent = `Hello ${nama}`;

function kembali() {
    alert("Apakah kamu yakin untuk kembali?");
    window.location.href = "/index.html"
}