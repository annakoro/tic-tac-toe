class TicTacToe {
    constructor() {
        var matrix[2][2];
        var current = 'x';
    }

    getCurrentPlayerSymbol() {
        if(current === 'o') return 'x';
        if(current === 'x') return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        matrix[rowIndex][columnIndex] = current;
        getCurrentPlayerSymbol();
        isFinished();
    }

    isFinished() {
        if(getWinner() || isDraw()) return true;
    }

    getWinner() {
        for (i = 0; i<3; i++) { //columns
            if(matrix[0][i]==matrix[1][i]==matrix[2][i]!= undefined) return matrix[0][i];
        }
        for (i = 0; i<3; i++) { //rows
            if(matrix[i][0]==matrix[i][1]==matrix[i][2]!= undefined) return matrix[i][0];
        }
            if(matrix[0][0]==matrix[1][1]==matrix[2][2]!= undefined) return matrix[0][0]; //diag
            if(matrix[0][2]==matrix[1][1]==matrix[2][0]!= undefined) return matrix[0][2]; //diag
        return null;
    }

    noMoreTurns() {
       var res = true;
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if (!matrix[i][j]) res = false;
            }
        }
       return res;
    }

    isDraw() {
        if(noMoreTurns() && getWinner() === null) return true;
    }

    getFieldValue(rowIndex, colIndex) {
        if(matrix[rowIndex][colIndex] === undefined) return null;
        else return matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
