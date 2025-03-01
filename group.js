const words = [
    "cherry", "chocolate", "cloud",
    "dog", "dolphin", "dragon",
    "elephant", "eclipse", "engine",
    "flame", "forest", "fortune",
    "galaxy", "garden", "gravity",
    "harmony", "hero", "horizon",
    "ice", "island", "illusion",
    "jungle", "journey", "jewel",
    "kite", "king", "keyboard",
    "legend", "lighthouse", "lucky",
    "mountain", "mystery", "magic",
    "notebook", "nebula", "night",
    "ocean", "octopus", "orbit",
    "puzzle", "planet", "penguin",
];


function groupByFirstLetter(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];  // cherry
        const key = word[0]     // c

        const existingKeys = Object.keys(obj) // ['c', 'd']
        const hasKeyInArray = existingKeys.includes(key)

        if (!hasKeyInArray) {
            obj[key] = []
        }

        obj[key].push(word)
    }

    return obj
}


console.log(groupByFirstLetter(words))