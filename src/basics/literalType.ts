type someNumber = 80
const correct: someNumber = 80
// this will throw type error
// const incorrect: someNumber = 71
// some use case
type mode = 'test' | 'prod' | 'dev'
const codeEnv: mode = 'test'