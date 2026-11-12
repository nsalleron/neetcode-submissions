class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const freq = new Map()

        for(let r of tasks){
            freq.set(r, (freq.get(r) || 0) + 1)
        }

        const heap = new MaxPriorityQueue()

        for(let v of freq.values()){
            heap.enqueue(v)
        }

        const queue = new Queue()
        let timer = 0
        while(heap.size() > 0 || queue.size() > 0){
            timer++
            const task = heap.dequeue()

            if(task){
                const newTask = task - 1
                if(newTask > 0){
                    queue.enqueue([newTask, timer + n])
                }
            }


            if(queue.size() > 0 && queue.front()[1] === timer){
                const queuedTask = queue.dequeue()
                heap.enqueue(queuedTask[0])
            }
        }

        return timer
    }
}
