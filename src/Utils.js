
const capitalize = (text) => {
    if(!text) return ''
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1).toLowerCase()
}

const capitalizeSentence = (text) => {
   const words = text.split(' ');
   return words.map(word => capitalize(word)).join(' ');
}




export const Utils = {
    capitalize,
    capitalizeSentence
}