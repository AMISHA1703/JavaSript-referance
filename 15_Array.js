// more methods of array:

const students=["Amisha","Supriya","Anisha"];
const More_Students=new Array("Jaya","Anchal");

// methods

// 1 push:
students.push(More_Students);
console.log(students);
console.log(students[0]);
console.log(students[2]);
console.log(students[3]);
console.log(students[3][0]);
console.log(students[3][1]);


//2: concat:
 const new_student=students.concat(More_Students);
 console.log(new_student);

 const new_student1=More_Students.concat(students);
 console.log(new_student1);

 //3: spread:
 const spreadArray=[...students,...More_Students];
 console.log(spreadArray);

 //4: flat

 console.log("A",new_student.flat(1));

 console.log(Array.isArray(new_student));
 console.log(Array.isArray("amisha"));

 //5: from

 console.log(Array.from("Amisha"));

 //6: of

 const var1=1;
 const var2=2;
 const var3=3;
 console.log(Array.of());

 console.log(Array.of(var1,var2,var3));
//7:

 console.log(students['2']);
 console.log(Object.keys(students));
 const iter=students.keys();
 console.log(iter);




