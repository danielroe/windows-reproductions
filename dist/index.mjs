import { resolvePathSync } from 'mlly'
import { distDir } from './chunks/dirs.mjs'
import { resolve } from 'pathe'

console.log(
  resolvePathSync(resolve(distDir, 'app/plugins/router'), { extensions: ['.ts', '.js'] })
)
