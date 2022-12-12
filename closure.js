function Plus(n) {
    return function(num){
        return `Your result: ${num + n}`;
    }
}

const addFive = Plus(5);
const addTen = Plus(10);

function urlSite (domain){
    return function(url){
        return `Your Website: https://${url}.${domain}/`;
    }
}

const comDomain = urlSite('com');
const orgDomain = urlSite('org');
const uaDomain = urlSite('ua');


console.log(addFive(2) + '\n' + addTen(5));
console.log(comDomain('youtube'))
