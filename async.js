


const sentence = "hello there from lighthouse labs"
//console.log (typeof(sentence))


// for (const char of sentence) {
//   setTimeout (() => {
//     process.stdout.write (char)
//   }, 1000)

// }

for (let i=0; i < sentence.length; i++) {
  //console.log (sentence[i])
  setTimeout (() => {
    process.stdout.write(sentence[i])
  }, 100 * i)
  
}

setTimeout (() => {
  console.log ("\n")
}, 100 * ( sentence.length +1))








//console.log ("\n")