const palindromes = function(string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clean = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

    const reversed = clean.split('').reverse().join('');

    if (clean === reversed) {
        console.log(reversed);
        return true;
    } else {
        console.log(reversed);
        return false;
        
    }
};

// Do not edit below this line
module.exports = palindromes;
