class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        /**
        * @param {number[]} arr
        * @param {number} offset
        */
        const bin = (arr, offset) => {
            if (arr.length === 0) return -1;
            let m = Math.floor((arr.length - 1) / 2)
            if(arr[m] === target)
                return offset + m
            else if(arr[m] < target){
                return bin(arr.slice(m + 1), offset + m + 1)
            } else {
                return bin(arr.slice(0, m), offset)
            }
        }

        return bin(nums, 0)
    }
}