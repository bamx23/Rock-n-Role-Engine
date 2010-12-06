$("#reg_login").change(function(){
   if($(this).attr('value').length > 0)
   {
        if($(this).attr('value').length < 4)
        {
            $("#reg_login").addClass('reg_err');
            $("#reg_login_err").html("Логин должен быть больше 3х символов");
            return;
        }
        else
        {
            $("#reg_login").removeClass('reg_err');
            $("#reg_login_err").html("");
        }
        var re = /(\s|^[^a-zA-Z].*|[^a-zA-z0-9_-]|.*[^a-zA-Z0-9]$)/;
        if(re.test($(this).attr('value')))
        {
            $("#reg_login").addClass('reg_err');
            $("#reg_login_err").html("Недопустимые символы");
            return;
        }
        else
        {
            $("#reg_login").removeClass('reg_err');
            $("#reg_login_err").html("");
        }
        $.ajax({
            url:'reg.php',
            data:{
                'do_reg': 'check_user',
                'uname': $("#reg_login").val()
            },
            type: "post",
            dataType: "json",
            success: function(json){
                if(json.data)
                {
                    $("#reg_login").addClass('reg_err');
                    $("#reg_login_err").html("Этот логин занят");
                }
                else
                {
                    $("#reg_login").removeClass('reg_err');
                    $("#reg_login_err").html("");
                }
            }
         })/**/
   }
   else
   {
        $("#reg_login").removeClass('reg_err');
        $("#reg_login_err").html("");
   }
})

$("#reg_pass").change(function (){
    if($(this).val().length <= 5)
    {
        $("#reg_pass").addClass('reg_err');
        $("#reg_pass_err").html("Пароль должен быть больше 5 символов");
    }
    else
    {
        $("#reg_pass").removeClass('reg_err');
        $("#reg_pass_err").html("");
    }
})

$("#reg_pass_re").change(function (){
    if($(this).val() != $("#reg_pass").val())
    {
        $("#reg_pass_re").addClass('reg_err');
        $("#reg_pass_re_err").html("Пароли не совпадают");
    }
    else
    {
        $("#reg_pass_re").removeClass('reg_err');
        $("#reg_pass_re_err").html("");
    }
})

$("#reg_button").click(function(){
    if(!$("#reg_name").val() || !$("#reg_sname").val() || !$("#reg_phone").val() 
    || !$("#reg_email").val() || !$("#reg_login").val() || !$("#reg_pass").val() 
    || !$("#reg_pass_re").val() || !$("#reg_capcha").val())
    {
        $('#dialog').attr("title", "Ошибка")
                    .html("<p>Вы ввели не все данные</p>")
                    .dialog({
                        modal: true
                        });
        return false;
    }
    else
        return true;
})

$("#reg_email").change(function(){
   if($(this).attr('value').length > 0)
   {
        var re = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*/;
        if(!re.test($(this).attr('value')))
        {
            $("#reg_email").addClass('reg_err');
            $("#reg_email_err").html("Некорректный email");
            return;
        }
        else
        {
            $("#reg_email").removeClass('reg_err');
            $("#reg_email_err").html("");
        }
        
        $.ajax({
            url:'reg.php',
            data:{
                'do_reg': 'check_email',
                'mail': $("#reg_email").val()
            },
            type: "post",
            dataType: "json",
            success: function(json){
                if(json.data)
                {
                    $("#reg_email").addClass('reg_err');
                    $("#reg_email_err").html("Этот email уже используется");
                }
                else
                {
                    $("#reg_email").removeClass('reg_err');
                    $("#reg_email_err").html("");
                }
            }
         })/**/
   }
   else
   {
        $("#reg_email").removeClass('reg_err');
        $("#reg_email_err").html("");
   }
})
