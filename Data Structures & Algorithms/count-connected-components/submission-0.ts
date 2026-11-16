class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adj = Array.from({ length: n }, () => []);
        for (let [src, dest] of edges) {
            adj[src].push(dest);
            adj[dest].push(src);
        }

        const visited = new Set<number>();

        const dfs = (node) => {
            for(const nei of adj[node]){
                if(!visited.has(nei)){
                    visited.add(nei)
                    dfs(nei)
                }
            }
        };

        let res = 0

        for (let node = 0; node < n; node++) {
            if(!visited.has(node)){
                visited.add(node)
                dfs(node)
                res++
            }

        }

        return res;
    }
}
