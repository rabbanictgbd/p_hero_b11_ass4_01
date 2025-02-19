function cashOut( money ) {
    if(money>=0){

        return money/100*1.75;
    }else{
        return "Invalid"
    }
}

cashOut(2000);
console.log(cashOut(1000));

function  validEmail( email ) {
    if(email.startsWith("-") || email.startsWith(".") || email.startsWith("+") || email.startsWith("_") || email.startsWith("@")|| email.includes(" ")  || email.endsWith (!".com")){
        return false
    }else{
        return true
    }
   
}

console.log("email",validEmail("rabbanictgbd@gmail.com"))
console.log("email",validEmail(".rabbanictgbd@gmail.com"))
console.log("email",validEmail("+rabbanictgbd@gmail.com"))
console.log("email",validEmail("-rabbanictgbd@gmail.com"))
console.log("email",validEmail("_rabbanictgbd@gmail.com"))
console.log("email",validEmail("@rabbanictgbd@gmail.com"))

function  electionResult( votes ) {
    return votes
}

electionResult(["mango"],["mango"],["banana"],["naVote"],["banana"]);
console.log(electionResult(["mango"],["mango"],["banana"],["naVote"],["banana"]));

function  isBestFriend( f1 , f2 ) {
    // You have to write your code here
}

function  calculateWatchTime( times ) {
    // You have to write your code here
}
