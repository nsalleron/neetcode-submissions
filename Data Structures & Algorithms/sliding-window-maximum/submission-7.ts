class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        const output = [];
        const q: number[] = []; // stocke des INDICES, valeurs décroissantes

        let l = 0; // début de la fenêtre
        for (let r = 0; r < nums.length; r++) {
            // 1. Retirer du BACK tant que la valeur est plus petite (monotonic)
            while (q.length > 0 && nums[q[q.length - 1]] < nums[r]) {
                q.pop();
            }

            q.push(r);

            // 2. Retirer du FRONT si l'indice est hors fenêtre
            if (q[0] < l) {
                q.shift();
            }

            if (r + 1 >= k) {
                output[l] = nums[q[0]];
                l++;
            }
        }

        return output;
    }
}
