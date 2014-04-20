(function () {
    'use strict'

    $(document).ready(function () {
        if (!$.cookie("msgcookie")) {
            $("body").prepend("<div class='msgcookie'><p><a href='#' class='close'>cerrar mensaje</a>Esta web utiliza 'cookies' propias y de terceros para ofrecerle una mejor experiencia y servicio y poder registrar el proceso de compra. Al navegar o utilizar nuestros servicios el usuario acepta el uso que hacemos de las 'cookies'. <a href='#'>M&aacute;s informaci&oacute;n</a></p></div>");

            $("body").on("click", ".close", function (e) {
                e.preventDefault();
                $.cookie('msgcookie', 'aceptado');
                $(".msgcookie").fadeOut();
            });

            $("body").on("click", ".msgcookie p a:not(.close)", function (e) {
                e.preventDefault();
                alert("Este enlace debe ir a tu pol\u00EDtica de privacidad");
            });
        }
    });

}())