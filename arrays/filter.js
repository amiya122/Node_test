let constraints=[
    {
     ruleKey: "SOLUTION",
     ruleValue: "ONBOARDING",
     ruleOperator: "=="
    },
    {
     ruleKey: "QCPASS",
     ruleValue: "True",
     ruleOperator: "=="
    },
    {
     ruleKey: "TXNCOUNTINCYCLE",
     ruleValue: 2,
     ruleOperator: ">="
    },
    {
     ruleKey: "QRCOUNT",
     ruleValue: 0,
     ruleOperator: ">"
    }
];

if(constraints.length>4){
    constraints.pop();
}

const {ruleKey,ruleValue,ruleOperator}={
    ruleKey:"SOLUTION",
    ruleValue:"OFFBOARDING",
    ruleOperator:"!=="
};

let output=constraints.filter((obj)=>obj.ruleKey===ruleKey);

if(output.length>0){
    constraints.map((obj)=>{
        if(obj.ruleKey===ruleKey){
            obj.ruleValue=ruleValue;
            obj.ruleOperator=ruleOperator;
        }
    });
}else{
    constraints.push({ruleKey,ruleValue,ruleOperator});
}

console.log(constraints);