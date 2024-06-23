// calculateAge.js

function calculateAge(birthdate) {
    try {
        const trimmedBirthdate = birthdate.trim();

        // Verifica que la cadena esté en el formato correcto "YYYY/MM/DD"
        const dateParts = trimmedBirthdate.split('/');
        if (dateParts.length !== 3) {
            throw new Error('Formato de fecha inválido. Debe ser "YYYY/MM/DD".');
        }

        const year = parseInt(dateParts[0], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Restamos 1 porque los meses en JavaScript son de 0 a 11
        const day = parseInt(dateParts[2], 10);

        // Crea el objeto Date
        const birthDate = new Date(year, month, day);
        console.log('Depuración - birthDate:', birthDate);

        // Verifica si birthDate es una fecha válida
        if (isNaN(birthDate.getTime())) {
            throw new Error('Fecha de nacimiento inválida.');
        }

        // Obtiene la fecha de hoy
        const today = new Date();
        console.log('Depuración - today:', today);

        // Calcula la edad
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();


        // Ajusta la edad si el mes actual es antes del mes de nacimiento
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    } catch (error) {
        console.error('Error en la función calculateAge:', error);
        return null; // Manejo de error: retorna null o manejo específico según la aplicación
    }
}

export { calculateAge };
