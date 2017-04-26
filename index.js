import fs from 'fs'
import async from 'async'
import recursive from 'recursive-readdir'

const ignore = [
  '.DS_Store',
  '.demo',
  '.git*',
  '.meteor',
  '.meteor',
  'node_modules',
  '*.lock',
  '*.log',
  '*.pdf',
  '*.jpg',
  '*.gif',
  '*.png',
  '*.jpeg',
]

recursive('/Users/monsterstep/dev/repos/dashboard-app-maker', ignore, function (err, files) {

  let code = ''

  async.each(files, function (file, cb) {
    fs.readFile(file, 'utf8', function (err, context) {
      code += `${file}\n\n${context}\n`
      cb()
    })
  }, function (err) {
    code = code.replace(/\n\n/g, '\n')
    fs.writeFile('code.txt', code)
  })

})
