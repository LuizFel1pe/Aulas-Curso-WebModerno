const person = {
  greeting: "Bom dia!",
  talk() {
    console.log(this.greeting)
  }
}

person.talk()
// const talk = person.talk()
// talk() conflito entre OO e funcional

const falarDePessoa = person.talk.bind(person)
falarDePessoa()