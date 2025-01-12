import { resolvePathSync } from 'mlly'
import { resolve } from 'pathe'
import { fileURLToPath } from 'mlly'

console.log('url', import.meta.url)
console.log('path', fileURLToPath(import.meta.url))

console.log(
  resolvePathSync(resolve(fileURLToPath(import.meta.url), 'app/plugins/router'), { extensions: ['.ts', '.js'] })
)
