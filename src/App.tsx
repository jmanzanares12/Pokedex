import React from 'react'
import Providers from "./providers"
import AppRoutes from "./routes"

const App: React.FC = () => {
  return (
    <Providers>
      <div className='mt-5 mb-5 w-9/12 mx-auto'>
        <AppRoutes />
      </div>
    </Providers>
  )
}

export default App
