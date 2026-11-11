class KthLargest {
    k: number
    heap: number[]
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k
        this.heap = [...nums.sort((a, b) => a -b)]
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val)
        this.heap = this.heap.sort((a, b) => a - b)
        return this.heap[ this.heap.length - this.k ]
    }
}
