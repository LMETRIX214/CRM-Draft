function guardar(){
    db.collection("datos").add({
        CAP: document.getElementById("CAP").value,
        DES: document.getElementById("DES").value,
        DIR: document.getElementById("DIR").value,
        ETQ: document.getElementById("ETQ").value,
        IMAG: document.getElementById("IMAG").value,
        NCS: document.getElementById("NCS").value,
        NLS: document.getElementById("NLS").value,
        SWEB: document.getElementById("SWEB").value
    })
    .then((docRef) => {
        alert("Datos registrados");
    })
    .catch((error) => {
        alert("Error en el registro");
    });
}