import React from 'react'
import { AppContainer } from './src/navigation'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './src/services/redux/reduxStore'

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppContainer />
    </ReduxProvider>
  )
}

export default App