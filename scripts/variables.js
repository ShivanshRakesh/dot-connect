var red = 'rgb(255, 80, 0)', blue = 'rgb(0, 160, 255)', yellow = 'rgb(255, 195, 0)', green = 'rgb(0, 240, 160)';

var player1 = {
  name: "Player-1",
  win_color: 'rgb(80, 10, 10)',
  color: red,
  bg_name: '#bg-red',
  can_undo: true
};

var player2 = {
  name: "Player-2",
  win_color: 'rgb(10, 10, 50)',
  color: blue,
  bg_name: '#bg-blue',
  can_undo: true
};

var player3 = {
  name: "Player-3",
  win_color: 'rgb(255, 100, 0)',
  color: yellow,
  bg_name: '#bg-yellow',
  can_undo: true
};

var player4 = {
  name: "Player-4",
  win_color: 'rgb(60, 150, 60)',
  color: green,
  bg_name: '#bg-green',
  can_undo: true
};

var players = [player1, player2, player3, player4];
var curr_player = 0, prev_player = -1, game_over = false, validClick = false;
var col_clicked, row_clicked, num_clicks = 0;
var req_len = 4, num_players = 2;     //DEFAULT
var prev_move = [-1, -1];   //ROW, COLULMN

var grid_arr = [], first_empty = [];
for (i = 0; i < window.TABLE_SIZE[0]; i++) {
  const tmp = [];
  for (let j = 0; j < window.TABLE_SIZE[1]; j++)
    tmp.push('none');
  grid_arr.push(tmp);
}

for (i = 0; i < window.TABLE_SIZE[1]; i++) {
  first_empty.push(window.TABLE_SIZE[0] - 1);
}
