class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        let numsA = nums1
        let numsB = nums2

        let total = nums1.length + nums2.length
        let half = Math.floor(total / 2)

        if(numsA.length > numsB.length){
            const temp = numsA
            numsA = numsB
            numsB = temp
        }

        let l = 0
        let r = numsA.length

        while (l <= r) {
            let i = Math.floor((l + r) / 2) // A
            let j = half - i // B

            let aLeft = i > 0 ? numsA[i - 1] : Number.NEGATIVE_INFINITY
            let aRight = i < numsA.length ? numsA[i] : Number.POSITIVE_INFINITY
            let bLeft = j > 0 ? numsB[j - 1] : Number.NEGATIVE_INFINITY
            let bRight = j < numsB.length ? numsB[j] : Number.POSITIVE_INFINITY

            if(aLeft <= bRight && bLeft <= aRight){
                if(total % 2 !== 0){
                    return Math.min(aRight, bRight) //pas compris
                }
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2
            } else if (aLeft > bRight){
                r = i - 1
            } else {
                l = i + 1
            }
        }
    }
}
