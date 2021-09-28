const alumnos = [
    {nombre: 'Juan Gomez', nota: 7},
    {nombre: 'Pedro Rodriguez', nota: 4},
    {nombre: 'Roxana García', nota: 8}, 
    {nombre: 'Luciano Lopez', nota: 5}, 
    {nombre: 'Fernanda Gimenez', nota: 6}, 
    {nombre: 'Florencia Martinez', nota: 10}, 
    {nombre: 'Raúl Sanchez', nota: 7}, 
    {nombre: 'Sandra Figueroa', nota: 8}
]

const tabla = document.querySelector('.students');

const aprobados = alumnos.filter((alumno) => alumno.nota >= 7);

aprobados.forEach((aprobado) => {
    const nombre = document.createElement('td');
    nombre.classList.add('students-name');
    nombre.textContent = aprobado.nombre;

    const nota = document.createElement('td');
    nota.classList.add('students-value');
    nota.textContent = aprobado.nota;

    const fila = document.createElement('tr');
    fila.appendChild(nombre);
    fila.appendChild(nota);

    tabla.appendChild(fila);
})