function cashOut(money) {
    if (money >= 0) {

        return money / 100 * 1.75;
    } else {
        return "Invalid"
    }
}

cashOut(2000);
console.log(cashOut(1000));

function validEmail(email) {
    if (email.startsWith("-") || email.startsWith(".") || email.startsWith("+") || email.startsWith("_") || email.startsWith("@") || email.includes(" ") || !email.includes("@") || !email.endsWith(".com")) {
        return false
    } else {
        return true
    }

}

console.log("email", validEmail("rabbanictgbd@gmail.com"))
console.log("email", validEmail(".rabbanictgbd@gmail.com"))
console.log("email", validEmail("+rabbanictgbd@gmail.com"))
console.log("email", validEmail("-rabbanictgbd@gmail.com"))
console.log("email", validEmail("_rabbanictgbd@gmail.com"))
console.log("email", validEmail("@rabbanictgbd@gmail.com"))
console.log("email", validEmail("rabbanictgbdgmail.com"))
console.log("email", validEmail("rabbanictgbdgmail"))
// console.log("email",validEmail(rabbanictgbdgmail))
// console.log("email",validEmail(152))

// const items = ["mango", "banana", "naVote"];
function electionResult(votes) {
    
    let mangoCounter=0;
    let bananaCounter=0;
    if (Array.isArray(votes)) {

        for(const vote of votes){
            
            // console.log(vote)
           if (vote == "mango"){
            mangoCounter++
           }
           if (vote == "banana"){
            bananaCounter++
           }
        }
        if (mangoCounter>bananaCounter){
            
            return  [mangoCounter, "Mango"]
        } else if (bananaCounter>mangoCounter){
            return [bananaCounter, "Banana"]
        } return [bananaCounter, mangoCounter, "Draw"]
    }

    
    return "invalid" 
        
    }






// console.log(electionResult(10));
// console.log(["mango", "banana", "naVote"]);
console.log("...........................")
console.log(electionResult(["mango","mango", "banana","banana", "naVote"]));
console.log(electionResult(["mango","mango", "banana", "naVote"]));
console.log(electionResult(["mango", "banana","banana", "naVote"]));
console.log(electionResult([]));
console.log(electionResult( "banana", "banana"));
// console.log(vote);
const friend1={
    name: "Abdul Kader",
    roll: 10,
    bestFriend: 1,
}

const friend2={
    name: "Rabbani",
    roll: 20,
    bestFriend: 2,
}

function isBestFriend(f1,f2) {
    const friend1={
        name: "Abdul Kader",
        roll: 10,
        bestFriend: 1,
    }
   
    const friend2={
        name: "Rabbani",
        roll: 20,
        bestFriend: 2,
    }
   
    for(const info1 in f1){
        console.log(info1, f1[info1])
    }
    for(const info2 in f2){
        console.log(info2, f2[info2])
    }
    
}

console.log(isBestFriend(friend1,friend2))

function calculateWatchTime(times) {
    // You have to write your code here
}

// function typeTest(type) {
//     if (typeof type === "string") {
//         return "string";
//     } else if (typeof type === 1.4) {
//         return "number";
//     } else {
//         return "others";
//     }

// }


// console.log(typeTest("hello"));
// console.log(typeTest(100));