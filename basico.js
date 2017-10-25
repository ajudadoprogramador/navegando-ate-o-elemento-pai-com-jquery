$(function(){
    // Ação quando clicar no botão
    $('button').click(function(){
        // Remove a class ativo de todas as lis
        $('li.ativo').removeClass('ativo');
        // Coloca a class ativo apenas na ele que é pai do button
        $(this).closest('li').addClass('ativo');

        return false;
    });
});
