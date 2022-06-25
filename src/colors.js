module.exports = (loader) => {
loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
failedWalking: {
name: ["bright", "fgYellow", "underline"],
text: ["gray", "fgRed"]
},
typeError: {
command: ["bright", "fgYellow"],
type: ["fgYellow"],
text: ["bright", "fgRed"]
},
failLoad: {
command: ["bright", "fgMagenta"],
type: ["fgRed"],
text: ["bright", "fgRed"],
},
loaded: {
command: ["bright", "fgRed"],
type: ["bright", "fgWhite"],
text: ["bright", "fgBlue"]
},
}) 
}
