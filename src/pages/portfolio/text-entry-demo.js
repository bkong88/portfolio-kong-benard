import { App } from '../../portfolio/text-entry-demo/src/Components/App/App'
import { withSidebar } from '../../hoc/withSidebar'

const sections = [
  {
    id: 'back-to-portfolio',
    url: '/#portfolio',
    icon: 'fa-home',
    name: 'Back to Portfolio',
  },
  {
    id: 'see-source-code',
    url: 'https://github.com/bkong88/text-entry-demo',
    icon: 'fa-file-code-o',
    name: 'Source Code',
  },
]
const scrollSpy = false
const withSidebarProps = { sections, scrollSpy }
const mainDivClassNames = 'digital-ocean-main-container'

export default withSidebar(App, withSidebarProps, mainDivClassNames)
