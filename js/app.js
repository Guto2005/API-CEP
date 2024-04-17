document.querySelector('#cep').addEventListener('blur', async (event) => {

    event.preventDefault()

    let cep = document.querySelector('#cep').value;

    if (cep !== '') {
        let result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
        let json = await result.json();

        if (result.status === 200) {
            showCep({
                uf: json.uf,
                localidade: json.localidade,
                logradouro: json.logradouro,
                bairro: json.bairro,
            });
        }
    }
});

function showCep(json) {
    document.querySelector('#uf').value = `${json.uf}`;
    document.querySelector('#cidade').value = `${json.localidade}`;
    document.querySelector('#logradouro').value = `${json.logradouro}`;
    document.querySelector('#bairro').value = `${json.bairro}`;
}


