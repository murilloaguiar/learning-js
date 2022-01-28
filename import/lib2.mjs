export function getEnderecoByCEP(CEP){
    //retornando uma promise com base no método fetch
    return fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(response => response.json())
}