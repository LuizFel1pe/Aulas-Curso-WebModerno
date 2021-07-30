const aprovados = ['Agatha', 'Alonso', 'Rafael', 'Michael Jackson']

const exibirAprovados = (el, i, arr) => console.log(`${i + 1}: ${el} == ${arr.join(' | ')}`)
aprovados.forEach(exibirAprovados)
