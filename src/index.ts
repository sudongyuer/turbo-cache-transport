import path from 'path'
import { cwd } from 'process'
import { Command } from 'commander'
import { copyFile } from './shared/shared'
console.warn(cwd())

const options = getCommandOptions()
console.warn(options)
// 移动到node-modules
if (options.in)
  copyFile(path.resolve(cwd(), '.cache'), path.resolve(cwd(), 'node_modules/.cache'))

// copy缓存到项目根目录中
if (options.out)
  copyFile(path.resolve(cwd(), 'node_modules/.cache'), path.resolve(cwd(), '.cache'))

function getCommandOptions() {
  // 初始化命令行帮助信息
  const program = new Command()
  program.option('-i, --in', 'transport cache in node-modules')
  program.option('-o, --out', 'copy cache from node-modules')
  program.addHelpText('after', `
Example call:
  $ tcache -h --help`)
  // 解析命令行参数
  program.parse(process.argv)
  // 获取命令行参数
  return program.opts()
}
