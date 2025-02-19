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

const items = ["mango", "banana", "naVote"];
function electionResult(votes) {
    const items = ["mango", "banana", "naVote"];
    if (Array.isArray(votes)) {
        const mango = votes[0];
        const banana = votes[1];
        const naVote = votes[2];
        return votes
    } return "invalid"

}

// console.log(electionResult(votes.indexOf("banana")));


console.log(electionResult(10));
console.log(electionResult(items));

function isBestFriend(f1, f2) {
    // You have to write your code here
}

function calculateWatchTime(times) {
    // You have to write your code here
}

function typeTest(type) {
    if (typeof type === "string") {
        return "string";
    } else if (typeof type === 1.4) {
        return "number";
    } else {
        return "others";
    }

}


console.log(typeTest("hello"));
console.log(typeTest(100));