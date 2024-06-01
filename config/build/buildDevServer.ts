import { IBuildOptions } from './types/types'

export function buildDevServer({ port }: IBuildOptions) {
  return {
    port: port || 3000,
    open: true,
  }
}
