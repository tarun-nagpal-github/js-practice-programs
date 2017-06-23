/**
 * Print the chess board for a given length 
 * Pass the length as number 
 * 
 * @param { number } length 
 */
function chessBoard(length) {
    var board = "";
    for (i = 1; i <= length; i++) {
        for (j = 1; j <= length; j++) {
            if ((j + i) % 2 == 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        board += '\n';
    }
    console.log(board);
}
chessBoard(8);