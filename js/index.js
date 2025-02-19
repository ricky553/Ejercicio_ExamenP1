function calcular(){
    let subtotal = 0
    for(let i = 1; i<=5; i++){
        let input = document.getElementById(`producto${i}`);
        let valor = parseFloat(input.value);

        if(isNaN(valor) || valor === ""){
            Swal.fire("Todos los campos deben estar llenos");
            return;
        }
        subtotal += valor
    }

    let porcentaje = subtotal >= 13000 ? 40 : subtotal >=9000 ? 30 : subtotal >= 5000 ? 20 : subtotal >= 1000 ? 10 : 0
    let descuento = (subtotal * porcentaje) / 100
    let total = subtotal - descuento

    document.getElementById(`subtotal`).value = subtotal.toFixed(2)
    document.getElementById(`descuento`).value = descuento.toFixed(2)
    document.getElementById(`labeldescuento`).innerText = `descuento ${porcentaje}%`
    document.getElementById(`total`).value = total.toFixed(2)
}

function limpiar() {
    for (let i= 1; i <= 5; i++){
        document.getElementById(`producto${i}`).value = ""
    }
    
    document.getElementById(`subtotal`).value = ''
    document.getElementById(`descuento`).value = ''
    document.getElementById(`labeldescuento`).innerText = 'Descuento 0%'
    document.getElementById(`total`).value = ''
}