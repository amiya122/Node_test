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

const response={
    ruleKey:"SOLUTIO",
    ruleValue:"OFFBOARDING",
    ruleOperator:"!=="
};

let output=constraints.filter((obj)=>obj.ruleKey===response.ruleKey);
const {ruleKey,ruleValue,ruleOperator}=response;
if(output.length>0){
    output[0].ruleKey=ruleKey;
    output[0].ruleValue=ruleValue;
    output[0].ruleOperator=ruleOperator;
    console.log(output);
}else{
    constraints.push({ruleKey,ruleValue,ruleOperator});
    console.log(constraints);
}