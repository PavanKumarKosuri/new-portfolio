import React from 'react'

const Footer = () => {
  return (
    <footer className="s-footer">
      <div className="row footer-bottom">
        <div className="column">
          <p>© {new Date().getFullYear()} Pavan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
