// Code challenge 01,02,03
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

// Mảng người chơi cho mỗi đội
const [players1,players2]=game.players;
// Đội 1
const [gk,...fieldPlayers]=players1;
// mảng tất cả người chơi
const allPlayer=[...players1,players2];
// Đội 1 thêm dự bị
const players1Final=[players1,'Thiago','Coutinho','Perisic'];
// tạo biến cho mỗi số lẻ
const {team1,draw,team2}=game.odds;
// Số bàn thắng
const printGoals=function(...players){
    console.log(`${players.length} goals was scored`)
    players.forEach(players=>console.log(players))
}
// Test hàm
printGoals('Davies','Muller','Lewandoski','Kimich')
printGoals(...game.scored)

// Đội có khả năng giành chiến thắng 
team1<team2 && console.log("Team 1 most likely to win")
team1>team2 && console.log("Team 2 most likely to win")

// In tên từng người chơi cùng với số bàn thắng 
game.scored.forEach((players,i)=>console.log(`Goal ${i+1}:${players}`))

// Tính số lẻ trung bình
const odds=Object.values(game.odds)
