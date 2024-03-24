const colors = [
    "#00AAFF",
    "#AA00FF",
    "#00AAFF"
]

const RandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

export const RandomColor = () => {
    return colors[RandomNumber(2)]
}