//Html 1
const InputName = document.getElementById("inputNama");
const BtnEnter = document.getElementById("btnENTER");
const ErrorText = document.getElementById("errorText");
const overlay = document.getElementById("overlay");
const pop_up = document.getElementById("pop-up");
const menu = document.getElementById("menu-box");
const lanjut = document.getElementById("Lanjut");

ErrorText.style.display = "none";
pop_up.style.display = "none";
overlay.style.display = "none"
InputName.style.marginBottom = "20px";

function enter() {
    const nama = InputName.value.trim();

    if (nama === "") {
        ErrorText.style.display = "block";
        ErrorText.style.marginBottom = "20px";
        InputName.style.marginBottom = "0";
    } 
    
    else {
        overlay.style.display = "block";
        pop_up.style.display = "block";
        menu.style.display = "none";
        localStorage.setItem("NameDone", nama); //Set Item Di LocalStorage       
    }
}

lanjut.addEventListener("click", function() {
    window.location.href = "berhasil_enter/selesai.html"
})