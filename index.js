var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'popular',
  lang: 'en'
}

T.get('search/tweets', params, function(err, data, response) {
  if (!err) {
    for (let i = 0; i < data.statuses.length; i++) {
      let tweetId = data.statuses[i].id_str;
      let screen_name = data.statuses[i].user.screen_name;
      let replyText = `@${screen_name} Your custom comment goes here`;
      T.post('statuses/update', {
        status: replyText,
        in_reply_to_status_id: tweetId
      }, function(err, response) {
        if (err) {
          console.log(err);
        } else {
          console.log(`Replied to ${screen_name}`);
        }
      });
    }
  } else {
    console.log(err);
  }
});
