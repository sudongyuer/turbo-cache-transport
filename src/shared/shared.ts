import cpy from 'cpy'
/**
 * 拷贝文件的方法
 * @param src 指定目标文件或文件件位置 demo/dir or demo/dir/file.xxx
 * @param dest 需要拷贝到哪里去
 * @param options 拷贝文件时的配置
 * @returns {Promise<void>}
 */
async function copyFile(src: string | readonly string[], dest: string, options = {
  parents: true,
  flat: false,
  overwrite: true,
}) {
  await cpy(src, dest, options)
  console.warn('Files copied!')
}

export {
  copyFile,
}
