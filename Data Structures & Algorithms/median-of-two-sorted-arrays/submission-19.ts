class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let numsA = nums1
        let numsB = nums2

        const total = numsA.length + numsB.length
        const half = Math.floor(total / 2)

        let l = 0
        let r = numsA.length

        while(l <= r){
            const m = Math.floor((l + r) / 2)
            const j = half - m

            const leftNumsA = m > 0 ? numsA[m - 1] : Number.MIN_SAFE_INTEGER
            const rightNumsA = m <= numsA.length - 1 ? numsA[m] : Number.MAX_SAFE_INTEGER
            const leftNumsB = j > 0 ? numsB[j-1] : Number.MIN_SAFE_INTEGER
            const rightNumsB = j <= numsB.length - 1 ? numsB[j] : Number.MAX_SAFE_INTEGER

            console.log({leftNumsA, rightNumsA, leftNumsB, rightNumsB, m, j})

            if(leftNumsA <= rightNumsB && leftNumsB <= rightNumsA){
                if(total % 2 !== 0){
                    return Math.min(rightNumsA, rightNumsB)
                }
                return (Math.max(leftNumsA, leftNumsB) + Math.min(rightNumsA, rightNumsB)) / 2
            } else {
                if(rightNumsA < leftNumsB){
                    l = m + 1
                } else {
                    r = m - 1
                }
            }

        }

    }
}
