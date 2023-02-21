// Using for-in loop method:
var studentname={
    "name":"john doe",
    "age":"32",
    "year":"2018",
    "address":"san fransico",
  };
  for (var a in studentname){
    console.log(a,studentname[a])
}

//   Using for loop method:
var studentname=[{
  "name":"john doe",
  "age":"32",
  "year":"2018",
  "address":"san fransico",
}];

for(var i=0;i<studentname.length;i++){
  console.log(studentname[i]);
}