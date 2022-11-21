<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Formulário elaborado</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>

<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST"){


    if (empty($_POST["nome"]) || !preg_match("/^[a-zA-Z][a-zA-Z-_\.]{1,20}$/",$_POST['nome']) ){
        echo '<div class="resp">Nome de usuário inválido ou não preenchido.</div>';
    }

    if (empty($_POST["tel"]) || !preg_match("^\(+[0-9]{2,3}\) [0-9]{5}-[0-9]{4}$^",$_POST['tel']) ){
        echo '<div class="resp">Numero de telefone invalido ou não preenchido.</div>';
    }

    if (empty($_POST["ip"]) || !preg_match("/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/",$_POST['ip']) ){
        echo '<div class="resp">IP não preenchido ou invalido.</div>';
    }

   
    if (empty($_POST["nasc"]) || time() < strtotime('+18 years', strtotime($_POST['nasc']) )) {
        echo '<div class="resp">Idade não preenchida ou -18.</div>';
    }
    if(empty($_POST["email"]) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
        echo '<div class="resp">Email inválido ou não preenchido.</div>';
    }

    if ( time() < strtotime('+18 years', strtotime($_POST['nasc']) ) ) {
        echo '<div class="resp">É necessário ser maior de 18 anos.</div>';
    }

    if(!isset($_POST["lic"])){
        echo '<div class="resp">É necessário aceitar os termos de uso e a política de privacidade.</div>';
    }
    
   




    

}?>

<h1>Formulário</h1>

<form action="<?=htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post" id="formcad">
<label for="nome">Nome completo:</label>                <input type="text" name="nome" id="nome" value="<?=htmlspecialchars(isset($_POST['nome'])?$_POST['nome']:'');?>"/>
    <label for="tel">Telefone celular:</label>	            <input type="tel" name="tel" id="tel" value="<?=htmlspecialchars(isset($_POST['tel'])?$_POST['tel']:'');?>"/>       
    <label for="email">E-mail:</label>	                    <input type="email" name="email" id="email"  value="<?=htmlspecialchars(isset($_POST['email'])?$_POST['email']:'');?>"/>   
    <label for="ip1">Endereço IP de algo:</label>           <input type="text" name="ip" id="ip" value="<?=htmlspecialchars(isset($_POST['ip'])?$_POST['ip']:'');?>"/>
    <label for="qtd1">Quantidade inteira de algo:</label>   <input type="number" name="qtd1" id="qtd1" value="<?=htmlspecialchars(isset($_POST['qtd1'])?$_POST['qtd1']:'');?>"/>     

    <label for="nasc">Data de nascimento:</label>           <input type="date" name="nasc" id="nasc" value="<?=htmlspecialchars(isset($_POST['nasc'])?$_POST['nasc']:'');?>"/>
    <label for="clk3">Semana de algo:</label>               <input type="week" name="clk3" id="clk3" value="<?=htmlspecialchars(isset($_POST['clk3'])?$_POST['clk3']:'');?>"/>

    <label for="cor">Cor de algo:</label>                   <input type="color" name="cor" id="cor" value="<?=htmlspecialchars(isset($_POST['cor'])?$_POST['cor']:'');?>"/>
        
    <label>Seletor de rádio de algo</label>
        <label for="gen">Opção 1                                <input type="radio" name="gen" value="op1" id="op1" <?php if(isset($_POST['gen']) && $_POST['gen'] == 'op1'):?>checked<?php endif?>/></label>
        <label for="gen">Opção 2                                <input type="radio" name="gen" value="op2" id="op2" <?php if(isset($_POST['gen']) && $_POST['gen'] == 'op2'):?>checked<?php endif?>></label>  
        <label for="gen">Opção 3                                <input type="radio" name="gen" value="op3" id="op3" <?php if(isset($_POST['gen']) && $_POST['gen'] == 'op3'):?>checked<?php endif?>/></label> 
    
    <label for="lic">Aceito algo:</label>                   <input type="checkbox" name="lic" id="lic"/>

    <input type="reset" value="❌ Limpar" id="botao"/>      <p>           <input type="submit" value="✔️ Enviar" id="botao"/>
</form>
</div>
	
</body>

</html>