const companies = [
    {name: "Comapnay-1", catagory:"Trading", Start:1899, end: 2005},
    {name: "Comapnay-2", catagory:"technology ", Start:2001, end: 2021},
    {name: "Comapnay-3", catagory:"cyber", Start:1999, end: 20010},
    {name: "Comapnay-4", catagory:"Mechanical", Start:1972, end: 2018},
    {name: "Comapnay-5", catagory:"Auto", Start:2001, end: 2021},
    {name: "Comapnay-6", catagory:"Fabric", Start:2002, end: 2021},
    {name: "Comapnay-7", catagory:"Clouds services", Start:2015, end: 2022},
    {name: "Comapnay-8", catagory:"Bike and wheels", Start:2001, end: 2021},
    {name: "Comapnay-9", catagory:"Auto", Start:2005, end: 2011},
];

const age =[21, 16, 89, 59 ,18, 19, 22, 24, 29, 30];


const log = console.log;
const testArr=[];
let testVar;
// console.log(companiesObj)
for (let i = 0; i < companies.length; i++) {
    // log(companies[i]);
//    testArr.push (companies[i]);
    
};
// log(test);
 companies.forEach(element => {
    return element;
});
// filter 

for (let i = 0; i < age.length; i++) {
    
    if(age[i]<= 22){

        testArr.push(age[i])
        
    }
    
}
testVar = age.filter(function(x){
    if (x > 22 )
    return true;
});
log(testVar)
testVar = age.filter(x => x <= 22);
log(testVar);