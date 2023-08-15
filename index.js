
let axios = {
  get(){
    let promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{resolve({g:1,gh:2,mess:'hello'})},3000)
    })
    return promise
  }
}
axios.get()
  .then((data)=> {
    console.log(data.mess)
    return data.mess
  })
  .then((data)=> {
    console.log(data)

  })
  .then((data)=> {
    console.log(data)
  })
  .catch(()=>console.error('nonono'))

// let ab = {
//   sum(a, b) {
//     console.log(a+b)
//     return this
//     // return ab
//   }
// }
// let abs= {
//   result : 0,
//   sum(a) {
//  this.result +=a
//     return this
//   },
//   minus(a) {
//  this.result -=a
//     return this
//   },
//   mult(a) {
//  this.result *=a
//     return this
//   }
// }
// ab.sum(4,5).sum(4,6).sum(4,7)
// abs.sum(4)
//   .minus(2)
//     .mult(10)
// console.log(abs.result)
//это chaining


