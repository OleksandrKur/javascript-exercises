<<<<<<< HEAD
const findTheOldest = function(peopleArray) {
    let oldestPerson;
    let age = 0
    for (let person of peopleArray){
        if("yearOfDeath" in person){
            if (age < person.yearOfDeath - person.yearOfBirth){
                age = person.yearOfDeath - person.yearOfBirth;
                oldestPerson = JSON.parse(JSON.stringify(person));
            }
        }
        else{
            let date = new Date();
            let year = date.getFullYear();
            if (age < year - person.yearOfBirth){
                age = year - person.yearOfBirth;
                oldestPerson = JSON.parse(JSON.stringify(person));
            }
        }
    }

    return oldestPerson;
=======
const findTheOldest = function() {
    
>>>>>>> b67a79abc42119a41f9177174efbf272c07d2f2c
};

// Do not edit below this line
module.exports = findTheOldest;
