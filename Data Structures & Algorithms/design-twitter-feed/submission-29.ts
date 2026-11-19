class Twitter {
    tweetsMap = new Map<number, number[][]>();
    followMap = new Map<number, Set<number>>();
    numberOfNews = 10;
    date = 0;

    postTweet(userId: number, tweetId: number): void {
        const tweets = this.tweetsMap.get(userId) ?? [];
        tweets.push([this.date--, tweetId]);
        this.tweetsMap.set(userId, tweets);
    }

    getNewsFeed(userId: number): number[] {
        this.follow(userId, userId);

        const followees = this.followMap.get(userId);

        const maxHeap = new PriorityQueue((a, b) => a[0] - b[0]);

        for (let user of followees) {
            const tweets = this.tweetsMap.get(user) ?? [];
            const index = tweets.length - 1;

            if (index >= 0) {
                const [date, tweetId] = tweets[index];
                maxHeap.enqueue([date, tweetId, user, index - 1]);
            }
        }

        let res = [];
        while (maxHeap.size() > 0 && res.length < this.numberOfNews) {
            const [, tweetId, user, nextTweet] = maxHeap.dequeue();

            res.push(tweetId);

            if (nextTweet >= 0) {
                const tweets = this.tweetsMap.get(user);
                const [date, tweetId] = tweets[nextTweet];

                maxHeap.enqueue([date, tweetId, user, nextTweet - 1]);
            }
        }

        return res;
    }

    follow(followerId: number, followeeId: number): void {
        const followSet = this.followMap.get(followerId) ?? new Set();
        followSet.add(followeeId);
        this.followMap.set(followerId, followSet);
    }

    unfollow(followerId: number, followeeId: number): void {
        const followSet = this.followMap.get(followerId) ?? new Set();
        followSet.delete(followeeId);
        this.followMap.set(followerId, followSet);
    }
}
