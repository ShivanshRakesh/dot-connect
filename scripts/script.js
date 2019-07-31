$('tr').click(function () {
  row_clicked = $(this).index();
});

$('.col').click(function () {
  col_clicked = $(this).index();
  validClick = true;
});

document.addEventListener("click", function () {
  if (validClick) {
    if (num_clicks == 0) {
      $('body').css('background-image', 'linear-gradient(0deg, rgb(0, 0, 0), rgb(0, 0, 0))');
    }
    if (!game_over && first_empty[col_clicked] >= 0) {
      chng_colors();
      grid_arr[first_empty[col_clicked]][col_clicked] = players[curr_player].color;
      if (check_win(first_empty[col_clicked], col_clicked)) { game_over = true; }
      curr_player = (curr_player + 1) % num_players;
      first_empty[col_clicked]--;
      num_clicks++;
    }
    if (num_clicks == window.TABLE_SIZE[0] * window.TABLE_SIZE[1]) {
      for (i = 0; i < num_players; i++) { $(players[curr_player].bg_name).css('opacity', '0'); }
      $('.navbar-left').text("DRAW");
      game_over = true;
    }
    validClick = false;
  }
});

function start_new() {
  reset();
  req_len = $('#req-dots').find('option:selected').attr('value');
  num = $('#num-players').find('option:selected').attr('value');
  if (num == "2") { num_players = 2; }
  if (num == "3") { num_players = 3; }
  if (num == "4") { num_players = 4; }
  open_options();
}

function open_options() {
  $('.options').slideToggle(400, 'swing');
  $('.info').slideUp();
  if ($('.navbar-left').text() != "INSTRUCTIONS")
    $('.navbar-left').text("DOT CONNECT");
}

function show_info() {
  $('.info').slideToggle(400, 'swing');
  var header = $('.navbar-left');
  if (header.text() == "INSTRUCTIONS")
    header.text("DOT CONNECT");
  else
    header.text("INSTRUCTIONS");
}

function chng_colors() {
  for (i = 0; i < num_players; i++) { $(players[curr_player].bg_name).css('opacity', '0'); }
  $(players[(curr_player + 1) % num_players].bg_name).css('opacity', '1');

  switch (num_players) {
    case 2:
      $('#bg-red').css('background-image', 'linear-gradient(-90deg, rgb(255, 0, 0), rgb(0, 0, 0))');
      $('#bg-blue').css('background-image', 'linear-gradient(90deg, rgb(0, 0, 255), rgb(0, 0, 0))');
      break;

    case 3:
      $('#bg-red').css('background-image', 'linear-gradient(-60deg, rgb(0, 0, 0), rgb(255, 0, 0))');
      $('#bg-blue').css('background-image', 'linear-gradient(60deg, rgb(0, 0, 0), rgb(0, 0, 255))');
      $('#bg-yellow').css('background-image', 'linear-gradient(0deg, rgb(0, 0, 0), rgb(255, 180, 0))');
      break;

    case 4:
      $('#bg-red').css('background-image', 'linear-gradient(-45deg, rgb(255, 0, 0), rgb(0, 0, 0))');
      $('#bg-blue').css('background-image', 'linear-gradient(45deg, rgb(0, 0, 0), rgb(0, 0, 255))');
      $('#bg-yellow').css('background-image', 'linear-gradient(-45deg, rgb(0, 0, 0), rgb(255, 180, 0))');
      $('#bg-green').css('background-image', 'linear-gradient(45deg, rgb(0, 180, 0), rgb(0, 0, 0))');
      break;
  }

  $('#grid tr').eq(first_empty[col_clicked]).find('td').eq(col_clicked).find('button').css("background-color", players[curr_player].color);
  $('#grid tr').eq(first_empty[col_clicked]).find('td').eq(col_clicked).find('button').css("border-color", players[curr_player].color);
}