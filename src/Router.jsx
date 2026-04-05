import { useState } from 'react'
import App from './App'
import Services from './Services'
import Work from './Work'
import CaseStudy from './CaseStudy'
import Contact from './Contact'
import About from './About'

function Router() {
  const getInitialPage = () => {
    const path = window.location.pathname
    if (path === '/services') return 'services'
    if (path === '/work') return 'work'
    if (path.startsWith('/case-study')) return 'case-study'
    if (path === '/contact') return 'contact'
    if (path === '/about') return 'about'
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage())

  // Update URL when page changes
  const navigateTo = (page) => {
    setCurrentPage(page)
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`)
  }

  // Handle browser back/forward buttons
  window.onpopstate = () => {
    setCurrentPage(getInitialPage())
  }

  // Render the appropriate page component
  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services navigateTo={navigateTo} />
      case 'work':
        return <Work navigateTo={navigateTo} />
      case 'case-study':
        return <CaseStudy navigateTo={navigateTo} />
      case 'contact':
        return <Contact navigateTo={navigateTo} />
      case 'about':
        return <About navigateTo={navigateTo} />
      default:
        return <App navigateTo={navigateTo} />
    }
  }

  return renderPage()
}

export default Router
