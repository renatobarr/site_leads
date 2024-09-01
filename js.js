function teste(){
    
    var button = document.getElementById('start');
    button.classList.remove('pulse');
    void button.offsetWidth;
    button.classList.add('pulse');
    
    setTimeout(function() {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var cell = document.getElementById('celular').value;

        if(! nome || ! email || ! cell){
            alert('Informações faltando ou inválidas!');

        }else{
            alert('Dados Enviados! Entraremos em conto em breve! Obrigado!');
        }

        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('celular').value = "";
    }, 500);
    
}

