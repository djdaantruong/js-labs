function transform(arr) {
  // your code here

  return (map = arr.map(function changes(arr) {
    switch (arr) {
      case 'A' || 'a': {
        return 1
        break
      }

      case 'B' || 'b': {
        return 2
        break
      }

      default: {
        return 0
      }
    }
  }))
}
