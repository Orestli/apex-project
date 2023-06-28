export type BuildMode = 'production' | 'development';

export interface BuildEnv {
  apiUrl: string;
  mode: BuildMode;
  port: number;
}

export interface BuildPaths {
  build: string;
  buildLocales: string;
  entry: string;
  html: string;
  locales: string;
  src: string;
}

export interface BuildOptions {
  apiUrl: string;
  isDev: boolean;
  mode: BuildMode,
  paths: BuildPaths,
  port: number;
  project: 'storybook' | 'frontend' | 'jest'
}
