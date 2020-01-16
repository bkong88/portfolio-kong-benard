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
    url: 'https://www.github.com/', // TODO: fill this properly
    icon: 'fa-file-code-o',
    name: 'Source Code',
  },
]
const scrollSpy = false
const withSidebarProps = { sections, scrollSpy }

export default withSidebar(DragAndDrop, withSidebarProps)
