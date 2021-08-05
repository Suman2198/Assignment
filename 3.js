var Employee =
    {
      company: 'Rohit'
    }
var Employee1 = object.create(Employee);
delete Employee1.company;
console.log( Employee1.company);

output-
 "Rohit"
