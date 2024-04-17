document,querySelector('#cep').addEventListener('blur', async(event) => {

    let cep = document.querySelector('#cep').value;
    
    let result = await fetch(`https://viacep.com.br/ws/01001000/json/`);
    
    let json = await result.json();
    
    if (json.erro != true) {
    
        showCep(json)
    } else if (json.erro === true) {
        
        alert ('CEP INVÁLIDO')
    }
    });
    
    function showCep(json) {
        document.querySelector('#uf').value = `${json.uf}`;
        document.querySelector('#cidade').value = `${json.localidade}`;
        document.querySelector('#logradouro').value = `${json.logradouro}`;
       document.querySelector('#bairro').value = `${json.bairro}`;
    }