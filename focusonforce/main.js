//for of loop lets us break when forEach does not

const alphabets =[
    {name: "A"},
    {name: "B"},
    {name: "C"},
    {name: "D"}
]

for(let alphabet of alphabets){
    if (alphabet.name === "C"){
        break
    }
    else
    console.log("Alphabet is",alphabet.name)
}