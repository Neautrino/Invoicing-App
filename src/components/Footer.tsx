import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className="mt-12 mb-8">
        <Container className='flex justify-between gap-4'>
            <p className='text-sm'>
                Invoicipedia &copy; { new Date().getFullYear() }
            </p>
            <p className='text-sm'>
                Created By Neautrino. Welcome Abord.
            </p>
        </Container>
    </footer>
  )
}

export default Footer