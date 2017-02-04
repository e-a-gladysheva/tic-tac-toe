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
        if (this.getWinner() == null && this.noMoreTurns() == true) return true;
        return false;
    }


    isFinished() {
        if (this.isDraw() == true || this.getWinner() != null) return true;
        return false;
    }

    getWinner() {
        for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
            var count_x = 0;
            var count_o = 0;

            for(var colIndex = 0; colIndex < 3; colIndex++){
                if (this.getFieldValue(rowIndex, colIndex) == 'x') count_x++;
                if (this.getFieldValue(rowIndex, colIndex) == 'o') count_o++;
            }

            if (count_x == 3)  return 'x';
            if (count_o == 3) return 'o';
        }

        for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
            var count_x = 0;
            var count_o = 0;

            for(var colIndex = 0; colIndex < 3; colIndex++){
                if (this.getFieldValue(colIndex, rowIndex) == 'x') count_x++;
                if (this.getFieldValue(colIndex, rowIndex) == 'o') count_o++;
            }

            if (count_x == 3)  return 'x';
            if (count_o == 3) return 'o';
        }

        var count_x = 0;
        var count_o = 0;
        for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
            if (this.getFieldValue(rowIndex, rowIndex) == 'x') count_x++;
            if (this.getFieldValue(rowIndex, rowIndex) == 'o') count_o++;
        }        
        if (count_x == 3)  return 'x';
        if (count_o == 3) return 'o';

        var count_x = 0;
        var count_o = 0;
        for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
            if (this.getFieldValue(rowIndex, 2 - rowIndex) == 'x') count_x++;
            if (this.getFieldValue(rowIndex, 2 - rowIndex) == 'o') count_o++;
        }        
        if (count_x == 3)  return 'x';
        if (count_o == 3) return 'o';

        return null;
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
