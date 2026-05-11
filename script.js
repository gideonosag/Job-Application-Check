"use strict";

let apply;

const retirementAge = (birthYear, name, location) => {
  

  const age = 2026 - birthYear;

 

  let message = `My name is ${name}, I am ${age} years old and i recide in ${location}`;

  if (location !== "United Kingdom") {
    apply = " Don't Apply!";
  } else {
    apply = "You can Apply!";
  }
  return message;
};
console.log(retirementAge(1976, "Gloria Dingwall", "Canada"));
console.log(apply);

console.log(retirementAge(2002, "Gideon Efosa", "United Kingdom"));
console.log(apply);

console.log(retirementAge(1995, "Precious Freeman", "South-Africa"));
console.log(apply);
