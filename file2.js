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


function isBestFriend(f1,f2) {
    
   
    for(const info1 in f1){
        console.log(info1, f1[info1])
    }
    for(const info2 in f2){
        console.log(info2, f2[info2])
    }
    console.log(f1.roll,f2.bestFriend, f2.roll, f1.bestFriend)
    if(f1.roll==f2.bestFriend && f2.roll == f1.bestFriend){
        return true
    } return false

}

const friend1={
    name: "Abdul Kader",
    roll: 2,
    bestFriend: 5,
}

const friend2={
    name: "Rabbani",
    roll: 5,
    bestFriend: 2,
}
console.log(isBestFriend(friend1,friend2))

function calculateWatchTime(times) {
    let totalSecond= 0
    
    if(Array.isArray(times)){
        for(const time of times){
            totalSecond+=time
            

        } 

        let leftHour=totalSecond % 3600
            
            let hour=(totalSecond-leftHour)/3600
           
            console.log(hour)

            let leftminute=leftHour % 60
            console.log("lm", leftminute)

            let minute= (totalSecond-((hour*3600)+leftminute))/60
            console.log("m", minute)
        
    } return "invalid"
    
}


console.log("time...................")

console.log(calculateWatchTime([10,20,40,3600,3600,70,3600,70]))
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