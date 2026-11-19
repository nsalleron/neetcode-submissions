class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const par: number[] = Array.from({length: n}, (_,i)=>i)
        const rank: number[] = Array.from({length: n}, () => 0)

        const find = (n: number) => {
            let p = par[n]
            while(p !== par[p]){
                par[p] = par[par[p]]
                p = par[p]
            }
            return p
        }

        const union = (n1:number, n2:number) => {
            const p1 = find(n1)
            const p2 = find(n2)

            if(p1 === p2){
                return false
            }

            if(rank[p1] > rank[p2]){
                par[p2] = p1
            } else if(rank[p1] < rank[p2]){
                par[p1] = p2
            } else {
                par[p1] = p2
                rank[p2] += 1
            }

            return true
        }

        let count = n
        for(let [u, v] of edges){
            if(union(u, v)){
                count--
            }
        }

        return count
    }
}
