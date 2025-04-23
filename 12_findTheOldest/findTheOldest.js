const getAge = function(person) {
    person.yearOfDeath ??= new Date().getFullYear();
};

const findTheOldest = function(person) {
    const peopleOldestToYoungest = people.toSorted(
        (person, nextPerson) => getAge(nextPerson) - getAge(person),
    );

    const oldestPerson = peopleOldestToYoungest[0];
    return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
