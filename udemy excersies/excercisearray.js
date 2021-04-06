// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  const newarrforeach = [];
  const newarray1 = array.forEach((user)=>{
      newarrforeach.push(user.username)
  })
  console.log(newarrforeach);
  
   const newarray = array.map((item)=>{
       return (item.username);
   })
   console.log(newarray)

   const arr = [2,4,56,44]
   const double = [];
   const newarr = arr.forEach((num) =>{
       return double.push(num *2)
   })
   console.log(double);// foreach have to save in new array then only it gives output or it gives undefined

   const newarr2 = arr.filter((num)=>{return num >3})// output [4,56,44]
   const newarr3 = arr.filter((num)=>{return num >10})// output [56,44]
   const newarr4 = arr.filter((num)=>{return num >50})// output [56]
   console.log(newarr2);
   console.log(newarr3);
   console.log(newarr4);

   const arrreduce = arr.reduce((acc, num)=>{return acc*num})
   const arrreduce2 = arr.reduce((acc, num)=>{return acc+num})
   console.log(arrreduce)
   console.log(arrreduce2)