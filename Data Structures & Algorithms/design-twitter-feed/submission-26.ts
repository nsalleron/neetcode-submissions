class Twitter {
    followers = new Map<number, Set<number>>();
    posts = new Map<number, number[][]>();
    count = 0;
    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId: number, tweetId: number): void {
        const posts = this.posts.get(userId) ?? [];
        posts.push([this.count--, tweetId]);
        this.posts.set(userId, posts);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId: number): number[] {
        this.follow(userId, userId);

        const heap = new PriorityQueue((a, b) => a[0] - b[0]);

        for (let f of this.followers.get(userId)) {
            const posts = this.posts.get(f) ?? [];
            const index = posts.length - 1;
            if (index >= 0) {
                const [count, tweetId] = posts[index];
                heap.enqueue([count, f, tweetId, index - 1]); //next Index
            }
        }

        const res = [];
        while (res.length < 10 && heap.size() > 0) {
            const [, f, tweetId, nextIndex] = heap.dequeue();

            res.push(tweetId);
            if (nextIndex >= 0) {
                const posts = this.posts.get(f);
                const [count, tweetId] = posts[nextIndex];
                heap.enqueue([count, f, tweetId, nextIndex - 1]); //next Index
            }
        }

        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId: number, followeeId: number): void {
        const followers = this.followers.get(followerId) ?? new Set();
        followers.add(followeeId);
        this.followers.set(followerId, followers);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId: number, followeeId: number): void {
        const followers = this.followers.get(followerId) ?? new Set();
        followers.delete(followeeId);
        this.followers.set(followerId, followers);
    }
}
