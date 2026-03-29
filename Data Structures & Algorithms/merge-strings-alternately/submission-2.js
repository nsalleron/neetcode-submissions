class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l1 = 0
        let l2 = 0
        const res = []
        while(l1 < word1.length || l2 < word2.length){
            res.push(word1[l1++], word2[l2++]);
        }

        res.push(word1.slice(l1));
        res.push(word2.slice(l2));
        
        return res.join('')



    }
}
