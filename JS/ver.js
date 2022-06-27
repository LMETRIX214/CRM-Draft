function ver(){
    db.collection("datos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            document.getElementById("DIR").innerHTML=`${doc.data().DIR}`
            
            document.getElementById("DES").innerHTML=`${doc.data().DES}`

            document.getElementById("CAP").innerHTML=`${doc.data().CAP}`

            document.getElementById("SWEB").innerHTML=`${doc.data().SWEB}`
            
            document.getElementById("NLS").innerHTML=`${doc.data().NLS}`

            document.getElementById("NCS").innerHTML=`${doc.data().NCS}`

            document.getElementById("ETQ").innerHTML=`${doc.data().ETQ}`

            document.getElementById("IMAG").innerHTML=`${doc.data().IMAG}`

        });
    });
}
/*
ID   - Identificacion
NLS  - Nombre del salon
NCS  - Nombre corto del salon
ETQ  - Etiquetas
DES  - Descripcion
DIR  - Direccion
CAP  - Capacidad
SWEB - Sitio web
IMAG - Imagen
*/