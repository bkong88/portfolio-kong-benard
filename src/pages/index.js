import React, { useEffect } from 'react'

// Components
import Layout from '../components/Layout'
import Scroll from '../components/Scroll'
import SideBar from '../components/SideBar'

// Data
import config from '../../config'
import { graphql, useStaticQuery } from 'gatsby'

// Fixtures
import dragDropThumbnail from '../assets/images/dragndrop_illustration.gif'
import pic8 from '../assets/images/pic08.jpg'

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
]

const IndexPage = ({ location, navigate }) => {
  useEffect(() => {
    if (location.href.includes('#')) {
      const allSectionIds = sections.map((section) => section.id)
      const [, idToPushTo] = location.href.split('#')
      if (allSectionIds.includes(idToPushTo)) navigate(`#${idToPushTo}`, { replace: true })
    }
  }, []) // eslint-disable-line

  const data = useStaticQuery(graphql`
    query {
      allSitePage {
        edges {
          node {
            path
          }
        }
      }
    }
  `)

  const allPaths = data.allSitePage.edges.map((edge) => edge.node.path)
  const [dragDropPath] = allPaths.filter((path) => path.includes('dragndrop'))

  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>{config.authorGivenNames}</strong>
                <br />
                Full Stack Developer
              </h2>
              <p>
                I am a full stack developer based in Vancouver. I have been working in web development since 2019, and
                dabbling since 2017. I enjoy solving interesting problems and building excellent products!
              </p>
              <p>
                Frontend problems I have solved: easily customizable text entry component, draggable components <br />
                Backend problems I have solved: authentication, authorization, user posts/comments
              </p>
              <p>Scroll down to see my portfolio!</p>
            </header>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <div className="row">
              <div className="col-12 col-12-mobile">
                <article className="portfolio__item item">
                  <h3 className="portfolio__header">Drag and Drop - ReactJS</h3>
                  <a href={dragDropPath} className="image fit">
                    <img src={dragDropThumbnail} alt="Drag and Drop Thumbnail" />
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>
            <p>I specialize in React on the frontend, and Express on the backend.</p>
            <p>
              With <strong>React</strong>, I have solved problems by employing concepts such higher order components, react redux,
              redux-thunks, custom redux middleware, and react router. I prefer to use Hooks for its legibility, but am
              perfectly capable of using class based components as well. I have also spent dozens of hours writing unit
              and integration tests for components using Jest and Enzyme.
              <br />
              With <strong>Express</strong>, I have created authentication and authorization systems by employing GraphQL and serialize.
              This resulted in easy-to-consume queries for clients, speeding up the development process.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
