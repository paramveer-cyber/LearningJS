console.log("HEYYYYY!!!!")


const accountId = "abdcefhg";
let accountEmail = "someone@example.com"
var accountPass = "4321"
accountCity = "New Delhi"
let accountState;

// accountId = "something"; WRONG!!!! const keyword used hence its value is fixed.
accountEmail = "someone1@example.com";
accountPass = "51234"
accountCity = "Jaipur"

/*
    var : now not used generally, issue in scopes, DONT USE NOW
    accountCity : now defined but not a good practice [BADDD]
    accountState : it will be undefined as it is not defined DUH
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState]);
