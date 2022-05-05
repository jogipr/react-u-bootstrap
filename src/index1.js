
const test=getName("");

function getName(name){
  return name;
}

getLastName("");
const getLastName=function(lastName){
  return lastName;
}


//if(!Array.prototype.myFilter)
Array.prototype.myFilter=function(callback,context){
  let output =[];
  this.forEach(item =>{
      if(callback(item)){
        output.push(item);
      }
  })
  return output
}


["1","2"].myFilter((item)=>  item=="1")