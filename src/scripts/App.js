import { React, PropTypes } from 'react'
import connect from 'react-redux'

const App = ({ children }) => (
  <div>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes
    .oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
}

App.displayName = 'App'

export default connect((value) => value)(App)
