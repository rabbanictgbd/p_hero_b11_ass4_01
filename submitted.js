function cashOut(money) {
    if (money >= 0 && typeof money == "number") {

        return money / 100 * 1.75;
    } else {
        return "Invalid"
    }
}

function validEmail(email) {
    if (typeof email == "string") {
        if (email.startsWith("-") || email.startsWith(".") || email.startsWith("+") || email.startsWith("_") || email.startsWith("@") || email.includes(" ") || !email.includes("@") || !email.endsWith(".com")) {
            return false
        } else {
            return true
        }
    } return "Invalid"
}

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

            return "Mango"
        } else if (bananaCounter > mangoCounter) {
            return "Banana"
        } return "Draw"
    }


    return "invalid"

}




function isBestFriend(f1, f2) {


    if (typeof f1 == "object" && typeof f2 == "object") {

        if (f1.roll == f2.bestFriend && f2.roll == f1.bestFriend) {
            return true
        } return false
    } return "Invalid"
}


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

