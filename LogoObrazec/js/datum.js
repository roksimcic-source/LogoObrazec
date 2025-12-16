// ---------------- DATUM POPRAVLJANJE ----------------

// POLJA
const dan = document.getElementById("dan");
const mesec = document.getElementById("mesec");
const leto = document.getElementById("leto");

// Funkcija: preveri prestopno leto
function jePrestopno(leto) {
    return (leto % 4 === 0 && leto % 100 !== 0) || (leto % 400 === 0);
}

// Funkcija: vrne max dni v mesecu
function maxDni(mesec, leto) {
    const m = mesec.toLowerCase();

    if (["januar","marec","maj","julij","avgust","oktober","december"].includes(m))
        return 31;

    if (["april","junij","september","november"].includes(m))
        return 30;

    if (m === "februar")
        return jePrestopno(leto) ? 29 : 28;

    return 31;
}

// Funkcija: popravi dan, če je izven obsega
function popraviDan() {
    let d = parseInt(dan.value) || 1;
    let m = mesec.value;
    let y = parseInt(leto.value) || 2000;

    let max = maxDni(m, y);

    if (d < 1) d = 1;
    if (d > max) d = max;

    dan.value = d;
}

// Event listeners
dan.addEventListener("input", popraviDan);
mesec.addEventListener("change", popraviDan);
leto.addEventListener("input", popraviDan);

// -----------------------------------------------------
