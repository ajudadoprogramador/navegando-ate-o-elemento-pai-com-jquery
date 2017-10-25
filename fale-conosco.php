<?php
    // Pega os valores
    $nome = $_POST['dados']['nome'];
    $email = $_POST['dados']['email'];
    $telefone = $_POST['dados']['telefone'];

    // Valida os dados
    if(empty($nome)):
        echo 'O campo nome é obrigatório.';
    elseif(empty($email)):
        echo 'O campo email é obrigatório.';
    elseif(empty($telefone)):
        echo 'O campo telefone é obrigatório.';
    else:
        // Retorna true
        echo true;
    endif;
