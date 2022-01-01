// Object declaration

let result = {
    A: [

    ],
    B: [

    ],
    C: [

    ],
    D: [

    ]
};

// Main vaxTrail function

const vaxTrail = (person) => {
    person.forEach(prsn => {
        const { name, age, temperature } = prsn;

        if (age >= 20 && age <= 30 && temperature < 100) {
            result.A.push({
                name: name,
                age: age,
                temperature: temperature
            })
            return;
        }
        else if (age >= 31 && age <= 40 && temperature < 100) {
            result.B.push({
                name: name,
                age: age,
                temperature: temperature
            })
            return;
        }
        else if (age >= 41 && age <= 50 && temperature < 100) {
            result.C.push({
                name: name,
                age: age,
                temperature: temperature
            })
            return;
        }
        else {
            result.D.push({
                name: name,
                age: age,
                temperature: temperature
            })
            return;
        }
    });
};

// Testing array input

const person = [
    {
        name: 'Biplap',
        age: 22,
        temperature: 98
    },
    {
        name: 'Paul',
        age: 42,
        temperature: 98
    },
    {
        name: 'Sunil',
        age: 21,
        temperature: 98
    },
    {
        name: 'Kat',
        age: 41,
        temperature: 98
    },
    {
        name: 'Rahul',
        age: 37,
        temperature: 99
    },
    {
        name: 'Nayem',
        age: 50,
        temperature: 100
    },
    {
        name: 'Kabir',
        age: 36,
        temperature: 99
    },
    {
        name: 'Sabnaj',
        age: 51,
        temperature: 101
    }
];

// Function call

vaxTrail(person);

console.log(result);