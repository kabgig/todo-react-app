import { Link, useParams } from 'react-router-dom'

function WelcomeComponent() {
    const { username } = useParams()
    console.log(username)
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos <Link to='/todos'>here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent