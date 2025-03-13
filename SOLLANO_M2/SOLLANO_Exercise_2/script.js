const person = {
    name: "Woody",
    age: 21,
    hobbies: ["Reading", "Playing", "Sleeping"]
};

document.getElementById('output').textContent = JSON.stringify(person, null, 2);
