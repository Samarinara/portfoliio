import { useState, useEffect } from 'react'
import { HeartIcon } from "./PlayingCard"
import { ClubIcon } from "./PlayingCard"
import { useNavigate } from "react-router-dom"

export default function TopBar(){
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const handleHomeClick = () => {
        navigate('/home')
        if (isMenuOpen) setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    if (isMobile) {
        return (
            <>
                <div className='top-bar mobile-top-bar'>
                    <button 
                        className='hamburger-button' 
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                    <h1 onClick={handleHomeClick} className="mobile-title">SAM KATEVATIS</h1>
                    <div className="mobile-icon-placeholder">
                        <HeartIcon color="red" width="32" height="32"/>
                    </div>
                </div>
                
                {/* Mobile Navigation Drawer */}
                <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-content">
                        <button 
                            className="nav-close-button" 
                            onClick={toggleMenu}
                            aria-label="Close navigation menu"
                        >
                            ×
                        </button>
                        <nav className="mobile-nav-menu">
                            <button onClick={handleHomeClick} className="mobile-nav-item">Home</button>
                            <button onClick={() => { navigate('/projects'); toggleMenu(); }} className="mobile-nav-item">Projects</button>
                            <button onClick={() => { navigate('/profile'); toggleMenu(); }} className="mobile-nav-item">Profile</button>
                        </nav>
                    </div>
                </div>
                
                {/* Overlay */}
                {isMenuOpen && (
                    <div className="mobile-nav-overlay" onClick={toggleMenu}></div>
                )}
            </>
        )
    }

    return (
        <div className='top-bar desktop-top-bar fixed-desktop-header' onClick={handleHomeClick}> 
            <HeartIcon color="red" width="64" height="64"/>
            <h1>SAM KATEVATIS</h1>
            <ClubIcon color="black" width="50" height="50"/>
        </div>
    )
} 