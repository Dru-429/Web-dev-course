import { Button } from '@/components/ui/button'
import React from 'react'

const ChaiPage = () => {
  return (
    <main className='h-screen flex justify-center items-center gap-2 flex-col'>

        <div>
            ChaiPage 🍵
        </div>

        <button className='py-2 px-6 text-lg bg-blue-400 hover:bg-blue-700 rounded-2xl'>
             try me out button 
        </button>

        <Button variant='destructive' size='lg'>
            Shad CN Button
        </Button>
    </main>
  )
}

export default ChaiPage