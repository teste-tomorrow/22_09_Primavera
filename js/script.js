// Esta é a função que será chamada quando o botão for clicado para calcular a potência.
function potencia() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA
    let baseString = document.getElementById('valor1').value;
    let expoenteString = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO
    let base = parseFloat(baseString);
    let expoente = parseFloat(expoenteString);

    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS
    if (isNaN(base) || isNaN(expoente)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 4. REALIZAR O CÁLCULO DA POTÊNCIA
    // Usamos a função Math.pow() para calcular a potência.
    let resultadoPotencia = Math.pow(base, expoente);

    // 5. EXIBIR O RESULTADO NA PÁGINA
    document.getElementById('resultado').innerHTML = `O resultado da potência é: ${resultadoPotencia}`;
}
