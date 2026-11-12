class MedianFinder {
    right: typeof MinPriorityQueue
    left: typeof MaxPriorityQueue

    constructor() {
        this.right = new MinPriorityQueue()
        this.left = new MaxPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        if(this.right.isEmpty() || num > this.right.front()){
            this.right.enqueue(num)
        } else {
            this.left.enqueue(num)
        }

        if(this.left.size() > this.right.size() + 1){
            this.right.enqueue(this.left.dequeue())
        } 
        if(this.right.size() > this.left.size() + 1){
            this.left.enqueue(this.right.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if(this.left.size() > this.right.size()){
            return this.left.front()
        } else if (this.right.size() > this.left.size()){
            return this.right.front()
        } else {
            return (this.left.front() + this.right.front()) / 2
        }

    }
}
