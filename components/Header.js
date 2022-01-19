import Link from 'next/link'

export default function Header() {
    return (
        <header className='w-full text-gray-100 bg-gray-900 h-30'>
            <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
                <Link href="/">
                    <a className='flex items-center mb-4 font-medium md:w-1/5 title-font md:justify-start md:mb-0'>
                        <span className='ml-3 text-xl'>Home</span>
                    </a>
                </Link>
                <nav className='flex flex-wrap items-center text-base md:w-4/5 md:ml-auto'>
                    <Link href="/accordion">
                        <a className="cursor-pointer hover:bg-indigo-300">
                            Accordion
                        </a>
                    </Link>
                    <Link href="/alerts">
                        <a className="mx-1 cursor-pointer hover:bg-indigo-300">
                            Alerts
                        </a>
                    </Link>
                    <Link href='/avatar'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Avatar
                        </a>
                    </Link>
                    <Link href='/badges'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Badges
                        </a>
                    </Link>
                    <Link href='/button-group'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Button-Group
                        </a>
                    </Link>
                    <Link href='/buttons'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Buttons
                        </a>
                    </Link>
                    <Link href='/card'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Card
                        </a>
                    </Link>
                    <Link href='/carousel'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Carousel
                        </a>
                    </Link>
                    {/* TODO: chats */}
                    <Link href='/chips'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Chips
                        </a>
                    </Link>
                    <Link href='/collapse'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Collapse
                        </a>
                    </Link>
                    <Link href='/datetime'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            DateTime
                        </a>
                    </Link>
                    <Link href='/dropdown'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Dropdown
                        </a>
                    </Link>
                    <Link href='/gallery'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Gallery
                        </a>
                    </Link>
                    <Link href='/heading'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Heading
                        </a>
                    </Link>
                    <Link href='/icons'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Icons
                        </a>
                    </Link>
                    <Link href='/timepicker'>
                        <a className='mx-1 cursor-pointer hover:text-indigo-300'>
                            Timepicker
                        </a>
                    </Link>

                </nav>
            </div>
        </header>
    )
}