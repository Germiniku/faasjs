import { existsSync, readFileSync } from 'fs'
import { join } from 'path'

export function generate (name: string, args: any) {
  if (!existsSync(join(__dirname, 'templates', name, 'template.json'))) {
    throw Error(`Template ${name} not found`)
  }
}
