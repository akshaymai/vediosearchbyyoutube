const Request=require('request')
const fs=require(fs)
// const fetch=require('fetch')


var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=7a20dfbb3a424f96b843a220f02a958d';
// var req = new Request(url);
// // window.fetch(req).then((res)=>{
// //     console.log("My Response is:",res)
// // })
// //     // .then(function(response) {
// //     //     console.log(response.json());
// //     // })


// // z.fetch(req).then((res)=>{
// //     console.log("My response is :",res)
// // }).catch((err)=>{
// //     console.log(err)
// // })
// console.log("req",req)
Request(url,(err,res,data)=>{

// console.log("Error:",err)
// console.log("res",res)
console.log("Data",data)

})