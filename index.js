const Calculate = {
    factorial(input){
        if(typeof input !== 'number') throw new TypeError('Only use numbers!')
        if(input == 0) return 1
        return (input != 1) ? input * this.factorial(input - 1) : 1
    }
}

module.exports = Calculate


