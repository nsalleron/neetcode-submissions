class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const parents = Array.from({length: edges.length}, (_,i) => i)
        const ranking = Array.from({length: edges.length}, () => 0)

        const find = (node: number) => {
            let p = parents[node]
            while(p !== parents[p]){
                parents[p] = parents[parents[p]]
                p = parents[p]
            }
            return p
        }

        const union = (n1: number, n2: number) => {
            const p1 = find(n1)
            const p2 = find(n2)

            if(p1 === p2){
                return false
            }

            if(ranking[p1] > ranking[p2]){
                parents[p2] = p1
                ranking[p1] ++
            } else if (ranking[p2] > ranking[p1]){
                parents[p1] = p2
                ranking[p2] ++
            } else {
                parents[p2] = p1
                ranking[p1] ++
            }
            return true
        }


        for(let [src, dest] of edges){
            if(!union(src, dest)){
                return [src, dest]
            }
        }
        return []
    }
}
