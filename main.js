$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const novaTarefa = $('#novaTarefa').val()
        const adicionarALista = $('<li></li>').text(novaTarefa);
        adicionarALista.appendTo('ul');

        $('#novaTarefa').val('')
    })

    $('ul').on('click','li', function(){
        $(this).css({'text-decoration': 'line-through'});
    })
    
})