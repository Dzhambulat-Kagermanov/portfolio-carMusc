export interface IBuildPaths {
  entry: string
  output: string
  html: string
  root: string
}
export type TBuildMode = 'production' | 'development'
export interface IBuildOptions {
  port?: number
  paths: IBuildPaths
  mode?: TBuildMode
}
