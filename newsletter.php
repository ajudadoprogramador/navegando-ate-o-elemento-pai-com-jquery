<?php
    // Pega os valores
    $email = $_POST['dados']['email'];

    // Valida os dados
    if(empty($email)):
        echo 'O campo e-mail é obrigatório.';
    else:
        // Retorna true
        echo true;
    endif;
