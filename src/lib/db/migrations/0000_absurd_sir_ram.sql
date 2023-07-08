CREATE TABLE `tweets` (
	`tweet_id` bigint PRIMARY KEY NOT NULL,
	`tweet_content` text,
	`username` varchar(256),
	`likes` int DEFAULT 0,
	`retweets` int DEFAULT 0,
	`view_count` int DEFAULT 1,
	`reply_to_tweet_id` bigint);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`fullname` text,
	`profilePic` text,
	`followers` int DEFAULT 0,
	`followings` int DEFAULT 0,
	`isVerified` boolean DEFAULT false,
	`twitter_username` varchar(256) NOT NULL);
--> statement-breakpoint
ALTER TABLE `tweets` ADD KEY `tweets_username_idx` (`username`) 
