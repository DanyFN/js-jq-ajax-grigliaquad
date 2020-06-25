$(document).ready(function() {

    // BONUS
    for (var i = 0; i < 36; i++) {
      var squareGenerato = $('.sq-template .square').clone();
      $('.container').append(squareGenerato);
    }

    $(document).on('click', '.square', function() {
        var quadrato = $(this);
        // console.log(quadrato);

        // chiamata ajax con condizione
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            method: "GET",
            success: function(data) {
              // console.log(data.response);
              var numero = data.response;
              // console.log(numero);
              if (numero <= 5) {
                quadrato.removeClass('verde');
                quadrato.addClass('giallo').text(numero);
              } else if (numero >5){
                quadrato.removeClass('giallo');
                quadrato.addClass('verde').text(numero);
              }
            },
            error: function() {
              alert('Errore!');
            }
        });

    });

});
