class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let numberToAdd = 1
        let i = 0
        digits.reverse()
        while(numberToAdd){
            if(i < digits.length){
                if(digits[i] === 9){
                    digits[i] = 0
                } else {
                    digits[i] += 1
                    numberToAdd = 0
                }
            } else {
                digits.push(numberToAdd)
                numberToAdd = 0
            }
            i++
        }

        return digits.reverse()
    }
}
