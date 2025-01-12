import { dirname, resolve as nodeResolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { resolve as patheResolve } from 'pathe'
import { resolvePathSync } from 'mlly'

import { info, error } from '@actions/core'
import { setFailed } from '@actions/core'

info(`import.meta.url: ${import.meta.url}`)
info(`fileURLToPath(import.meta.url): ${fileURLToPath(import.meta.url)}`)
info(`resolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router') - from pathe: ${patheResolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router')}`)
info(`resolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router') - from node:url: ${nodeResolve(dirname(fileURLToPath(import.meta.url)), 'plugins/router')}`)

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
    setFailed(e)
  }
}
