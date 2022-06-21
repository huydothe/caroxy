let arr=[
    ['*','*','*'],
    ['*','*','*'],
    ['*','*','*'],
];
let player=1;

function drawgameboard(){
    let html="";
    for(let i=0; i<arr.length; i++){
        html += '<tr>';
        for(let j=0; j<arr[i].length; j++){
            html+=`<td id="${i} - ${j}" onclick="play(${i},${j})">`;
            html+="</td>"
        }
        html+='</tr>';
    }
    document.getElementById('game-board').innerHTML= html;
}
drawgameboard();

function play(x,y){
    console.log(x+' - '+y)
    if(!document.getElementById(x+' - '+y).innerHTML){
        if(player===1){
            document.getElementById(x+' - '+y).innerHTML ='X';
            arr[x][y]='X';
            player=2;
        }else{
            document.getElementById(x+' - '+y).innerHTML ='O';
            arr[x][y]='O';
            player=1;
        }
    }else {
        alert('Đánh ở ô khác đi');
    }
}