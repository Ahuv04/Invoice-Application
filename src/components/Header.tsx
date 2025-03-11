import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

import Link from 'next/link'

const Header = () =>{
    return(
        <header className='mt-8 mb-12'>
            <div className='max-w-5xl mx-auto px-5 flex justify-between items-center gap-4'>
                    <p className='font-bold'>
                        <Link href="/dashboard">Invoice App</Link>
                    </p>
                    <div>
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    </div>
                </div>
        </header>
    )
}
export default Header;

/*
tried with container 

import Container from '@/components/Container'
const Header = () =>{
    return(
        <header>
            <Container>
                <div className='max-w-5xl mx-auto px-5 flex justify-between items-center gap-4 mt-5'>
                        <p> Invoice App</p>
                        <div>
                        <SignedOut>
                            <SignInButton />
                            <SignUpButton />
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
*/