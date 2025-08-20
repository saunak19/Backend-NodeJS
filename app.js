// let a = [10,1,2,6,4,5];
// let b = [8,7,9,6,1,4,2];
// let unique = [];

// let margeAB = a.concat(b);

// for(let i=0; i<margeAB.length; i++){
//     for(let j=0; j<i; j++){
//         if(margeAB[i]<margeAB[j]){
//             [margeAB[i],margeAB[j]]=[margeAB[j],margeAB[i]]
//         }
//     }
// }
// let i=0;
// let j=1;
// for(let k=0; k<margeAB.length-1;k++){
//     if(margeAB[i]==margeAB[j]){
//         unique.push(margeAB[k])
//     }
//     i++;
//     j++;
// }
// console.log(unique)

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running");
});

server.listen(3000, () => {
  console.log(`Server is running`);
});
