class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let sortedNums = nums.sort((a, b) => a -b)

        let res = []

        for(let i = 0; i < sortedNums.length; i++){
            if(i > 0 && nums[i - 1] === nums[i]){
                continue
            }
            let j = i + 1
            let k = nums.length - 1
            while(j < k){
                const result = nums[i] + nums[j] + nums[k]

                if(result > 0){
                    k--
                } else if (result < 0){
                    j++
                } else {
                    res.push([nums[i], nums[j], nums[k]])
                    j++
                    while(j < k && nums[j] === nums[j - 1]){
                        j++
                    }
                }
            }
        }

        return res
        
    }
}