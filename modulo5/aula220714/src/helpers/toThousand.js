const toThousand = function (digits){ // formata preço ex: 10059 1005.9
    const everyThirdDigit = /\B(?=(\d{3})+(?!\d))/g; // regular expression
    return digits.toString().replace(everyThirdDigit, ".");
} 

module.exports = toThousand;