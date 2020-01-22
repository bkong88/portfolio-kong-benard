import DigitalOceanReplication from '../../portfolio/DigitalOceanReplication/DigitalOceanReplication'
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
    url: 'https://github.com/bkong88/',
    icon: 'fa-file-code-o',
    name: 'Source Code',
  },
]
const scrollSpy = false
const withSidebarProps = { sections, scrollSpy }

export default withSidebar(DigitalOceanReplication, withSidebarProps)
