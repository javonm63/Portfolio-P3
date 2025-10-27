import '../styles/searchBar.css'
import { useEffect, useState } from 'react'
import { showMobLogo } from '../hooks/homepageHooks'

function SearchBar() {
    const mobLogoHooks = showMobLogo()
    const mobLogo = mobLogoHooks.mobLogo
    const setMobLogo = mobLogoHooks.setMobLogo
    const showSearch = mobLogoHooks.showSearch
    const setShowSearch = mobLogoHooks.setShowSearch

    useEffect(() => {
        function resizeScreen() {
            if (window.innerWidth <= 1030) {
                setMobLogo(true)
            } else {
                setMobLogo(false)
            }
        }
        resizeScreen()
        window.addEventListener('resize', resizeScreen)
    }, [])

    function showSearchBar() {
        if (showSearch === false) {
            setShowSearch(true)
        } else {
            setShowSearch(false)
        }
    }

    return (
        <article className='searchBar-main-container'>
            <h2 className='logo-web' style={{display: mobLogo ? 'none' : 'flex'}}>WeTube.com</h2>
            <h2 className='logo-mob' style={{display: mobLogo ? 'flex' : 'none'}}>WT.com</h2>
            <section className='icon-container'>
                <input className='search-input' type='text' placeholder='Search' style={{display: showSearch ? 'flex' : 'none'}}></input>
                <img className='search-icon' src='/search-icon.png' alt='search icon image' onClick={showSearchBar}></img>
                <img className='notifs-icon' src='/notifs-icon.png' alt='notification icon image'></img>
            </section>
        </article>
    )
}

export default SearchBar 