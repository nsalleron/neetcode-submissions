class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
        if (!wordList.includes(endWord)) return 0;

        const adj = {};

        wordList.push(beginWord);
        for (let w of wordList) {
            for (let i = 0; i < beginWord.length; i++) {
                const wordStar = w.slice(0, i) + "*" + w.slice(i + 1);
                if (!adj[wordStar]) {
                    adj[wordStar] = [];
                }
                adj[wordStar].push(w);
            }
        }

        const visited = new Set()
        const queue = [beginWord];
        let front = 0;
        let res = 1
        while (queue.length > front) {
            const len = queue.length - front;
            for (let i = 0; i < len; i++) {
                const node = queue[front++];

                visited.add(node)

                if(node === endWord){
                    return res
                }

                for (let i = 0; i < node.length; i++) {
                    const wordStar = node.slice(0, i) + "*" + node.slice(i + 1);
                    if (!adj[wordStar]) {
                        adj[wordStar] = [];
                    }

                    for(let w of adj[wordStar]){
                        if(visited.has(w)) continue
                        queue.push(w)
                    }
                }
            }
            res++
        }
        return 0
    }
}
