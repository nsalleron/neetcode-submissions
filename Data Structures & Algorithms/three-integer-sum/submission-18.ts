class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a, b) => a - b)
        const res = []


        for(let i = 0; i < sortedNums.length ; i ++){
            if(i > 0 && sortedNums[i] === sortedNums[i - 1]){
                continue
            }
            let l = i + 1
            let r = sortedNums.length - 1

            while (l < r){
                const result = sortedNums[i] + sortedNums[l] + sortedNums[r]
                if(result < 0){
                    l++
                } else if (result > 0){
                    r--
                } else {
                    res.push([sortedNums[i], sortedNums[l], sortedNums[r]])
                    l++
                    while(l < r && sortedNums[l] === sortedNums[l-1]){
                        l++
                    }
                }
            }
        }

        return res

    }

}
