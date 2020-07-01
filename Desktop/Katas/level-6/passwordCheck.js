// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.
// Must contain only alphanumeric characters.
// Must contain letters and numbers.
function validPass(password) {
    return /(?=.+[a-z])(?=.+\d)^[a-z\d]{3,20}$/i.test(password) ? 'VALID' : 'INVALID';
}