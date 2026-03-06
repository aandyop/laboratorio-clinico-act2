const form = document.getElementById('valores-form');
const tableBody = document.querySelector('#valores-table tbody');

async function cargarValores() {
    const res = await fetch('/api/valores-referencia');
    const valores = await res.json();
    
    tableBody.innerHTML = '';
    valores.forEach(v => {
        tableBody.innerHTML += `
            <tr>
                <td>${v.nombre_examen}</td>
                <td>${v.valor_minimo} - ${v.valor_maximo}</td>
                <td>${v.unidad}</td>
            </tr>
        `;
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = {
        nombre_examen: document.getElementById('nombre_examen').value,
        valor_minimo: document.getElementById('valor_minimo').value,
        valor_maximo: document.getElementById('valor_maximo').value,
        unidad: document.getElementById('unidad').value
    };

    const response = await fetch('/api/valores-referencia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    if (response.ok) {
        alert("Rango guardado correctamente");
        form.reset();
        cargarValores();
    }
});

cargarValores();