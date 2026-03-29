class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l1 = 0
        let l2 = 0
        let k = 0
        const newWord = []
        while(l1 < word1.length || l2 < word2.length){
            newWord[k] = word1[l1]
            newWord[k + 1] = word2[l2]

            l1 ++
            l2 ++
            k+=2
        }


        while(word1.length > l1){
            newWord[l1] = word1[l1]
            l1++
        }

        while(word2.length > l2){
            newWord[l2] = word2[l2]
            l2++
        }

        return newWord.join('')



    }
}
