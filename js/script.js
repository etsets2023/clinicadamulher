let doutora = document.querySelector('#doutora');

//EVENTO QUANDO MOUSE ESTIVER POR CIMA DA IMAGEM
doutora.addEventListener('mouseover', function(){
    doutora.src = '../img/doutora2-removebg-preview.png'
})

//EVENTO QUANDO MOUSE SAIR DE CIMA DA IMAGEM
doutora.addEventListener('mouseout', function(){
    doutora.src = '../img/doutora-removebg-preview.png'
})