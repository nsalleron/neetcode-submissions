class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const par = Array.from({ length: edges.length }, (_, i) => i);
        const rank = Array.from({ length: edges.length }, () => 0);

        const find = (n: number) => {
            let p = par[n];
            while (p !== par[p]) {
                par[p] = par[par[p]];
                p = par[p];
            }

            return p;
        };


        const union = (n1: number, n2: number) => {
            const p1 = find(n1);
            const p2 = find(n2);

            if (p1 === p2) {
                return false;
            }

            if (rank[p1] > rank[p2]) {
                par[p2] = p1;
                rank[p1]++;
            } else if (rank[p2] > rank[p1]) {
                par[p1] = p2;
                rank[p2]++;
            } else {
                par[p2] = p1;
                rank[p1] ++
            }

            return true
        };


        for(let [src, dest] of edges){
            if(!union(src, dest)){
                return [src, dest]
            }
        }

        return []
    }
}
