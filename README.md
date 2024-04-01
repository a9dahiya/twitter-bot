# Twitter Reply Bot

## Description

This is a simple Twitter bot built with Node.js that replies to tweets based on a specified search query.

## Setup

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Create a Twitter Developer account and create an app to get your API keys.
4. Create a `config.js` file in the root directory with your Twitter API keys:

   ```javascript
   module.exports = {
     consumer_key: 'YOUR_CONSUMER_KEY',
     consumer_secret: 'YOUR_CONSUMER_SECRET',
     access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
     access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
   };

Edit the replyText variable in bot.js to customize the reply message.
Run the bot using node bot.js.

## Configuration
q: The search query to find tweets to reply to.
count: The number of tweets to retrieve.
result_type: The type of results to return (e.g., popular, recent).
lang: The language of the tweets to retrieve.

## Usage
This bot searches for tweets based on the specified parameters and replies to them with a custom message. Make sure to respect Twitter's guidelines and avoid spamming.
