class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const sortedArr = numbers.sort((a, b) => a - b )

        let l = 0
        let r = numbers.length - 1

        while(l < r){
            const result = target - (numbers[l] + numbers[r])

            if(result > 0){
                l++
            } else if (result < 0){
                r--
            } else {
                return [l + 1, r + 1]
            }
        }

        return []

    }
}
