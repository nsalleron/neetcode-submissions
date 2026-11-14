class MedianFinder {
    left: typeof MaxPriorityQueue
    right:typeof MinPriorityQueue

    constructor() {
        this.left =  new MaxPriorityQueue()
        this.right = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        if(this.right.size() === 0 || this.right.front() < num){
            this.right.enqueue(num)
        } else {
            this.left.enqueue(num)
        }

        if(this.left.size() > this.right.size() + 1){
            this.right.enqueue(this.left.dequeue())
        } else if(this.right.size() > this.left.size() + 1){
            this.left.enqueue(this.right.dequeue())
        }
    }


    /**
     * @return {number}
     */
    findMedian(): number {
        if((this.left.size() + this.right.size()) % 2 === 0){
            return (this.left.front() + this.right.front()) / 2
        }
        return this.left.size() > this.right.size() ? this.left.front() : this.right.front()
    }
}
