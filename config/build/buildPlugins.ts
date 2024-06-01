import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import { IBuildOptions } from './types/types'

export function buildPlugins({
  mode,
  paths,
}: IBuildOptions): Configuration['plugins'] {
  const isProd: boolean = mode === 'production'
  const isDev: boolean = mode === 'development'

  // Общие плагины для development и production
  const generalPlugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.html),
    }),
  ]
  // Плагины для production
  if (isProd) {
    generalPlugins.push(
      new MiniCSSExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
  }

  return generalPlugins.filter(Boolean)
}
