// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}
