class WordTrie {
    children = new Map<string, WordTrie>();
    word = false;
}

class WordDictionary {
    root: WordTrie;
    constructor() {
        this.root = new WordTrie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;
        for (let c of word) {
            if (!current.children.has(c)) {
                current.children.set(c, new WordTrie());
            }
            current = current.children.get(c);
        }
        current.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root;
        return this.dfs(word, 0, current);
    }

    dfs(word: string, index: number, node: WordTrie) {
        if (index === word.length) {
            return node.word;
        }

        let c = word[index];

        if (c === ".") {
            for (let wt of node.children.values()) {
                const res = this.dfs(word, index + 1, wt);
                if (res) {
                    return true;
                }
            }
            return false;
        } else {
            const nextNode = node.children.get(c);
            if (!nextNode) {
                return false;
            }
            return this.dfs(word, index + 1, nextNode);
        }
    }
}
