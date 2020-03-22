const express = require("express");
const app = express();
const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));

app.get("/data.json", (req, res) => {
    getToken().then(token => {
        // we're using promise.all to make 3 requests to Twitter simultaneously
        // Promise.all takes in an array of promises as an argument
        return Promise.all([
            getTweets(token, "bbcworld"),
            getTweets(token, "nytimes"),
            getTweets(token, "forbes")
        ])
            .then(results => {
                // 'then' will only run when we get all 3 responses (when they're resolved)
                // results will look something like this: [ [], [], [] ];

                let bbcworld = results[0];
                let nytimes = results[1];
                let forbes = results[2];

                // we want to merge all the arrays into a single one:
                // #1 -------- using concat --------
                //let mergedResults = bbcworld.concat(nytimes, forbes);

                // #2 --------- using the spread operator --------
                let mergedResults = [...bbcworld, ...nytimes, ...forbes];

                let sorted = mergedResults.sort((a, b) => {
                    return new Date(b.created_at) - new Date(a.created_at);
                });

                // b - a: reverse chronological order (most recent first)
                // a - b: chronological order (old -> new)

                // send sorted / filtered tweets to ticker
                res.json(filterTweets(sorted));
            })
            .catch(err => {
                console.log("err in catch: ", err);
                res.sendStatus(500);
            });
    });
});

app.listen(8080, () => console.log("Twitter ticker up and running!"));
