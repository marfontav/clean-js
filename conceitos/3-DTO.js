function calcularTotalPedido(precoUnitario, quantidade){
    return precoUnitario * quantidade;
}

const totalPedido1 = calcularTotalPedido(20, 3);

function calcularTotal({ precoUnitario, quantidade}){
    return precoUnitario * quantidade
}

const totalPedido2 = calcularTotal({
    precoUnitario: 20,
    quantidade: 3
});

const pedidoDTO = {
    precoUnitario: 20,
    quantidade: 3
};

const totalPedido3 = calcularTotal(pedidoDTO);

console.log(totalPedido1);
console.log(totalPedido2);
console.log(totalPedido3);