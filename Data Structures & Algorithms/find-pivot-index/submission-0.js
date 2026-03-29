class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        this.prefix = []
        let total = 0
        for(let i = 0; i < nums.length; i++){
            total += nums[i]

            this.prefix.push(total)
        }

        this.suffix = []
        total = 0
        for(let i = nums.length - 1 ; i >= 0; i--){
            total += nums[i]

            this.suffix[i]=total
        }

        console.log(this.prefix)
        console.log(this.suffix)

        for(let i = 0; i < nums.length; i++){
            if(this.prefix[i] === this.suffix[i]){
                return i
            }
        }
        return -1
    }
}
