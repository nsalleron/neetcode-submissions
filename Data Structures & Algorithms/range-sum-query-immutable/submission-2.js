class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = []
        let total = 0
        for(let i = 0; i < nums.length; i++){
            total += nums[i]

            this.prefix.push(total)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {

        let preRight = this.prefix[right]
        let preLeft = left > 0 ? this.prefix[left - 1] : 0

        return preRight - preLeft

    }
    }
    
