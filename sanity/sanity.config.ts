import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'sanity',

  projectId: '63udb6zd',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
