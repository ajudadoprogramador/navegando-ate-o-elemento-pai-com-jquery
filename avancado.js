$(function(){
    // Ação quando clicar no botão
    $('button').click(function(){
        // Pega o formulário que está sendo enviado
        var form = $(this).closest('form');
        // Pega o link para onde será enviado pelo action do formulário
        var link = form.attr('action');
        // Pega a mensagem de envio com sucesso
        var mensagem = form.attr('data-mensagem');

        // Cria um objeto dados onde será salvo os valores dos inputs
        var dados = {};
        var nome;
        // Cria um laço que percorre todos os input do formulário
        $('input', form).each(function(){
            // Pega o name do input atual do laço
            nome = $(this).attr('name');
            // Adiciona um objeto com o name do formulário e o seu valor
            dados[nome] = $(this).val();
        });

        // Envia os dados com o método post do jQuery
        $.post(link, {
            dados:dados
        }, function(resposta){
            if(resposta == true){
                // Limpa os inputs
                $('input', form).val('');
                // Se a resposta for true, alerta a mensagem de envio
                alert(mensagem);
            }else {
                // Se não, mostra a mensagem de erro que veio na resposta
                alert(resposta);
            }
        });
        return false;s
    });

});
