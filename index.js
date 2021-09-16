const Calculate = {
    factorial(input){
        let total = 1
        for(let int = input; int >= 1; int--) total *= int
        return total
    }
}

module.exports = Calculate


