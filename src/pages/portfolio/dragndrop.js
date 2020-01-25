import DragAndDrop from '../../portfolio/DragAndDrop/DragAndDrop'
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
    url: 'https://github.com/bkong88/portfolio-kong-benard/tree/master/src/portfolio/DragAndDrop',
    icon: 'fa-file-code-o',
    name: 'Source Code',
  },
]
const scrollSpy = false
const withSidebarProps = { sections, scrollSpy }
const mainDivClassNames = 'dnd-main-container'

export default withSidebar(DragAndDrop, withSidebarProps, mainDivClassNames)
