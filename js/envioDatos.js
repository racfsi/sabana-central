function envioMensaje() {
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var correo = $("#correo").val();
    var telefono = $("#telefono").val();
    var seleccion = $("#seleccion").val();
    var mensaje = $("#mensaje").val();
    $.ajax({
        url: 'contacForm.php',
        type: 'post',
        data: { nombre: nombre,apellido: apellido,correo: correo,telefono: telefono,seleccion: seleccion,mensaje: mensaje, },
        success: function (output) {
            var response = output;
            if (response == 1) {
                $("#result").append("Mensaje enviado con éxito, nos comunicaremos <br>con usted lo más pronto posible");
                $("#result").show();                                
                $('#contacto').trigger("reset");
                setTimeout(function () {
                    $("#result").fadeOut(5000);
                    $("#result").hide();       
                    $("#result").html("");
                }, 4000);
                
            } else {
                $("#result").append("Ocurrio un error, intente de nuevo");
            }
        }
    });
}