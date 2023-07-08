import { mysqlTable, serial, text, varchar, int, bigint, boolean } from 'drizzle-orm/mysql-core'

/**
 * This is a sample schema.
 * Replace this with your own schema and then run migrations.
 */

export const users = mysqlTable('users', {
  id: serial('id').primaryKey(),
  name: text('fullname'),
  profilePic: text('profilePic'),
  followers: int('followers').default(0),
  followings: int('followings').default(0),
  isVerified: boolean('isVerified').default(false),
  username: varchar("twitter_username", { length: 256 }).notNull(),
})

export const tweets = mysqlTable('tweets', {
  id: bigint('tweet_id', { mode: "bigint" }).primaryKey(),
  content: text('tweet_content'),
  username: varchar('username', { length: 256 }).references(() => users.username),
  likes:bigint('likes', { mode: "bigint" }).primaryKey(),
  retweets:bigint('retweets', { mode: "bigint" }).primaryKey(),
  viewCount:bigint('view_count', { mode: "bigint" }).primaryKey(),
  reply_to_tweet_id : bigint('reply_to_tweet_id', { mode: "bigint" })
})

