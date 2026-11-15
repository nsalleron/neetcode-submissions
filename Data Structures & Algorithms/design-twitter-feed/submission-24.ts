class Twitter {
    follower = new Map<number, Set<number>>();
    posts = new Map<number, number[][]>();
    count = 0;

    postTweet(userId: number, tweetId: number): void {
        const posts = this.posts.get(userId) ?? [];
        posts.push([this.count--, tweetId]);
        this.posts.set(userId, posts);
    }

    getNewsFeed(userId: number): number[] {
        this.follow(userId, userId);

        const heap = new PriorityQueue((a,b) => a[0] - b[0]);

        const followers = this.follower.get(userId) ?? new Set();
    
        for (let u of followers.values()) {
            const posts = this.posts.get(u);
            if (posts !== undefined) {
                const index = posts.length - 1;
                const [count, tweetId] = posts[index];
                heap.enqueue([count, u, tweetId, index - 1]);
            }
        }

        const res = [];
        while (res.length < 10 && heap.size() > 0) {
            const obj = heap.dequeue();
            const [, u, tweetId, nextIndex] = obj;
            res.push(tweetId);
            const posts = this.posts.get(u) ?? [];
            if (nextIndex >= 0 && posts[nextIndex]) {
                const [newCount, newTweetId] = posts[nextIndex];
                heap.enqueue([newCount, u, newTweetId, nextIndex - 1]);
            }
        }

        return res;
    }

    follow(followerId: number, followeeId: number): void {
        const followSet = this.follower.get(followerId) ?? new Set();
        followSet.add(followeeId);
        this.follower.set(followerId, followSet);
    }

    unfollow(followerId: number, followeeId: number): void {
        const followSet = this.follower.get(followerId) ?? new Set();
        followSet.delete(followeeId);
        this.follower.set(followerId, followSet);
    }
}
