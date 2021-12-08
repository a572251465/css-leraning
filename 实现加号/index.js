const url = require('url')
const parsed = url.parse('git://un:pd@codefever.com/un/set.git?service=upload-pack')

console.log(parsed.protocol === 'git:')
console.log(parsed.query === 'service=upload-pack')
console.log(parsed.path)
console.log(parsed.username)
