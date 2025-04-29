import React from 'react'
import Providers from "./providers"
import AppRoutes from "./routes"

const App: React.FC = () => {
  return (
    <Providers>
      <div className='max-w-screen-lg w-full px-4 mx-auto my-8'>
        <AppRoutes />
      </div>
    </Providers>
  )
}

export default App
