

function greeting(){

  let time = new Date().getHours();
  let result = 'good day';

  if(time < 12){
 result = "good morning";
  }
  else if(time < 18){
   result = 'good afternoon'
  }else{
   result = 'goodevening'
  }

  return result;
}

//lets you send info to the document requesting, needs to be at the end
// module.exports = {
//   greet: greeting
// }
module.exports = greeting();
