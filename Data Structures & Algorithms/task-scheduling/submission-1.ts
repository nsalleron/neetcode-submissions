class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const maxHeap = new MaxPriorityQueue();
        const queue = new Queue();

        const freq = new Map();
        for (let t of tasks) {
            freq.set(t, (freq.get(t) || 0) + 1);
        }

        for (let f of freq.values()) {
            maxHeap.enqueue(f);
        }
        let timer = 0;
        while (maxHeap.size() > 0 || queue.size() > 0) {
            timer++

            if(maxHeap.size() > 0){
                let task = maxHeap.dequeue()
                task = task - 1
                if(task > 0){
                    queue.enqueue([task, timer + n])
                }
            }

            if(queue.size() > 0 && queue.front()[1] === timer){
                maxHeap.enqueue(queue.dequeue()[0])
            }
        }

        return timer;
    }
}
