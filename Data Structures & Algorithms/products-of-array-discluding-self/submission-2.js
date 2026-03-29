class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {


        console.log(nums)
        
        let prefix = 1
        let prefixArr = [1]
        for(let i = 1; i < nums.length ; i++){
           const result = nums[i - 1] * prefix
           prefix = result
           prefixArr[i] = result
        }

        
        console.log(prefixArr)

        let suffix = 1
        let suffixArray = []
        for(let i = nums.length - 2; i >= 0 ; i--){
            const result = nums[i + 1] * suffix
            suffix = result
            suffixArray[i] = result
        }
        suffixArray.push(1)

        for(let i = 0; i < nums.length; i ++){
            nums[i] = prefixArr[i] * suffixArray[i]
        }

        console.log(suffixArray)

        return nums

    }
}
