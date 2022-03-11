function createTable(rows, columns) {
    const body = document.querySelector('body'), table = document.createElement('table'), tBody = document.createElement('tbody');
    let count = 0;
    function createCells(row) {
        for (let i = 0; i < columns; i++) {
            const cell = document.createElement('td'); // Create cells for row     
            count++;     
            cell.style = 'text-align:center;';     
            cell.innerHTML = count;     
            row.appendChild(cell);   
        } 
    };
    
    function createRows() {
            for (let i = 0; i < rows; i++) {
                const row = document.createElement('tr'); // Create row     
                createCells(row);     
                tBody.appendChild(row);   
            } };


    createRows(); 
    table.appendChild(tBody); // Add table body to table. 
    body.appendChild(table); // Add table to document body. 
    table.setAttribute('border', '1'); 
    table.setAttribute('width', '300'); 
    table.setAttribute('height', '200');};
    createTable(4, 3); // Create a table of 4 rows and 3 columns



