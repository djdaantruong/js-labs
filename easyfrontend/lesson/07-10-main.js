// create a funciton 'truncate(text, maxLength)' that check the length of the text addEventListener,
// if it excends maxLength - replaces the end of str with the ellipsis character '...'
// to make its legnth eual to maxLength

// UTF16 '/u2026'

// length
// length <= maxLength --> show full
// length > maxLength --> truncate

function truncate(text, maxLength) {
  if (text.length <= maxLength) return text
  const shortStr = text.slice(0, maxLength - 1)
  return `${shortStr}\u2026`
}

console.log(truncate('Easy', 4))
console.log(truncate('Easyfrontend', 4))
