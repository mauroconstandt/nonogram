let trivial = [[0, 0, 0, 1, 1],
                [0, 0, 1, 1, 0],
                [0, 1, 1, 0, 0],
                [1, 1, 0, 0, 0],
                [1, 1, 1, 1, 1]];

let easy = [[0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
            [1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 0, 0, 0, 0]];

let intermediate = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
                    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
                    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
                    [0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
                    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];

let hard = [[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
            [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
            [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

let moves = [0];

let lives = [3];

let x_diff = [0];

window.onload = function(){
    start();
}

function start(){
    document.getElementById("big_container").innerHTML = '<div class="start_screen"><button onclick="difficulty_choose(trivial)">trivial</button><button onclick="difficulty_choose(easy)">easy</button><button onclick="difficulty_choose(intermediate)">intermediate</button><button onclick="difficulty_choose(hard)">hard</button></div>';
}

function fix_moves(){
    let fix_moves = [0];
    moves[0] = fix_moves[0];
}

function fix_lives(){
    let fix_lives = [3];
    lives[0] = fix_lives[0]
}

function fix_puzzle_trivial(){
    let fix_trivial = [[0, 0, 0, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1]];
    for(let i = 0; i<5; i++){
        for(let j = 0; j<5; j++){
            trivial[i][j] = fix_trivial[i][j];
        }
    }
}

function fix_puzzle_easy(){
    let fix_easy = [[0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0]];
    for(let i = 0; i<10; i++){
        for(let j = 0; j<10; j++){
            easy[i][j] = fix_easy[i][j];
        }
    }
}

function fix_puzzle_intermediate(){
    let fix_intermediate = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];
    for(let i = 0; i<10; i++){
        for(let j = 0; j<10; j++){
            intermediate[i][j] = fix_intermediate[i][j];
        }
    }
}

function fix_puzzle_hard(){
    let fix_hard = [[0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    for(let i = 0; i<15; i++){
        for(let j = 0; j<15; j++){
            hard[i][j] = fix_hard[i][j];
        }
    }
}

function fix_puzzles(){
    fix_puzzle_trivial();
    fix_puzzle_easy();
    fix_puzzle_intermediate();
    fix_puzzle_hard();
}
let timerInterval;

let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000); 
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    seconds++;
    document.getElementById("timer").innerHTML = `Timer: ${seconds}`;
}

function resetTimer() {
    stopTimer();
    seconds = -1;
    updateTimer();
}

function difficulty_choose(diff){
    fix_puzzles();
    fix_moves();
    fix_lives();
    document.getElementById("big_container").innerHTML = '<div class="stats"><div id="moves"></div><div id="timer"></div><div id="lives"></div></div>' + '<div id="nonogram"></div>' + '<div class="button_container"><div id="mode"></div><button class="choose_diff" onclick="start()">choose difficulty</button><button class="try_again" onclick="try_again()">try again</button></div>';
    lives_update();
    document.getElementById("nonogram").innerHTML = draw_puzzle(diff);
    document.getElementById("moves").innerHTML = 'Move counter: 0'
    document.getElementById("mode").innerHTML = '<button onclick="mode_swap()">color</button>';
    resetTimer();
    startTimer();
    if (diff == trivial){
        x_diff[0] = 0;
    }
    if (diff == easy){
        x_diff[0] = 1;
    }
    if (diff == intermediate){
        x_diff[0] = 2;
    }
    if (diff == hard){
        x_diff[0] = 3;
    }
}

function try_again(){
    let diff = puzzle_check();
    difficulty_choose(diff);
}

function mode_swap(){
    let mode_current = document.getElementById("mode").innerHTML;
    if (mode_current == '<button onclick="mode_swap()">color</button>'){
        document.getElementById("mode").innerHTML = '<button onclick="mode_swap()">no color</button>';
    } else {
        document.getElementById("mode").innerHTML = '<button onclick="mode_swap()">color</button>';
    }
}

function mode_check(){
    let mode_current = document.getElementById("mode").innerHTML
    if (mode_current == '<button onclick="mode_swap()">color</button>'){
        return 1;
    } else {
        return 0;
    }
}

function draw_puzzle(puzzle){
    let puzzle_html = generate_puzzle_html(puzzle);
    return puzzle_html;
}

function generate_col_values(puzzle){
    let result = '<table class="col_values"><tr><td class="corner"></td>';
    let comma_check = 0;
    for(let j = 0; j < puzzle[0].length; j++){
        let colvalues = '';
        let currentcount = 0;
        comma_check = 0;

        for(let i = 0; i < puzzle.length; i++){
            if (puzzle[i][j] == 1 || puzzle[i][j] == 2 || puzzle[i][j] == 4 || puzzle[i][j] == 5 || puzzle[i][j] == 6){
                currentcount++;
            } else if (currentcount > 0){
                if (comma_check == 0){
                    colvalues += currentcount;
                    comma_check +=1;
                    currentcount = 0;
                } else {
                colvalues += ', ' + currentcount;
                currentcount = 0;
                }
            }
        }
        if (currentcount > 0){
            if (comma_check == 0){
                colvalues += currentcount;
            } else {
            colvalues += ', ' + currentcount;
            }
        }
        result += `<td>${colvalues}</td>`;
    }
    result += '</tr></table>';
    return result;  
}

function row_values(puzzle, row){
    let rowvalues = '';
    let currentcount = 0;
    let comma_check = 0;
    for(let i = 0; i < puzzle[row].length; i++){
        if (puzzle[row][i] == 1 || puzzle[row][i] == 2 || puzzle[row][i] == 4 || puzzle[row][i] == 5 || puzzle[row][i] == 6){
            currentcount++;
        } else if (currentcount > 0){
            if (comma_check == 0){
                rowvalues += currentcount;
                comma_check += 1;
                currentcount = 0;
            } else {
            rowvalues += ', ' +currentcount;
            currentcount = 0;
            }
        }        
    }
    if (currentcount > 0){
        if (comma_check == 0){
            rowvalues += currentcount;
        } else {
        rowvalues += ', ' +currentcount;
        }

    }
    let result = `<td class="row_values">${rowvalues}</td>`;
    return result;
}

function generate_row_nonogram(puzzle){
    let result = '<table>';

    for(let j = 0; j < puzzle[0].length; j++){
        result += '<tr>';
        for(let i = 0; i < puzzle.length + 1; i++){
            if (i == 0){
                let row = j;
                let row_value = row_values(puzzle, row);
                result += row_value;
            } else if (puzzle[j][i-1] == 1){
                result += `<td onclick="square_click_handler(this)"></td>`;
            } else if (puzzle[j][i-1] == 0){
                result += `<td onclick="square_click_handler(this)"></td>`;
            } else if (puzzle[j][i-1] == 2){
                result += '<td class="filled_trivial"></td>';
            } else if (puzzle[j][i-1] == 3){
                result += '<td class="empty"></td>';
            } else if (puzzle[j][i-1] == 4){
                result += '<td class="filled_easy"></td>';
            } else if (puzzle[j][i-1] == 5){
                result += '<td class="filled_intermediate"></td>';
            } else if (puzzle[j][i-1] == 6){
                result += '<td class="filled_hard"></td>';
            }
        }
        result += '</tr>';
    }
    result += '</table>';
    return result;
}

function generate_puzzle_html(puzzle){
    let result = generate_col_values(puzzle);
    result += generate_row_nonogram(puzzle);
    return result;

}

function puzzle_check(){
    let diff = x_diff[0];
    if (diff == 0){
        return trivial;
    }
    if (diff == 1){
        return easy;
    }
    if (diff == 2){
        return intermediate;
    }
    if (diff == 3){
        return hard;
    }
}

function check_game_won_trivial(puzzle){
    let trivial_won = [[3, 3, 3, 2, 2],
                    [3, 3, 2, 2, 3],
                    [3, 2, 2, 3, 3],
                    [2, 2, 3, 3, 3],
                    [2, 2, 2, 2, 2]];
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5;j++){
            if( puzzle[i][j] != trivial_won[i][j]){
                return false;
            }
        }
    }
    return true;
}

function check_game_won_easy(puzzle){
    let easy_won = [[3, 3, 3, 4, 3, 4, 3, 3, 3, 3],
                    [4, 4, 3, 4, 3, 4, 3, 4, 4, 3],
                    [3, 4, 4, 4, 4, 4, 4, 4, 3, 3],
                    [3, 3, 4, 3, 4, 4, 4, 3, 3, 3],
                    [3, 3, 4, 4, 4, 4, 4, 4, 3, 3],
                    [3, 3, 4, 4, 4, 4, 4, 4, 4, 3],
                    [3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
                    [3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
                    [3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
                    [3, 3, 4, 4, 4, 4, 3, 3, 3, 3]];
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10;j++){
            if( puzzle[i][j] != easy_won[i][j]){
                return false;
            }
        }
    }
    return true;
}

function check_game_won_intermediate(puzzle){
    let intermediate_won = [[3, 3, 5, 3, 3, 3, 3, 5, 3, 3],
    [3, 5, 5, 5, 3, 3, 5, 5, 5, 3],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    [5, 5, 3, 3, 5, 3, 3, 5, 5, 5],
    [5, 5, 3, 3, 3, 3, 3, 5, 5, 5],
    [5, 5, 3, 3, 3, 3, 5, 5, 5, 5],
    [3, 5, 5, 3, 3, 5, 5, 5, 5, 3],
    [3, 3, 5, 5, 5, 5, 5, 5, 3, 3],
    [3, 3, 3, 5, 5, 5, 5, 3, 3, 3],
    [3, 3, 3, 3, 5, 5, 3, 3, 3, 3]];
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10;j++){
            if( puzzle[i][j] != intermediate_won[i][j]){
                return false;
            }
        }
    }
    return true;
}

function check_game_won_hard(puzzle){
    let hard_won = [[3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 6, 6, 6, 3, 3, 6, 6, 3, 3, 3],
    [3, 3, 3, 3, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 3, 3, 3, 6, 3],
    [3, 3, 6, 3, 3, 6, 6, 3, 3, 3, 3, 3, 3, 6, 6],
    [3, 3, 6, 6, 3, 3, 6, 3, 6, 3, 3, 6, 3, 3, 6],
    [3, 6, 3, 3, 6, 3, 6, 6, 6, 6, 3, 6, 6, 3, 6],
    [3, 3, 6, 6, 6, 6, 6, 6, 6, 3, 3, 6, 6, 6, 6],
    [3, 6, 3, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [3, 3, 6, 6, 6, 6, 6, 6, 3, 3, 6, 6, 6, 6, 3],
    [3, 3, 3, 6, 6, 6, 6, 6, 6, 3, 3, 6, 6, 3, 3],
    [6, 6, 6, 6, 6, 6, 3, 6, 3, 6, 3, 3, 3, 3, 3],
    [6, 6, 6, 6, 3, 6, 3, 6, 3, 6, 6, 3, 3, 3, 3],
    [3, 6, 6, 6, 3, 3, 6, 3, 6, 3, 3, 3, 3, 3, 3],
    [3, 3, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];
    for(let i = 0; i < 15; i++){
        for(let j = 0; j < 15;j++){
            if( puzzle[i][j] != hard_won[i][j]){
                return false;
            }
        }
    }
    return true;
}

function check_game_won(puzzle){
    let diff = x_diff[0];
    if (diff == 0){
        return check_game_won_trivial(puzzle);
    }
    if (diff == 1){
        return check_game_won_easy(puzzle);
    }
    if (diff == 2){
        return check_game_won_intermediate(puzzle);
    }
    if (diff == 3){
        return check_game_won_hard(puzzle);
    }
}

function update_moves(){
    document.getElementById("moves").innerHTML = `Moves counter: ${moves[0]}`;
}

function moves_up(){
    let current_moves = moves[0];
    current_moves += 1
    moves[0] = current_moves
    update_moves();
}

function lives_update(){
    let result = '';
    let current_lives = lives[0];
    for(let i = 0; i<current_lives; i++){
        result += '<img src="/nonogram/heart.png" width="50" height="50" alt="X">';
    }
    document.getElementById("lives").innerHTML = `Lives:  ${result}`;
}

function life_lost(){
    let current_lives = lives[0];
    current_lives += -1
    if (current_lives == 0){
        stopTimer();
        alert("verloren, speel opnieuw!");
        let puzzle = puzzle_check();
        difficulty_choose(puzzle);
    } else {
        lives[0] = current_lives;
        lives_update();
    }
}

function clear_row(puzzle, row){
    for(let i = 0; i < puzzle[row].length; i++){
        if(puzzle[row][i] == 0){
            puzzle[row][i] = 3;
        }
    }

}

function check_row(puzzle, row){
    for(let i = 0; i < puzzle[row].length; i++){
        if(puzzle[row][i] == 1){
            return 0;
        }
    }clear_row(puzzle, row);
}

function clear_col(puzzle, col){
    for(let i = 0; i < puzzle.length; i++){
        if(puzzle[i][col] == 0){
            puzzle[i][col] = 3;
        }
    }
}

function check_col(puzzle, col){
    for(let i = 0; i<puzzle.length; i++){
        if(puzzle[i][col] == 1){
            return 0;
        }
    }clear_col(puzzle, col);
}

function check_row_col(puzzle, row, col){
    check_row(puzzle, row);
    check_col(puzzle, col);
}

function make_color(puzzle, row, col){
    if (puzzle ==  trivial){
        puzzle[row][col] = 2;
    }
    if (puzzle ==  easy){
        puzzle[row][col] = 4;
    }
    if (puzzle ==  intermediate){
        puzzle[row][col] = 5;
    }
    if (puzzle ==  hard){
        puzzle[row][col] = 6;;
    }
}

function square_click_handler(cell){
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex - 1;
    let mode = mode_check(); // 1 bij inkleuren, 0 bij afschrijven
    let puzzle =  puzzle_check();
    if (mode == 1){
        if (puzzle[row][col] == 1){
            make_color(puzzle, row, col);
            moves_up();
            check_row_col(puzzle, row, col);
        } else if (puzzle[row][col] == 0){
            moves_up();
            puzzle[row][col] = 3
            alert("fout!");
            life_lost();
        }
    }
    if (mode == 0){
        if (puzzle[row][col] == 0){
            puzzle[row][col] = 3
            moves_up();
        } else if (puzzle[row][col] == 1){
            moves_up();
            make_color(puzzle, row, col);
            check_row_col(puzzle, row, col);
            alert("fout!");
            life_lost();
        }
    }
    document.getElementById("nonogram").innerHTML = draw_puzzle(puzzle);
    if (check_game_won(puzzle)){
        stopTimer();
        let moves_end = moves[0];
        let time = document.getElementById("timer").innerHTML;
        let string = 'Proficiat, je hebt in ' + moves_end + ' zetten en in ' + time + ' seconden gewonnen!';
        alert(string);

    }
}
