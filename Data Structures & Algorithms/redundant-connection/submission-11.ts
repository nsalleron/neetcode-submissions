class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const par = Array.from({length: edges.length}, (_, i) => i)
        const rank= Array.from({length: edges.length}, ()=> 0)

        const find = (node) => {
            let p = par[node]
            while(p !== par[p]){
                par[p] = par[par[p]]
                p = par[p]
            }

            return p
        }

        const union = (node1, node2) => {
            const p1 = find(node1)
            const p2 = find(node2)

            if(p1 === p2){
                return false
            }

            if(rank[p1] > rank[p2]){
                par[p2] = p1
                rank[p1]++
            } else if (rank[p2] > rank[p1]){
                par[p1] = p2
                rank[p2]++
            } else {
                par[p2] = p1
                rank[p1]++
            }

            return true
        }

        for(let [u, v] of edges){
            if(!union(u, v)){
                return [u,v]
            }
        }
        return []
    }
}
