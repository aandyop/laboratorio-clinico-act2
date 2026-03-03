const examenForm = document.getElementById('examen-form');
const selectPaciente = document.getElementById('paciente_id');
const tableBody = document.querySelector('#examenes-table tbody');

async function cargarSelectPacientes() {
    const res = await fetch('/api/pacientes');
    const pacientes = await res.json();
    pacientes.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.nombre;
        selectPaciente.appendChild(option);
    });
}

examenForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = {
        paciente_id: document.getElementById('paciente_id').value,
        tipo_examen: document.getElementById('tipo_examen').value,
        resultado: document.getElementById('resultado').value,
        fecha: document.getElementById('fecha').value
    };

    await fetch('/api/examenes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    examenForm.reset();
    alert("Examen registrado con éxito");
});

cargarSelectPacientes();