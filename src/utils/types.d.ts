export type StatKey = 'followers' | 'following';

export type AvatarProps = {
    size?: 'small' | 'default';
};

export interface Stats {
    followers: number,
    following: number,
}
// Homework 2 instead of constants folllowers and following, use enum
export enum StatsType {
    FOLLOWERS = 'followers',
    FOLLOWING = 'following',
}