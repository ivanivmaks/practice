const user = {
  name: "Mango", 
  age: 2,
};
console.log(JSON.stringify(user));
const data = '{ "name": "Mango", "age": 2 }';
console.log(JSON.parse(data));

localStorage.setItem("my-data", JSON.stringify(user));

const savedData = localStorage.getItem("my-data");
console.log('savedData:', savedData);

const parseData = JSON.parse(savedData);
console.log("parseData:", parseData);