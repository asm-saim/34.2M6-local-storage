const addRandomNumbers = () => {
    const numbers = Math.ceil(Math.random() * 100)
    console.log(numbers);
    localStorage.setItem("Number", numbers)
}

//get the random number:
const showRandomNumbers = () => {
    const showValue = localStorage.getItem("Number")
    console.log("Random Numbers added:", showValue)
}

//assign non-primitive value: object

//SET OBJECT:
const setObjectToLS = () => {
    const friends = { name: "Abdul karim", age: 45, location: "Pabna" };
    const ObjectJSON = JSON.stringify(friends)
    const setObj = localStorage.setItem("friends", ObjectJSON);
    console.log(setObj)
}

// GET OBJECT
const getObj = () => {
    const getTheObject = localStorage.getItem("friends");
    const ObjConvert = JSON.parse(getTheObject);
    console.log(ObjConvert);
}