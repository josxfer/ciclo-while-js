let opcion = parseInt(prompt("Ingresa el número del ejercicio que deseas realizar (Del 1 al 5):"));
if (opcion === 1) {
    let number = parseInt(prompt("Ingresa un número para mostarte los multiplos de 5:"));
    let i = 1;
    console.log(i)
    while (i <= number) {
        if (i % 5 === 0) {
            console.log(`${i} `)
        }
        i++
    }
}else if (opcion === 2) {
        let number1 = parseInt(prompt("Ingresa un número entre 1 y 50:"));
        let number2 = parseInt(prompt("Ingresa otro número entre 1 y 50:"));
        let i = 1;
        while (i <= 50) {
            if (i != number1 && i != number2) {
                console.log(i)
            }else{
                console.log(`${i} ¡Lotería!`)
            }
            i++
        }
}else if (opcion === 3) {
    let number = parseInt(prompt("Ingresa un número para guardar en el array, para finalizar presiona 0"));
    const numbersArray = [];
    while (number != 0) {
        if (!isNaN(number)) {
            numbersArray.push(number);
        }
        number = parseInt(prompt("Ingresa un número para guardar en el array, para finalizar presiona 0"));
    }
    console.log(numbersArray)
}else if (opcion === 4) {
    let words = prompt("Ingresa una letra o palabra, para finalizar no escribas nada y presiona enter");
    let frase = "";
    while (words != "") {
        frase = (`${frase} ${words}`);
        words = prompt("Ingresa una letra o palabra, fara finalizar no escribas nada y presiona enter");        
    }
    console.log(frase);
}else if (opcion === 5) {
    let dia = prompt("Escribe un día de la semana:");
    dia = dia.toUpperCase();
    let validacion = true;
    while (validacion) {
        if (dia === "LUNES") {
            alert("¡A trabajar vago!");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }else if (dia === "MARTES") {
            alert("¡Estudie vago!");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }else if (dia === "MIERCOLES") {
            alert("¡Haga algo vagoooo!");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }else if (dia === "JUEVES") {
            alert("Yo no lo crié");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }else if (dia === "VIERNES") {
            alert("Sólo piensa en rumba, vagoooo");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }else if (dia === "SABADO") {
            alert("Sí, hoy tambien se trabaja");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }else if (dia === "DOMINGO") {
            alert("Ve a descansar");
            validacion = false;
        }else{
            alert("Escribe bien");
            dia = prompt("Ingresa un día de la semana:");
            dia = dia.toUpperCase();
        }
    }
}
    else{
    console.log("Ingresa una opción válida");
}