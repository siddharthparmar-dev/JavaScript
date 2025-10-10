// const newObj = {
//     name:"sam",
//     id:"2562",
//     jobDescription:"SDE 2",
//     Salary: "25 LPA "
// }

// newObj.paper = function(){
//     return `${this.name} your id no is ${this.id} and you have been selected as ${this.jobDescription} and your CTC is ${this.Salary}`
// }

// console.log(newObj.paper());


const game = new Object();
game.name = "bgmi"
game.company = "krafton"
game.display = function gamedetails(){
    return `i play ${this.name} and it is created by ${game.company}`
}

console.log(game);

console.log(game.display());


