import {
  existsSync, readFileSync, writeFileSync
} from 'fs'
import { join, dirname } from 'path'
import { template } from 'lodash'
import { execSync } from 'child_process'

type DefaultArguments = {
  [key: string]: any
  name: string
  appId?: string
  secretId?: string
  secretKey?: string
  region?: string
}

type TemplateConfig = {
  name: string
  arguments: {
    name: string
    type: string
    in?: string[]
    match?: string
  }[]
  files: string[]
}

export function generate (name: string, args: DefaultArguments, dest: string) {
  if (!existsSync(join(__dirname, 'templates', name, 'template.json')))
    throw Error(`Template ${name} not found`)

  const root = join(__dirname, 'templates', name)
  const config = JSON.parse(readFileSync(join(root, 'template.json'), 'utf8')) as TemplateConfig

  // 初始化入参
  args = Object.assign({
    appId: '',
    secretId: '',
    secretKey: '',
    region: ''
  }, args)

  // 入参校验
  if (!args.name) throw Error('name is required')
  if (!/^[a-z0-9-_]+$/i.test(args.name)) throw Error('name must be a-z, 0-9 or -_')

  if (config.arguments?.length)
    for (const arg of config.arguments) {
      if (typeof args[arg.name] === 'undefined') continue

      if (arg.in?.length && !arg.in.includes(args[arg.name]))
        throw Error(`${arg.name} must be ${arg.in.join(' or ')}`)

      if (arg.match && !new RegExp(arg.match).test(args[arg.name]))
        throw Error(`${arg.name} must match ${arg.match}`)
    }

  // 渲染模板
  const files: {
    filename: string
    template: (...args: any[]) => string
  }[] = []

  for (const file of config.files) {
    const tpl = template(readFileSync(join(root, file), 'utf8').toString())
    const filename = join(dest, file)
    const dir = dirname(filename)

    if (!existsSync(dir)) execSync(`mkdir -p ${dir}`)

    writeFileSync(filename, tpl(args))

    files.push({
      filename,
      template: tpl
    })
  }

  return {
    name,
    arguments: args,
    dest,
    files
  }
}
