import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'tfdxk22h',
    dataset: 'production',
  },
  server: {
    hostname: 'localhost',
    port: 3333,
  },
})
