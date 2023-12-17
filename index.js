// Función para ordenar las filas de las tablas de horarios
function sortTable(tableId, columnIndex, ascending) {
    const table = document.getElementById(tableId);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent;
        const cellB = b.cells[columnIndex].textContent;
        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    tbody.innerHTML = '';
    rows.forEach(row => {
        tbody.appendChild(row);
    });
}

// Agregar eventos a los iconos de flechas para ordenar las tablas
document.addEventListener('DOMContentLoaded', function () {
    const arrowUp = document.querySelectorAll('.fa-arrow-up');
    const arrowDown = document.querySelectorAll('.fa-arrow-down');
    
    arrowUp.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const tableId = arrow.getAttribute('data-table');
            const columnIndex = parseInt(arrow.getAttribute('data-column'));
            sortTable(tableId, columnIndex, true);
        });
    });

    arrowDown.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const tableId = arrow.getAttribute('data-table');
            const columnIndex = parseInt(arrow.getAttribute('data-column'));
            sortTable(tableId, columnIndex, false);
        });
    });
});
