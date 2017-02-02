class TicTacToe {
    constructor() {
        this._currentPlayerSymbol = 'x'; 
        this.matrix = [];
        for(var rowIndex = 0; rowIndex < 3; rowIndex++){
            this.matrix.push([]);
            this.matrix[rowIndex].push(new Array(3));
            for(var colIndex = 0; colIndex < 3; colIndex++){
                this.matrix[rowIndex][colIndex] = null;
            }
        }

    }

    getCurrentPlayerSymbol() { 
        return this._currentPlayerSymbol;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
    
    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() != null) {return false;}
        if (this.noMoreTurns() == true) {return true;} 
        if (this.getWinner() == null) {return true;}
        else {return false;}
    }


    isFinished() {
        if (this.getWinner() != null) {return true;}
        if (this.isDraw() == true) {return true;}
        else {return false;}
    }

    getWinner() {
       

    }

    noMoreTurns() {
       for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
            for (var colIndex = 0; colIndex < 3; colIndex++) {
                if (this.getFieldValue(rowIndex, colIndex) == null) {
                    return false;
                }
            }
        }
        return true;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) == null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (this._currentPlayerSymbol == 'x') {
                this._currentPlayerSymbol = 'o';
            }
            else {
                this._currentPlayerSymbol = 'x';
            }
        }

    }

}

module.exports = TicTacToe;
