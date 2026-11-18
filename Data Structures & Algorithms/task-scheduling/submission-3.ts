class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const map = new Map<string, number>()
        for(let t of tasks){
            map.set(t, (map.get(t) || 0) + 1)
        }

        const maxHeap = new MaxPriorityQueue()
        for(let v of map.values()){
            maxHeap.enqueue(v)
        }

        let queue = []
        let front = 0

        let time = 0
        while(maxHeap.size() > 0 || queue.length > front){
            time ++
            const value = maxHeap.dequeue()

            if(value){
                const newValue = value - 1
                if(newValue > 0){
                    queue.push([newValue, time + n])
                }
            }

            if(queue.length > front && queue[front][1] === time ){
                const value = queue[front++][0]
                maxHeap.enqueue(value)
            }
        }

        return time

    }
}
