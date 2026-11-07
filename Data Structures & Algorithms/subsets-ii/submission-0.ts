class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const res = [];

        const sortedNums = nums.sort((a, b) => a - b);

        const dfs = (start: number, current: number[]) => {
            // Chaque appel représente un sous-ensemble valide
            res.push([...current]);

            // On ne regarde que les éléments à partir de start
            for (let i = start; i < sortedNums.length; i++) {
                // Évite les branches identiques au même niveau
                if (i > start && sortedNums[i] === sortedNums[i - 1]) {
                    continue;
                }

                // Choisir nums[i]
                current.push(sortedNums[i]);

                // Continuer avec les éléments après i
                dfs(i + 1, current);

                // Annuler le choix avant d'essayer l'élément suivant
                current.pop();
            }
        };

        dfs(0, []);

        return res;
    }
}
