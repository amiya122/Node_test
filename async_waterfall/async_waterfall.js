console.log("Entering into code!");

const async=require("async");

async.waterfall([
    (done)=>{
        done(null,'Value 1');
    },
    (value1,done)=>{
        console.log(value1);
        done(null,'Value 2');
    },
    (value2,done)=>{
        console.log(value2);
        done(null,'done');
    }
],(err)=>{
    if(err){
        throw new Error(err);
    }
});