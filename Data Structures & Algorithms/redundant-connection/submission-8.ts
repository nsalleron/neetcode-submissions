class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const par = Array.from({length: edges.length + 1}, (_, i) => i)
        const rank = Array.from({length: edges.length + 1}, () => 1)

        const find = (n: number) => {
            let p = par[n]
            while(p !== par[p]){
                par[p] = par[par[p]]
                p = par[p]
            }

            return p
        }

        const union = (n1:number, n2: number) => {
            const p1 = find(n1)
            const p2 = find(n2)

            if(p1 === p2){
                return false
            }
            if(rank[p1] > rank[p2]){
                par[p2] = par[p1]
                rank[p1] += rank[p2]
            } else {
                par[p1] = par[p2]
                rank[p2] += rank[p1]
            }

            return true
        }

        for(let [n1, n2] of edges){
            if(!union(n1, n2)){
                return [n1, n2]
            }
        }

        return []
    }
}
