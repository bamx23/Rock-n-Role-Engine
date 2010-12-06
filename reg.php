<?php
function CheckUser($uname, $prefix)
{
    $sql = mysql_query("SELECT * from ".$prefix."users WHERE login = '".$uname."';") or die(mysql_error());
    if($sql)
    {
        $rec = mysql_fetch_array($sql);
        return (@$rec['login'] != NULL);
    }
}

function CheckEmail($mail, $prefix)
{
    $sql = mysql_query("SELECT * from ".$prefix."users WHERE email = '".$mail."';") or die(mysql_error());
    if($sql)
    {
        $rec = mysql_fetch_array($sql);
        return (@$rec['email'] != NULL);
    }
}

function Reg()
{
    
}


if($_POST['do_reg'])
{
    include('core/base.php');
    switch($_POST['do_reg'])
    {
        case 'check_user':
            $res['data'] = CheckUser($_POST['uname'], $dbprefix);
        break;
        case 'check_email':
            $res['data'] = CheckEmail($_POST['mail'], $dbprefix);
        break;
        case 'reg':
            $res['data'] = Reg();
        break;
    }
    echo json_encode($res);
    exit(0);
}
?>
        <div id="div_reg">
            <form method="post" title="Регистрация">
            <pre>Логин:         <input id="reg_login" type="text"/>  <err id = "reg_login_err"></err><br /></pre>
            <pre>Пароль:        <input id="reg_pass" type="password"/>  <err id = "reg_pass_err"></err><br /></pre>
            <pre>Повторите:     <input id="reg_pass_re" type="password"/>  <err id = "reg_pass_re_err"></err><br /></pre>
            <br />
            <pre>Имя:           <input id="reg_name" type="text"/>  <err id = "reg_name_err"></err><br /></pre>
            <pre>Фамилия:       <input id="reg_sname" type="text"/>  <err id = "reg_sname_err"></err><br /></pre>
            <pre>E-mail:        <input id="reg_email" type="text"/>  <err id = "reg_email_err"></err><br /></pre>
            <pre>Телефон:       <input id="reg_phone" type="password"/>  <err id = "reg_phone_err"></err><br /></pre>
            <input id="reg_button" type="submit" value="Регистрация"/><input type="reset" value="Отчистить"/>
            </form>
        </div>
        <div id="dialog"></div>
        <script type="text/javascript" src="core/reg.js"></script>