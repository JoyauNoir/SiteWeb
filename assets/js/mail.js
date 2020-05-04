    <script language="javascript">    function send_mail_java()
        {
    chaine_mail = "mailto:info@joyau-noir.fr?Subject=ContactJN &Cc="+document.send_mail.sender_email.value+"&body=Votre message:+ %0A%0D 2eme ligne ";   
    chaine_mail += "&body=";
    chaine_mail +=  "&body=NOM  : "  + document.send_mail.sender_name.value ;
    chaine_mail += " Message : " + document.send_mail.sender_message.value ;
    document.send_mail.action=chaine_mail;
    document.send_mail.submit(); 
    }
    </script>