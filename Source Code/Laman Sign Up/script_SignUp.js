function validasi() {
    var form = document.getElementById("form").value;

    if (form != "") {
        return true;
    } else {
        alert("MOHON ISI DATA ANDA DENGAN LENGKAP");
    }
}