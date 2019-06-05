function check_win(row, col) {
    var win = false;
    if (diag1_check(row, col) >= req_len) { win = true; }
    else if (diag2_check(row, col) >= req_len) { win = true; }
    else if (row_check(row, col) >= req_len) { win = true; }
    else if (col_check(row, col) >= req_len) { win = true; }

    if (win) {
        $('#bg-winner').css('background-color', players[curr_player].win_color);
        $('#bg-red').css('opacity', '0');
        $('#bg-blue').css('opacity', '0');
        $('#bg-yellow').css('opacity', '0');
        $('#bg-green').css('opacity', '0');
        $('.navbar-left').html("<span style='color:" + players[curr_player].color + "'>" + players[curr_player].name.toUpperCase() + "</span> WINS!!");
        $('.navbar-left').addClass('bg-dark');
    }
    return win;
}

function diag1_check(row, col) {
    var cnt = 0, tmpRow = row - 1, tmpCol = col - 1;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpRow--; tmpCol--; cnt++; }
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { row++; col++; cnt++; }
    return cnt;
}

function diag2_check(row, col) {
    var cnt = 0, tmpRow = row - 1, tmpCol = col + 1;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpRow--; tmpCol++; cnt++; }
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { row++; col--; cnt++; }
    return cnt;
}

function row_check(row, col) {
    var cnt = 0, tmpRow = row - 1, tmpCol = col;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpRow--; cnt++; }
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { row++; cnt++; }
    return cnt;
}

function col_check(row, col) {
    var cnt = 0, tmpRow = row, tmpCol = col - 1;
    while (isValid(tmpRow, tmpCol) && grid_arr[tmpRow][tmpCol] == players[curr_player].color) { tmpCol--; cnt++; }
    while (isValid(row, col) && grid_arr[row][col] == players[curr_player].color) { col++; cnt++; }
    return cnt;
}

function isValid(row, col) {
    if (row >= rows || row < 0) { return false; }
    if (col >= cols || col < 0) { return false; }
    return true;
}