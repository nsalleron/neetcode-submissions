class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let numsA = nums1
        let numsB = nums2

        if(nums1.length > nums2.length){
            const temp = numsA
            numsA = numsB
            numsB = temp
        }

        let l = 0 
        let r = numsA.length 

        let total = numsA.length + numsB.length
        let half = Math.floor(total / 2)

        while(l <= r){
            const m = Math.floor((l+r) / 2)
            const j = half - m

            const aLeft = m > 0 ? numsA[m - 1] : Number.NEGATIVE_INFINITY
            const aRight = m < numsA.length ? numsA[m] : Number.POSITIVE_INFINITY
            const bLeft = j > 0 ? numsB[j - 1] : Number.NEGATIVE_INFINITY
            const bRight = j < numsB.length ? numsB[j] : Number.POSITIVE_INFINITY

            if(aLeft <= bRight && aRight >= bLeft){
                if(total % 2 !== 0){
                    return Math.min(aRight, bRight)
                }
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            } else {
                if(aLeft > bRight){
                    r = m - 1 
                } else {
                    l = m + 1 
                }

            }
        }

        throw new Error("You should not see me")

    }
}
