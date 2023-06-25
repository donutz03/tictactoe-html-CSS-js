// Obținem toate celulele din tabla de joc
const cells = document.querySelectorAll('.cell');

// Simbolurile pentru X și O
const symbols = ['X', 'O'];

// Simbolul curent
let currentSymbol = symbols[0];

// Adăugăm evenimentul de click pe fiecare celulă
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Dacă celula este goală, adăugăm simbolul curent
        if (!cell.textContent) {
            cell.textContent = currentSymbol;
            
            // Verificăm dacă avem un câștigător
            if (checkWin()) {
                alert('Ai câștigat!');
                resetBoard();
                return;
            }
            
            // Schimbăm simbolul curent
            currentSymbol = currentSymbol === symbols[0] ? symbols[1] : symbols[0];
        }
    });
});

// Funcția pentru verificarea câștigătorului
function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linii orizontale
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Linii verticale
        [0, 4, 8], [2, 4, 6] // Linii diagonale
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent && cells[a].textContent !== '') {
            return true;
        }
    }

    return false;
}

// Funcția pentru resetarea tablei de joc
function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
}
