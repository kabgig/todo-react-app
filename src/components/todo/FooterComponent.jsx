import { AuthContext } from './security/AuthContext'
import { useContext } from 'react'

function FooterComponent() {
    const authContext = useContext(AuthContext)
    console.log(`Footer component - ${authContext.number}`)
    return (
        <footer className="footer">
            <div className='container'>
                Footer
            </div>
        </footer>
    )
}

export default FooterComponent