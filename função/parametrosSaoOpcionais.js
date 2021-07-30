function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido`);
  } else {
    return area
  }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 6, 22, 4))
console.log(area(5, 5))


