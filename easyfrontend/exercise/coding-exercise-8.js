// using if...else
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds > 60) return -1

  if (seconds < 10) return `0${seconds}`
  return seconds.toString()
}

// using slice()
function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds > 60) return -1

  return ('0' + seconds).slice(-2)
}
