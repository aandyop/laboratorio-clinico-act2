const form = document.getElementById('inventario-form');
const tableBody = document.querySelector('#inventario-table tbody');

async function cargarInventario() {
    const res = await fetch('/api/inventario');
    const items = await res.json();
    
    tableBody.innerHTML = '';
    items.forEach(item => {
        const status = item.cantidad_stock < 10 ? '⚠️ Bajo' : '✅ OK';
        
        tableBody.innerHTML += `
            <tr>
                <td>${item.nombre_insumo}</td>
                <td>${item.cantidad_stock}</td>
                <td>${item.unidad_medida}</td>
                <td>${new Date(item.fecha_vencimiento).toLocaleDateString()}</td>
                <td>${status}</td>
            </tr>
        `;
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const datos = {
        nombre_insumo: document.getElementById('nombre_insumo').value,
        cantidad_stock: document.getElementById('cantidad_stock').value,
        unidad_medida: document.getElementById('unidad_medida').value,
        fecha_vencimiento: document.getElementById('fecha_vencimiento').value
    };

    const response = await fetch('/api/inventario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    if (response.ok) {
        alert("Insumo agregado con éxito");
        form.reset();
        cargarInventario();
    }
});

cargarInventario();