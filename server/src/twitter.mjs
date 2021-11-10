import Twitter from 'twitter-lite';

// This is just to make it work for now
// This will then be moved to another file so we don't expose your information
// const twitterAPI :{
//   consumerKey :'',
//   consumerSecret : '',
//   accessTokenKey : 'enter key',
//   accessTokenSecret: ''
// }

export const getTweets = () =>{
  console.log(twitterUrl)

//hit the url
//response => success || error
//log the data
};

export const client = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    consumer_key: "abc", // from Twitter.
    consumer_secret: "def", // from Twitter.
    access_token_key: process.env.BEARER, //twitterAPI.accessTokenKey, // from your User (oauth_token)
    access_token_secret:  process.env.API_KEY_SECRET//twitterAPI.accessTokenSecret// from your User (oauth_token_secret)
  });