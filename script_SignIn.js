function validasi() {
    var email = document.getElementById("email").value;
    var sandi = document.getElementById("kata_sandi").value;

    if (email != "" && sandi != "") {
        return true;
    } else {
        alert("MOHON ISI EMAIL/PASSWORD DENGAN BENAR")
    }
}