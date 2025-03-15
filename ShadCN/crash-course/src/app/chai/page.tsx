import { Button } from '@/components/ui/button'
import React from 'react'

const ChaiPage = () => {
  return (
    <main className='h-screen flex justify-center items-center gap-2 flex-col'>

        <div>
            ChaiPage 🍵
        </div>

        <button className='py-2 px-4 bg-blue-400 hover:bg-blue-700 rounded-2xl'>
             button 
        </button>

        <Button>
            Shad CN Button
        </Button>
    </main>
  )
}

export default ChaiPage