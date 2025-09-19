import resume from '../assets/resume.pdf'
import { useEffect, useRef } from 'react'

export default function Resume () {
  const hasClicked = useRef(false)

  useEffect(() => {
        if (!hasClicked.current) {
        document.getElementById('resume')?.click()
        hasClicked.current = true
        }
    }, [])

    return (
        <section className='contact nes-container is-dark with-title is-rounded'>
            <h2>Thank you for taking the time to speak to me <i className='nes-icon is-small heart' /></h2>
            <a id='resume' href={resume} download></a>
        </section>
    )
}

