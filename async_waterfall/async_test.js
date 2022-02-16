const async=require("async");

async.waterfall([
    function firstStep(done) {
      done(null, 'Value from step 1');
    },
    function secondStep(previousResult, done) {
      console.log(previousResult);
      done(null);
    }
  ],
  function (err) {});