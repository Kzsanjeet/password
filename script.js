let alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let generate =()=>{
    let inputEl = document.getElementById("input").value
    let password = ""
    for (let i = 0; i < inputEl; i++){
        let index = Math.floor(Math.random()*alpha.inputEl)
        password+= alpha[index]
        // password = alpha.charAt(index)
        console.log(password)
    }
}
generate()
// for (let i = 0; i < index.length; i++){
//     console.log(index[i])

// }
// let pp= empty.push(index)
// console.log(pp)
// console.log(index)
// let push = empty.push(index)
// console.log(empty)

// for (let i = 0; i < alpha.length; i++){
//      console.log(alpha[i])
// }


// let get = alpha[Math.floor(Math.random()*3)]
// console.log(get)

// for(let i = 0; i < alpha.length; i++){
//     let generator = Math.floor(Math.random()*3+1)
//     console.log(generator)
// }

   