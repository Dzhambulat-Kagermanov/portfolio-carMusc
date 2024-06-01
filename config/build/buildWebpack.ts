import { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { buildLoaders } from './buildLoaders'
import { buildDevServer } from './buildDevServer'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { IBuildOptions } from './types/types'

export function buildWebpack(options: IBuildOptions): Configuration {
  const { mode, paths } = options
  const isProd: boolean = mode === 'production'
  const isDev: boolean = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: { rules: buildLoaders(options) },
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(options) : undefined,
    resolve: buildResolve(options),
  }
}
