import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolvePathSync } from 'mlly'

console.log({
  'import.meta.url': import.meta.url,
  'fileURLToPath(import.meta.url)': fileURLToPath(import.meta.url),
  "resolve(dirname(fileURLToPath(import.meta.url)), 'app/plugins/router')": resolve(dirname(fileURLToPath(import.meta.url)), 'app/plugins/router')
})

console.log(
  resolvePathSync(
    resolve(dirname(fileURLToPath(import.meta.url)), 'app/plugins/router'),
    { extensions: ['.ts', '.js'] }
  )
)
