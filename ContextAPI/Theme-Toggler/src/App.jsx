import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

const App = () => {

  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () =>{ 
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])                                      // whenever themeMode changes it runs 
  
  return (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex flex-wrap items-center min-h-screen'>
        <div className='w-full '>

          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
             <ThemeButton />
          </div>

          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App