
// Pridobi elemente
const form = document.getElementById('noviceForm');
const ime = document.getElementById('ime');
const priimek = document.getElementById('priimek');
const uporabnisko = document.getElementById('uporabnisko');
const email = document.getElementById('email');
const geslo = document.getElementById('geslo');
const geslo2 = document.getElementById('geslo2');
const dan = document.getElementById('dan');
const mesec = document.getElementById('mesec');
const leto = document.getElementById('leto');
const genderInputs = document.querySelectorAll('input[name="gender"]');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prepreči privzeti submit

    // Preveri ime
    if(ime.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka ime',
            text: 'Prosimo, vnesi svoje ime',
            confirmButtonColor: '#1ed760'
        });
        ime.focus();
        return;
    }

    // Preveri priimek
    if(priimek.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka priimek',
            text: 'Prosimo, vnesi svoj priimek',
            confirmButtonColor: '#1ed760'
        });
        priimek.focus();
        return;
    }

    // Preveri uporabniško ime
    if(uporabnisko.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka uporabniško ime',
            text: 'Prosimo, vnesi uporabniško ime',
            confirmButtonColor: '#1ed760'
        });
        uporabnisko.focus();
        return;
    }

    // Preveri email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email.value.trim())){
        Swal.fire({
            icon: 'error',
            title: 'Napačen email',
            text: 'Prosimo, vnesi veljaven email',
            confirmButtonColor: '#1ed760'
        });
        email.focus();
        return;
    }

    // Preveri geslo
    if(geslo.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka geslo',
            text: 'Prosimo, vnesi geslo',
            confirmButtonColor: '#1ed760'
        });
        geslo.focus();
        return;
    }

    // Preveri potrdi geslo
    if(geslo2.value.trim() === '' || geslo2.value !== geslo.value){
        Swal.fire({
            icon: 'error',
            title: 'Gesli se ne ujemata',
            text: 'Prosimo, ponovi geslo pravilno',
            confirmButtonColor: '#1ed760'
        });
        geslo2.focus();
        return;
    }

    // Preveri datum rojstva
    if(dan.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka dan',
            text: 'Prosimo, vnesi dan rojstva',
            confirmButtonColor: '#1ed760'
        });
        dan.focus();
        return;
    }

    if(mesec.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka mesec',
            text: 'Prosimo, izberi mesec rojstva',
            confirmButtonColor: '#1ed760'
        });
        mesec.focus();
        return;
    }

    if(leto.value.trim() === ''){
        Swal.fire({
            icon: 'error',
            title: 'Manjka leto',
            text: 'Prosimo, vnesi leto rojstva',
            confirmButtonColor: '#1ed760'
        });
        leto.focus();
        return;
    }

    // Preveri spol
    let genderSelected = false;
    genderInputs.forEach(input => { if(input.checked) genderSelected = true; });
    if(!genderSelected){
        Swal.fire({
            icon: 'error',
            title: 'Manjka spol',
            text: 'Prosimo, izberi spol',
            confirmButtonColor: '#1ed760'
        });
        return;
    }

    // Če je vse ok
    Swal.fire({
        icon: 'success',
        title: 'Registracija uspešna!',
        confirmButtonColor: '#1ed760'
    });
});
