$('#Navi-Ls').hide()

$('#Navi-Btn-Menu').click(function(){
    $(this).hide();
    $('#Navi-Btn-Close').show();
    $('#Navi-Ls').slideDown(500)
})
$('#Navi-Btn-Close').click(function(){
    $(this).hide();
    $('#Navi-Btn-Menu').show();
    $('#Navi-Ls').slideUp(500)
})