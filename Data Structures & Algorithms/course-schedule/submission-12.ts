class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList = Array.from({length: numCourses}, () => [])

        for(let [crs, pre] of prerequisites){    
            adjList[crs].push(pre)
        }

        const visited = new Set<number>()
        const dfs = (crs:number) => {
            if(visited.has(crs)){
                return false
            }

            if(adjList[crs].length === 0){
                return true
            }

            visited.add(crs)

            for(let nei of adjList[crs]){
                if(!dfs(nei)){
                    return false
                }
            }

            visited.delete(crs)
            adjList[crs] = [];

            return true
        }

        for(let i = 0; i < numCourses; i++){
            if(!dfs(i)){
                return false
            }
        }

        return true

    }
}
