// devo creare una lista di membri del team  e ogni membro avrà nome ruolo e immagine

//esempio: 
//nome:Ben Green
//role: ceo
//image: https://picsum.photos/id/1025/300/300

const team = 
[
    { 
        "name" : "fabiopacifici",
        "role" : "headteacher",
        "image" : "https://picsum.photos/id/1025/300/300"

    },

    {
        "name" : "tiziano nicolai",
        "role" : "tutor",
        "image" : "https://picsum.photos/id/1025/300/300"
    },

    {
        "name" : "fabiola gardin",
        "role" : "tutor",
        "image" : "https://picsum.photos/id/1025/300/300"
    },

    {
        "name" : "andrea tosi",
        "role" : "student",
        "image" : "https://picsum.photos/id/1025/300/300"
    },

    {
        "name" : "pablo pacheco",
        "role" : "student",
        "image" : "https://picsum.photos/id/1025/300/300"
    }

]

//prova per vedere se riuscivo a chiamare i valori dalle chiavi
// console.log(team[1].role);
// console.log(team[2].name[1]);
console.log(team);

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log(teamMember);
}