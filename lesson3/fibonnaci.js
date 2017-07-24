const fibonnaci = (n) => {
  if (n === 0) return 0
  if (n <= 1) return 1
  return fibonnaci(n - 1) + fibonnaci(n - 2)
}

console.log(fibonnaci(9))
console.log(fibonnaci(4))
console.log(fibonnaci(0))
