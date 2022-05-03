// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600
const SECONDS_PER_MIN = 60

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > 86400) return -1

  const sec_num = parseInt(seconds, 10)

  const hours = Math.floor(sec_num / SECONDS_PER_HOUR)
  const mins = Math.floor(sec_num / SECONDS_PER_MIN) % 60
  const second = sec_num % 60

  return `${('0' + hours).slice(-2)}:${('0' + mins).slice(-2)}:${(
    '0' + second
  ).slice(-2)}`
}
console.log(
  '🚀 ~ file: coding-exercise-9.js ~ line 6 ~ formatTime ~ formatTime',
  formatTime(4256)
)
