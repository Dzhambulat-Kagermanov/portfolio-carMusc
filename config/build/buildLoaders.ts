import MiniCSSExtractPlugin from 'mini-css-extract-plugin'
import { ModuleOptions } from 'webpack'
import { IBuildOptions } from './types/types'

export function buildLoaders(options: IBuildOptions): ModuleOptions['rules'] {
  const isProd: boolean = options.mode === 'production'
  const isDev: boolean = options.mode === 'development'

  const tsLoader = {
    test: /\.ts?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  }
  const scssLoader = {
    test: /\.s[ac]ss?/i,
    use: [
      isProd ? MiniCSSExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
    exclude: '/node_modules/',
  }
  const cssLoader = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
    exclude: '/node_modules/',
  }
  const htmlLoader = {
    test: /\.html$/i,
    loader: 'html-loader',
  }
  const assetImages = {
    test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'static/[hash][ext]',
    },
  }
  const assetFonts = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'static/[hash][ext]',
    },
  }

  return [htmlLoader, tsLoader, assetImages, assetFonts, scssLoader, cssLoader]
}
