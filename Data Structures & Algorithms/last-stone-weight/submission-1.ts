class Solution {
    heap: number[];
    constructor() {
        this.heap = new Array();
        this.heap.push(0);
    }
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        stones.forEach((s)=> this.push(s))

        console.log(stones)

        while(this.heap.length > 2){
            const x = this.pop()
            const y = this.pop()

            console.log({x, y})

            if(x === y){
                continue
            } else if ( x < y){
                this.push(y-x)
            } else {
                this.push(x - y)
            }
        }

        if(this.heap.length === 1){
            return 0
        }

        return this.pop()
    }

    push(val: number) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 1 && this.heap[i] > this.heap[Math.floor(i / 2)]) { // le sens < ou > conditionne la racine, > => plus grand < plus petit
            let tmp = this.heap[i];
            this.heap[i] = this.heap[Math.floor(i / 2)];
            this.heap[Math.floor(i / 2)] = tmp;
            i = Math.floor(i / 2);
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return -1;
        }

        if (this.heap.length === 2) {
            return this.heap.pop();
        }

        let res = this.heap[1];

        this.heap[1] = this.heap.pop();
        let i = 1;

        //percolate down
        while (2 * i < this.heap.length) {
            if (
                2 * i + 1 < this.heap.length &&
                this.heap[2 * i + 1] > this.heap[2 * i] && // > plus grand, < plus petit
                this.heap[i] < this.heap[2 * i + 1] // < plus grand, > plus petit
            ) {
                //swap right child
                let tmp = this.heap[i]
                this.heap[i] = this.heap[2*i+1]
                this.heap[2*i+1] = tmp
                i = 2*i+1
            } else if(this.heap[i] < this.heap[2*i]){ // < plus grand, > plus petit
                let tmp = this.heap[i]
                this.heap[i] = this.heap[2*i]
                this.heap[2*i] = tmp
                i = 2*i
            } else {
                break
            }
        }

        return res
    }
}
