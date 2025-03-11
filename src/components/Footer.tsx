const Footer = () =>{
    return(
        <footer className='bottom-0 mt-6 mb-8'>
            <div className='max-w-5xl mx-auto px-5 flex justify-between items-center gap-4'>
                <p className='text-sm'>
                    Invoice App &copy; {new Date().getFullYear()}
                </p>
                <p className='text-sm'>
                    Created by Ahuv04 with Next.js, XATA and Clerk
                </p>
                
            </div>
        </footer>
    )
}
export default Footer;
