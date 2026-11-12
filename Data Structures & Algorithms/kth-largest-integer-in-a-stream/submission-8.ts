class KthLargest {
    k: number
    heap: typeof MinPriorityQueue
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        this.k = k
        this.heap = new MinPriorityQueue()

        for(let n of nums){
            this.heap.enqueue(n)
            if(this.heap.size() > k){
                this.heap.dequeue()
            }
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.enqueue(val)

        if(this.heap.size() > this.k){
            this.heap.dequeue()
        }
        
        return this.heap.front()
    }
}
