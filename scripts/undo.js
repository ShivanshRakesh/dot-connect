function undo() {
    if (game_over) {
        alert("Game has ended!");
    }
    else if(prev_player == -1){
        alert("No move registered!");
    }
    else if (players[prev_player].can_undo) {
        grid_arr[prev_move[0]][prev_move[1]] = 'none';
        $(players[curr_player].bg_name).css('opacity', '0');
        first_empty[col_clicked]++;
        $('#grid tr').eq(prev_move[0]).find('td').eq(prev_move[1]).find('button').css("background-color", 'rgb(230, 230, 230)');
        $('#grid tr').eq(prev_move[0]).find('td').eq(prev_move[1]).find('button').css("border-color", 'rgb(255, 255, 255, 0.1)');
        curr_player = prev_player;
        players[curr_player].can_undo = false;
        $(players[curr_player].bg_name).css('opacity', '1');
    }
    else {
        alert(players[prev_player].name + " has already used UNDO once!");
    }
}


// ENHANCEMENT:
//     - STORE PREVIOUS MOVE FOR EACH PLAYER SEPARATELY
//     - USE THAT FOR UNDO