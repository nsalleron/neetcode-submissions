class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a, b) => a - b)
        const res = []

        for(let i = 0; i < sortedNums.length; i++){
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]){
                continue
            }
            let j = i + 1
            let k = sortedNums.length - 1

            while(j < k){
                const result = sortedNums[i] + sortedNums[j] + sortedNums[k]

                if(result > 0){
                    k--
                } else if(result < 0){
                    j++
                } else {
                    res.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                    j++
                    while(sortedNums[j] === sortedNums[j - 1]){
                        j++
                    }
                }
            }
        }

        return res
    }
}
