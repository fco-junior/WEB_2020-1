export function alterarValor(novoValor){
    return{
        type: 'NOVO_VALOR',
        payload: novoValor
    }
}