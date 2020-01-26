import { DigitalOceanReplication } from '../../portfolio/DigitalOceanReplication/DigitalOceanReplication'
import { withSidebar } from '../../hoc/withSidebar'

const sections = [
  {
    id: 'back-to-portfolio',
    url: '/#portfolio',
    icon: 'fa-home',
    name: 'Back to Portfolio',
  },
  {
    id: 'compare-to-original',
    url: 'https://web.archive.org/web/20190528080206/https://www.digitalocean.com/',
    icon: 'fa-home',
    name: 'Compare with digitalocean.com',
  },
  {
    id: 'see-source-code',
    url: 'https://github.com/bkong88/portfolio-kong-benard/tree/master/src/portfolio/DigitalOceanReplication',
    icon: 'fa-file-code-o',
    name: 'Source Code',
  },
]
const scrollSpy = false
const withSidebarProps = { sections, scrollSpy }
const mainDivClassNames = 'digitalOcean-main-container'

export default withSidebar(DigitalOceanReplication, withSidebarProps, mainDivClassNames)
