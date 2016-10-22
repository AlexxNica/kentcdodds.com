import {resolve} from 'path'
import Page from '../src/components/page'
import Talks from '../src/pages/talks'
import renderComponentToFile from './render-component-to-file'
import {getLastUpdated} from './utils'

const lastUpdated = getLastUpdated(resolve(__dirname, '../src/pages/talks'))
renderComponentToFile(
  <Page
    lastUpdated={lastUpdated}
    title="My Talks | Kent C. Dodds"
  >
    <Talks />
  </Page>,
  resolve(__dirname, '../dist/talks/index.html'),
)
