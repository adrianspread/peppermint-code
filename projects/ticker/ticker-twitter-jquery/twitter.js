const secrets = require("./secrets");
const https = require("https");

module.exports.getToken = function() {
    return new Promise((resolve, reject) => {
        // this function gets the bearerToken from twitter...
        let creds = `${secrets.consumerKey}:${secrets.consumerSecret}`;
        let encodedCreds = Buffer.from(creds).toString("base64");

        const options = {
            host: "api.twitter.com",
            path: "/oauth2/token",
            method: "POST",
            headers: {
                Authorization: `Basic ${encodedCreds}`,
                "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8"
            }
        };
        const cb = function(response) {
            console.log("response: ", response.statusCode);
            if (response.statusCode !== 200) {
                // this means something went wrong....
                reject(response.statusCode);
            }
            var body = "";
            response.on("data", function(chunk) {
                body += chunk;
            });

            response.on("end", function() {
                // console.log("body: ", body);
                let parsedBody = JSON.parse(body);
                console.log("parsedBody: ", parsedBody);
                resolve(parsedBody.access_token);
            });
        };

        const req = https.request(options, cb);

        req.end("grant_type=client_credentials");
    });
};

module.exports.getTweets = function(bearerToken, source) {
    return new Promise((resolve, reject) => {
        // this function gets tweets from twitter api.
        //console.log("inside getTweets");
        const options = {
            host: "api.twitter.com",
            path: `/1.1/statuses/user_timeline.json?screen_name=+${source}&tweet_mode=extended`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        };

        const cb = function(response) {
            //            console.log("response: ", response.statusCode);
            if (response.statusCode !== 200) {
                // this means something went wrong....
                reject(response.statusCode);
            }
            var body = "";
            response.on("data", function(chunk) {
                body += chunk;
            });

            response.on("end", function() {
                // console.log("body: ", body);
                let parsedBody = JSON.parse(body);
                //    console.log("parsedBody: ", parsedBody);
                resolve(parsedBody);
            });
        };

        const req = https.request(options, cb);
        req.end(); //czemu tu nie ma zawartosci?? a wczesniej jest??
    });
};

module.exports.filterTweets = function(tweets) {
    // this function filters(cleans up) the response we get from Twitter.
    let headlines = [];
    //    console.log(tweets[0].user.name);
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length > 0) {
            let justText = tweets[i].full_text.replace(
                tweets[i].entities.urls[0].url,
                ""
            );

            let obj = {
                title: `${justText} (${tweets[i].user.name})`,
                link: `${tweets[i].entities.urls[0].url}`
            };
            headlines.push(obj);
        }
    }
    return headlines;
};
