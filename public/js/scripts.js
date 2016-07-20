$(document).ready(function(){
    $('.expBtn').click(function(){
        $('.expForm').show();
        $(this).hide();
    });

    $('.expForm').hide();

    $('.eduBtn').click(function(){
        $('.eduForm').show();
        $(this).hide();
    });

    $('.eduForm').hide();

    $('.volBtn').click(function(){
        $('.volForm').show();
        $(this).hide();
    });

    $('.volForm').hide();

});
