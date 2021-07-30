// for (let letra of 'Luiz') {
//   console.log(letra)
// }

// const assuntosEcma = ['Map', 'Filter', 'Reduce', 'Promise', 'Set']
// for (let assunto of assuntosEcma) {
//   console.log(assunto)
// }

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

for (let chave of assuntosMap.keys()) { 
  console.log(chave)
}

for (let valor of assuntosMap.values()) {
  console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log("Chave " + ch + ":",vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}