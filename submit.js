function cashOut(money) {
    if (money >= 0) {

        return money / 100 * 1.75;
    } else {
        return "Invalid"
    }
}


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

function electionResult(votes) {
    
    let mangoCounter=0;
    let bananaCounter=0;
    if (Array.isArray(votes)) {

        for(const vote of votes){
            
            
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







console.log("...........................")
console.log(electionResult(["mango","mango", "banana","banana", "naVote"]));
console.log(electionResult(["mango","mango", "banana", "naVote"]));
console.log(electionResult(["mango", "banana","banana", "naVote"]));
console.log(electionResult([]));
console.log(electionResult( "banana", "banana"));



function isBestFriend(f1,f2) {
    
   
    
   
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
           
           

            let leftminute=leftHour % 60
            

            let minute= (totalSecond-((hour*3600)+leftminute))/60

            let second= totalSecond-((hour*3600)+(minute*60))
            
            return ["hour:", hour, "minute:", minute, "second:", second]
        
    } return "invalid"
    
}




console.log(calculateWatchTime([10,20,40,3600,3600,70,3600,70]))
console.log(calculateWatchTime([10]))
console.log(calculateWatchTime([3,70]))
console.log(calculateWatchTime([]))
console.log(calculateWatchTime(20))
console.log(calculateWatchTime("s"))
