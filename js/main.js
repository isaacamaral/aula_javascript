function abrirPopup() {
    document.querySelector(".popup").style.display = 'block';
}

function fecharPopup() {
    document.querySelector(".popup").style.display = 'none';
}


// Código para fechar o popup ao clicar fora dele em qualquer local da página
$(document).mouseup(function(e) 
{
    var container = $(".popup");

    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});