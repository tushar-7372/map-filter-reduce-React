import emoji from "./emojipedia";
//using map function
// var data=[] ;
const data = emoji.map(function (x) {
  return x.meaning.substring(0, 100);
});

console.log(data);
