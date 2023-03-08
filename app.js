const pianoKeys = document.querySelectorAll('.key');
const blackKeysPosition = [2,4,7,9,11,14,16,19,21,23];
const whiteKeysPosition = [1,3,5,6,8,10,12,13,15,17,18,20,22,24]
function playSound(color, i) {
    const number = color === 'black' ? blackKeysPosition[i] : whiteKeysPosition[i-10]
    const keyURL = color === 'black' ? "media/blackkeys/key" + number + ".mp3" : 
    "media/whitekeys/key" + number + ".mp3" ;
    new Audio(keyURL).play();
    console.log(keyURL,i,color);
}

pianoKeys.forEach((pianoKey, i) => {
    const color = i <= 9 ? 'black' : 'white'
    pianoKey.addEventListener('click', () => playSound(color,i));
})