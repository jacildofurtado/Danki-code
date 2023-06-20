$(function(){
    //Plugin social media
    $('#social-share').jsSocials({
        shares: ["twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    });

    //Plugin mask
    $('input[name=telefone]').mask('(99)99999-9999');
    $('input[name=data]').mask('99/99/9999');

    //Plugin Fancybox
    $('a').fancybox();
})