//Module pour organiser la structure des réponses (manière raccourcie)
exports.success = (message, data) => {
  return {
    message: message,
    data: data
  }
}

/*
//Manière ES6
exports.success = (message, data) => {
  return {message, data}
}
*/

/*
//Manière vanilla
const success = (message, data) => {
  return {
    message: message,
    data: data
  }
}
 
exports.success
*/