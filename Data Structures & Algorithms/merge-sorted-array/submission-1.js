class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let pNums1 = m - 1
        let pNums2 = n - 1
        let k = m + n - 1

        while(pNums2 >= 0){
           if(pNums1 >= 0 && nums1[pNums1] > nums2[pNums2]){
                nums1[k] = nums1[pNums1]
                pNums1--
            } else {
                nums1[k] = nums2[pNums2]
                pNums2--
            }
            k--
        }
    }
}
