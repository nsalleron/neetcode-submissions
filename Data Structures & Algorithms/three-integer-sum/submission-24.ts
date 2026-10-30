class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result = []
        const sortedArray = nums.sort((a, b) => a - b)

        for(let i = 0; i < sortedArray.length - 2; i++){
            if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue
            let j = i + 1
            let k = sortedArray.length - 1

            while(j < k){
                const sum = sortedArray[i] + sortedArray[j] + sortedArray[k]
                if(sum === 0){
                    result.push([sortedArray[i],sortedArray[j],sortedArray[k]])
                    while(j < k && sortedArray[j] === sortedArray[j + 1]) j++
                    while(j < k && sortedArray[k] === sortedArray[k - 1]) k--
                    j++
                    k--
                } else if(sum < 0){
                    j++
                } else {
                    k--
                }
            }
        }
        return result
    }
}