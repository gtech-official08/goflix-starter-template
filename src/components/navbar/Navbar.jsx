import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBars, FaBell, FaX } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // Add function to sticky navbar on scroll effect
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [open, setOpen] = useState(false);

    // nav items 
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'TV Shows', path: '/tv-shows' },
        { label: 'Movies', path: '/movies' },
        { label: 'My Lists', path: '/my-lists' },
    ];

    // handle click
    const handleClick = () => {
        setOpen(!open);
    };

    // handle close
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Determine visibility of navbar based on scroll position
            if (currentScroll > scrollPosition && currentScroll > 50) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up or at top
            }

            setScrollPosition(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);


    {/* text-[#fc0000] */ }

    return (
        <nav className={`fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 w-full h-[8ch] backdrop-blur-md transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${scrollPosition > 50 ? 'bg-neutral-950' : 'bg-neutral-900/0'}`}>
            <div className="w-full h-full flex items-center justify-between">
                {/* Logo section */}
                <Link to="/" className='text-2xl text-primary font-bold uppercase mr-16'>
                    Goflix
                </Link>

                {/* Hamburger icon */}
                <div className="w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text-neutral-700" onClick={handleClick}>
                    {
                        open ? (
                            <FaX className='w-5 h-5' />
                        ) : (
                            <FaBars className='w-5 h-5' />
                        )
                    }
                </div>


                {/* Nav links and button */}
                <div className={`${open ? 'flex absolute top-20 left-0 w-full h-auto md:h-auto md:relative' : 'hidden'
                    } flex-1 md:flex flex-col md:flex-row md:gap-14 gap-5 md:items-center md:justify-between md:p-0 sm:p-4 p-4 justify-end md:bg-transparent bg-neutral-950/95 backdrop-blur-3xl transition-transform md:shadow-none sm:shadow-md shadow-md rounded-md`}>
                    <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-5 text-sm text-neutral-400 font-medium uppercase">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className='hover:text-neutral-200 ease-in-out duration-300'>{item.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center md:justify-center justify-start gap-x-3 text-neutral-400">
                        <button className="w-10 h-10">
                            <FaSearch className='w-4 h-4' />
                        </button>
                        <button className="w-10 h-10">
                            <FaBell className='w-4 h-4' />
                        </button>
                        <button className="w-8 h-8 rounded-full border border-neutral-700/70 p-0.5">
                            <img src="https://cdn.pixabay.com/photo/2024/05/14/09/26/ai-generated-8760744_1280.png" alt="" className="w-full h-full object-cover object-center rounded-full" />
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar