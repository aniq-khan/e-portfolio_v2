import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'E-protfolio',

  projectId: 'tfdxk22h',
  dataset: 'production',

  plugins: [deskTool()],

  apiVersion: '2021-06-07',

  schema: {
    types: schemaTypes,
  },
})
