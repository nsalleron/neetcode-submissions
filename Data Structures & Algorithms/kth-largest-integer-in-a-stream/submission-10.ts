class KthLargest {
    minHeap = new MinPriorityQueue();
    k: number;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k;
        for (let c of nums) {
            this.minHeap.enqueue(c);
            if (this.minHeap.size() > k) {
                this.minHeap.dequeue();
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.minHeap.enqueue(val);

        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }
        return this.minHeap.front();
    }
}
