function getTaxiCount(passengersCount) {
  const TAXI_4 = 4
  const TAXI_7 = 7

  if (passengersCount <= 0) return -1
  if (passengersCount <= TAXI_7) return 1
  if (passengersCount % TAXI_7 === 0) return passengersCount / TAXI_7
  if (passengersCount > TAXI_7) return Math.trunc(passengersCount / TAXI_7) + 1
}

console.log(
  '🚀 ~ file: coding-exercise-3 ~ line 2 ~ getTaxiCount ~ getTaxiCount:',
  getTaxiCount(6)
)
