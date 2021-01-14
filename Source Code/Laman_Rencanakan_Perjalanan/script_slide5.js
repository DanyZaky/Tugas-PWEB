const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.navbar strong');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});

function validasi() {
    var nama = document.getElementById("nama_depan").value;
    var pertama = document.getElementById("inp").value;
    var kedua = document.getElementById("inp2").value;
    var ketiga = document.getElementById("inp3").value;
    var keempat = document.getElementById("inp4").value;

    if (nama != "" && pertama != "" && kedua != "" && ketiga != "" && keempat != "") {
        alert("TERIMA KASIH TELAH MENDAFTAR \nDATA ANDA TELAH KAMI TERIMA");
    } else {
        alert("MOHON ISI DATA ANDA DENGAN LENGKAP");
    }
}