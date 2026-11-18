class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const preMap = new Map<number, number[]>();
        for(let i = 0; i < numCourses; i++){
            preMap.set(i, [])
        }
        for(let [src, pre] of prerequisites){
            preMap.get(src).push(pre)
        }

        const visiting = new Set();

        const dfs = (src) => {
            if(visiting.has(src)){
                return false
            }
            if(preMap.get(src).length === 0){
                return true
            }

            visiting.add(src)

            for(let pre of preMap.get(src)){
                if(!dfs(pre)){
                    return false
                }
            }

            visiting.delete(src)
            preMap.set(src, [])

            return true;
        };

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false;
            }
        }

        return true;
    }
}
