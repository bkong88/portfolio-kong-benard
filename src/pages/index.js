import React, { useEffect } from 'react'

// Components
import Layout from '../components/Layout'
import SideBar from '../components/SideBar'

// Data
import config from '../../config'
import { graphql, useStaticQuery } from 'gatsby'

// Fixtures
import dragDropThumbnail from '../assets/images/dragndrop_illustration.gif'
import digitalOceanThumbnail from '../assets/images/digital_ocean_illustration.png'

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
  const [digitalOceanPath] = allPaths.filter((path) => path.includes('digital-ocean'))

  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="top one dark cover">
          <div className="top__container container">
            <h1 className="top__title top__title--author-name">
              Hi! I'm <strong>{config.authorGivenNames}</strong>
            </h1>
            <h1 className="top__title top__title--job">Full Stack Developer</h1>
            <p className="top__paragraph">
              I am a full stack developer based in Vancouver. I have been working in web development since 2019, and
              dabbling since 2017. I enjoy solving interesting problems and building excellent products!
            </p>
            <p className="top__paragraph">
              Frontend problems I have solved: easily customizable text entry component, draggable components <br />
            </p>
            <p className="top__paragraph">
              Backend problems I have solved: authentication, authorization, user posts/comments
            </p>
            <p className="top__paragraph">Scroll down to see my portfolio!</p>
          </div>
        </section>

        <section id="portfolio" className="portfolio two">
          <div className="portfolio__container container">
            <h2 className="portfolio__title">Portfolio</h2>
            <div className="portfolio__row row">
              <div className="col-12 col-12-mobile">
                <article className="portfolio__item item">
                  <h3 className="portfolio__header">Drag and Drop - ReactJS</h3>
                  <a href={dragDropPath} className="image fit">
                    <div id="drag-n-drop-image-container" className="portfolio__image-container">
                      <img id="drag-n-drop-image" src={dragDropThumbnail} alt="Drag and Drop Thumbnail" />
                    </div>
                  </a>
                </article>
              </div>
            </div>
            <div className="portfolio__row row">
              <div className="col-12 col-12-mobile">
                <article className="portfolio__item item">
                  <h3 className="portfolio__header">Digital Ocean Replication - HTML + SCSS</h3>
                  <a href={digitalOceanPath} className="image fit">
                    <div id="digital-ocean-portfolio-image-container" className="portfolio__image-container">
                      <img
                        id="digital-ocean-portfolio-image"
                        src={digitalOceanThumbnail}
                        alt="Digital Ocean Replication Thumbnail"
                      />
                    </div>
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-me three">
          <div className="about-me__container container">
            <h2 className="about-me__title">About Me</h2>
            <p className="about-me__paragraph">I specialize in React on the frontend, and Express on the backend.</p>
            <p className="about-me__paragraph">
              With <strong>React</strong>, I have solved problems by employing concepts such higher order components,
              react redux, redux-thunks, custom redux middleware, and react router. I prefer to use Hooks for its
              legibility, but am perfectly capable of using class based components as well. I have also spent dozens of
              hours writing unit and integration tests for components using Jest and Enzyme.
              <br />
              <br />
              With <strong>Express</strong>, I have created authentication and authorization systems by employing
              GraphQL and serialize. This resulted in easy-to-consume queries for clients, speeding up the development
              process.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
