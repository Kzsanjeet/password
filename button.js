
function button(){
    const defaultColor = document.getElementById("defaultColor")
    const changeColor = getChangeColor();
    defaultColor.style.backgroundColor = changeColor;
}

function getChangeColor(){
    let hexa = "0123456789ABCDEF"
    let has = "#"
    for (let i = 0; i<6; i++){
        has += hexa[Math.floor(Math.random()*16)]
    }
    return has
}
console.log(getChangeColor())

function button(){
    let color = document.getElementById("originalColor")
    let getColor = getChangeColor()
    color.style.backgroundColor = getColor
}
function getChangeColor(){
    let array1 = ["red","green","yellow","orange"]
    for (let i = 0; i< array1.length; i++){
         array1[Math.floor(Math.random()*[i])]
    }
    return array1
}