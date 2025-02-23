function cashOut(money) {
    if (money >= 0 && typeof money == "number") {

        return money / 100 * 1.75;
    } else {
        return "Invalid"
    }
}


console.log(("cash out charge ......................................"));
console.log(cashOut(1000));
console.log(cashOut(999));
console.log(cashOut(-2000));
console.log(cashOut(0));
console.log(cashOut(-0));
console.log(cashOut(-1));
console.log(cashOut("100"));
console.log(cashOut("-100"));
console.log(cashOut("cash"));

function validEmail(email) {
    if (typeof email == "string") {
        if (email.startsWith("-") || email.startsWith(".") || email.startsWith("+") || email.startsWith("_") || email.startsWith("@") || email.includes(" ") || !email.includes("@") || !email.endsWith(".com")) {
            return false
        } else {
            return true
        }
    } return "Invalid"
}

console.log("email............................................")
console.log("email", validEmail("rabbanictgbd@gmail.com"))
console.log("email", validEmail(".rabbanictgbd@gmail.com"))
console.log("email", validEmail("+rabbanictgbd@gmail.com"))
console.log("email", validEmail("-rabbanictgbd@gmail.com"))
console.log("email", validEmail("_rabbanictgbd@gmail.com"))
console.log("email", validEmail("@rabbanictgbd@gmail.com"))
console.log("email", validEmail("rabbanictgbdgmail.com"))
console.log("email", validEmail("rabbanictgbdgmail"))
console.log("email", validEmail(true))
console.log("email", validEmail(100))

function electionResult(votes) {

    let mangoCounter = 0;
    let bananaCounter = 0;
    if (Array.isArray(votes)) {

        for (const vote of votes) {


            if (vote == "mango") {
                mangoCounter++
            }
            if (vote == "banana") {
                bananaCounter++
            }
        }
        if (mangoCounter > bananaCounter) {

            return [mangoCounter, "Mango"]
        } else if (bananaCounter > mangoCounter) {
            return [bananaCounter, "Banana"]
        } return [bananaCounter, mangoCounter, "Draw"]
    }


    return "invalid"

}







console.log("vote .................................................")
console.log(electionResult(["mango", "mango", "banana", "banana", "naVote"]));
console.log(electionResult(["mango", "mango", "banana", "naVote"]));
console.log(electionResult(["mango", "banana", "banana", "naVote"]));
console.log(electionResult([]));
console.log(electionResult("banana", "banana"));
console.log(electionResult(100, 20));
console.log(electionResult([100, 20]));
console.log(electionResult([100, 100]));
console.log(electionResult([true, true]));



function isBestFriend(f1, f2) {


    if (typeof f1 == "object" && typeof f2 == "object") {

        if (f1.roll == f2.bestFriend && f2.roll == f1.bestFriend) {
            return true
        } return false
    } return "Invalid"
}

const friend1 = {
    name: "Abdul Kader",
    roll: 2,
    bestFriend: 5,
}

const friend2 = {
    name: "Rabbani",
    roll: 5,
    bestFriend: 2,
}
const friend3 = {
    name: "Rabbani",
    roll: 5,
    bestFriend: 3,
}
const friend4 = {
    name: "Rabbani",
    roll: "ten",
    bestFriend: 3,
}

console.log("friend........................................................")
console.log(isBestFriend(friend1, friend2))
console.log(isBestFriend(friend1, friend3))
console.log(isBestFriend(friend1, friend4))
console.log(isBestFriend(true, false))
console.log(isBestFriend(friend1, "kashem have no fried"))

function calculateWatchTime(times) {
    let totalSecond = 0


    if (Array.isArray(times)) {

        for (const time of times) {

            if (typeof time !== "number") {
                return "invalid"

            }
            totalSecond += time
        }

            let leftHour = totalSecond % 3600

            let hour = (totalSecond - leftHour) / 3600



            let leftminute = leftHour % 60


            let minute = (totalSecond - ((hour * 3600) + leftminute)) / 60

            let second = totalSecond - ((hour * 3600) + (minute * 60))

           

         return { hour: hour, minute: minute, second: second }

    } return "invalid"

}




console.log("time.................................................")
console.log(calculateWatchTime([10, 20, 40, 3600, 3600, 70, 3600, 70]))
console.log(calculateWatchTime([10]))
console.log(calculateWatchTime([3, 70]))
console.log(calculateWatchTime([]))
console.log(calculateWatchTime("20"))
console.log(calculateWatchTime("s"))
console.log(calculateWatchTime([3, "70"]))
