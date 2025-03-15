import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const AccordPage = () => {
    return (
        <div className='flex h-screen w-screen justify-center items-center flex-col'>
            AccordPage
            <div className='w-[80%] h-1/12 bg-zinc-900 p-14' >
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

            </div>
        </div>
    )
}

export default AccordPage