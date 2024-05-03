import React from 'react'

export default function FooterSec() {
    return (
        <>
            <div>
                <footer className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='/'>
                                {/* <img src="./favicon.png"alt="" /> */}
                                <span className="ml-3 text-xl">Suyash Singh</span>
                            </a>
                            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800 " href='/'>First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>First Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Second Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Third Link</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-600 hover:text-gray-800" href='/'>Fourth Link</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* this is what i have to target in order to get rid from unwanted  bigger logo  */}
                    <div className="bg-gray-200">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-gray-900 text-sm text-center sm:text-left">© 2024 Suyash  Singh—
                                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Copyright 2@24</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
