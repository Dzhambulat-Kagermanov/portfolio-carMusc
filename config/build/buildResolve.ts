import { Configuration } from 'webpack'
import { IBuildOptions } from './types/types'
import path from 'path'

export function buildResolve({
  paths,
}: IBuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.js'],
    alias: {
      '~': path.resolve(paths.root, 'public'),
      '@': path.resolve(paths.root, 'src'),
      pages: path.resolve(paths.root, 'src', 'pages'),
    },
  }
}
