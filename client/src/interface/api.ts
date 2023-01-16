export type FeedResponse = Tweet[]

export type FeedResponseRaw = {
    id: number;
    body: string;
    user: User;
    comments: any[];
    createdAt: string;
}[]

export type User = {
    name: string;
    username: string;
    profilePicture: string;
}

export type Tweet = {
    id: number;
    body: string;
    user: User;
    comments: any[];
    createdAt: Date;
}

export type TweetRaw = {
    id: number;
    body: string;
    user: User;
    comments: any[];
    createdAt: string;
}

export type UserResponse = User & {
    tweets: Tweet[]
}
