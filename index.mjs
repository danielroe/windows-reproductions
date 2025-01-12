import { dirname, resolve as nodeResolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { resolve as patheResolve } from 'pathe'
import { resolvePathSync } from 'mlly'

console.log({
  'import.meta.url': import.meta.url,
  'fileURLToPath(import.meta.url)': fileURLToPath(import.meta.url),
  "nodeResolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router')": nodeResolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router'),
  "patheResolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router')": patheResolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router')
})

const resolves = { nodeResolve, patheResolve }

for (const r in resolves) {
  console.log('trying', r)

  try {
    console.log(
      resolvePathSync(
        resolves[r](dirname(fileURLToPath(import.meta.url)), 'plugins/router'),
        { extensions: ['.ts', '.js'] }
      )
    )
  } catch (e) {
    console.log('failed with', r)
    console.error(e)
  }
}
