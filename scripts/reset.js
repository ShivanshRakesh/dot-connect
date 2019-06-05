$("#dialog").dialog({
    autoOpen: false,
    resizable: false,
    width: "400px",
    buttons: {
        YES: function () {
            reset();
            $(this).dialog("close");
        },
        NO: function () {
            $(this).dialog("close");
        }
    }
});

function reset() {
    for (i = 0; i < num_players; i++) { $(players[curr_player].bg_name).css('opacity', '0'); }
    $('#bg-winner').css('background-color', 'transparent');
    $('button').css("background-color", 'rgb(230, 230, 230)');
    $('button').css("border-color", 'rgb(0, 0, 0, 0.3)');
    $('body').css('background-image', 'linear-gradient(-90deg, red, blue)')
    $('body').css('background-color', 'transparent');
    $('.navbar-left').removeClass('bg-dark');
    $('.navbar-left').html("DOT CONNECT");
    curr_player = 0, game_over = false, validClick = false;
    col_clicked, row_clicked, num_clicks = 0;
    for (i = 0; i < rows; i++) {
        first_empty[i] = rows - 1;
        grid_arr[i] = ['none', 'none', 'none', 'none', 'none', 'none'];
    }
}
