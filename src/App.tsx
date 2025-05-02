import React from 'react'
import Providers from "./providers"
import AppRoutes from "./routes"
import NavigationBar from "./components/NavigationBar"
import SearchModal from './components/SearchModal'

const App: React.FC = () => {
  return (
    <Providers>
      <NavigationBar />
      <div className='max-w-screen-lg w-full px-4 mx-auto my-8'>
        <AppRoutes />
      </div>
      <SearchModal />
    </Providers>
  )
}

export default App
