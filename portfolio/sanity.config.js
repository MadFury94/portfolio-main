import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './sanity/schemas'

export const config = defineConfig({
  projectId: '8uv465dw',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2024-07-11',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {types: schemas},
})
