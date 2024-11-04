import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import Container from './Container'
import Link from 'next/link'

function Header() {
    return (
        <header className='mt-8 mb-12'>
            <Container>
            <div className='flex justify-between items-center gap-4'>
                <p className='font-bold'>
                    <Link href={"/dashboard"}>Invoicipedia</Link>
                </p>
                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
            </Container>
        </header>
    )
}

export default Header