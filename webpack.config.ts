import { Configuration } from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { IBuildOptions, IBuildPaths } from './config/build/types/types'
import path from 'path'

interface IEnvParameters {
  mode: 'development' | 'production'
  port: number
}

export default (env: IEnvParameters) => {
  const paths: IBuildPaths = {
    root: path.resolve(__dirname),
    entry: path.resolve(__dirname, 'src', 'pages', 'index', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'src', 'pages', 'index', 'index.html'),
  }
  const config: Configuration = buildWebpack({
    mode: env.mode ?? 'development',
    port: env.port ?? 3000,
    paths: paths,
  })
  return config
}
