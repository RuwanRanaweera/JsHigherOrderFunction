const companies = [
    {name: "company1", category: "finance", start:1992 , end:2001},
    {name: "company2", category: "retail", start:1980 , end:1995},
    {name: "company3", category: "auto", start:1995 , end:2005},
    {name: "company4", category: "retail", start:2005 , end:2020},
    {name: "company5", category: "technology", start:1997 , end:2015},
    {name: "company6", category: "finance", start: 1875, end:1915}
];

//{name: "", category: "", start: , end:},

const ages = [33,12,20,16,5,54,21,44];
//for loop
for(let i=0; i<companies.length; i++){
    console.log(companies[i]);
}    

//for each
companies.forEach(function(company) {
    console.log(company.name);
});

//filter

let canDrink = [];
for(let i=0; i<ages.length; i++) {
    if(ages[i]>=21){
        canDrink.push(ages[i]);
    }
}

const canDrink = ages.filter(function(age){
    if(age>=21){
        return true;
    }
});

const canDrink =ages.filter(ages=> ages>=21);
// console.log(canDrink);

const retailCompanies = companies.filter(function(company){
        if(company.category === 'finance'){
            return true;
        }
});

const   retailCompanies = companies.filter(company => company.category === 'finance');

// console.log(retailCompanies);


//get 90s companies

const eightCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start>5));
// console.log(lastedTenYears);

//map
// Create array of company name

const companyNames = companies.map(function(company){
    return company.name;

// });

const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`;

// });

// console.log(testMap);


const testMap = companies.map(company => 
    `${company.name} [${company.start} - ${company.end}]`

);

// console.log(testMap);


const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age*2);
console.log(ageMap);

console.log(companyNames);

//sort

const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }
    else
    {
        return -1;
    }
});

// console.log(sortedCompanies);

const sortedCompanies = companies.sort((a, b) =>(a.start> b.start ? 1: -1));
// console.log(sortedCompanies);

const sortAges = ages.sort((a, b)=> b-a);
// console.log(sortAges);


//reduce

let ageSum = 0;
for(let i=0; i< ages.length;i++){
    ageSum += ages[i];
}
// console.log(ageSum);

const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total year for all companies

const totalYears = companies.reduce(function(total, company){
 return total + (company.end - company.start);
}, 0);


const totalYears = companies.reduce((total, company)=>  total + (company.end - company.start), 0);


// console.log(totalYears);

//Combine methods

const combined =ages
.map(age => age*2)
.filter(age => age >= 40)
.sort((a, b) => a-b)
.reduce((a, b) => a+b, 0);

console.log(combined);
