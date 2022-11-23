let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [john, pete, mary];
let usersMapped = [];

users.forEach((item) => {
  const fullName = item.name + " " + item.surname;
  let id = item.id;
  let temp = { fullName: fullName, id: id };
  // console.log(temp);
  usersMapped.push(temp);
  // console.log(usersMapped);
});
alert(usersMapped[2].id);
alert(usersMapped[2].fullName);
