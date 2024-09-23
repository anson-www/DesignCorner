const $tabBtnLabel = $('.tab-button label');
const $tabAreaChild = $('.tab-area').children();

function clickAndShow (){
    $tabAreaChild.eq($(this).parent().index()).show().siblings().hide();
}

// navi ----------------------------------------
$('#Navi-Btn-Menu').click(function(){
    $(this).hide();
    $('#Navi-Btn-Close').show();
    $('#Navi-Ls').addClass('navi-ls-show')
})
$('#Navi-Btn-Close').click(function(){
    $(this).hide();
    $('#Navi-Btn-Menu').show();
    $('#Navi-Ls').removeClass('navi-ls-show');
})


// tab ------------------------------------------
$tabAreaChild.eq(0).show().siblings().hide();
$tabBtnLabel.click(clickAndShow);



