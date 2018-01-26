let herProfile = {
    name: "Elisabeth",
    age: 36
};
let name=herProfile.name;
let age=herProfile.age;
let {age,name} = herProfile;
console.log(name,age);
let {name:x,age:y} = herProfile;
console.log(x,y);
let {age=18,familyName="de Grote",name="Karel"} = herProfile;
console.log(age,name,familyName);
let ar = ["een","twee","drie","vier","vijf"];
let [pink,,middenvinger] = ar;
console.log(pink,middenvinger);
herProfile = {
    name: "Elisabeth",
    age: 36,
    address: {
        zip: 2000,
        community: "Antwerp"
    }
};
let {address:{community}} = herProfile;
console.log(community); //Antwerp
