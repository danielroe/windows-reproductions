import { dirname, resolve } from 'node:path'
import { resolvePathSync } from 'mlly'
import { fileURLToPath } from 'mlly'

console.log('url', import.meta.url)
console.log('path', fileURLToPath(import.meta.url))

console.log(
  resolvePathSync(resolve(dirname(fileURLToPath(import.meta.url)), 'app/plugins/router'), { extensions: ['.ts', '.js'] })
)
