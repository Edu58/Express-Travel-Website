const fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
]


const RandomFortune = () => {
     return fortunes[Math.floor(Math.random() * fortunes.length)]
}

/* lets you access the content outside this module */
module.exports = RandomFortune