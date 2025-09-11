import profilePic from './assets/sangtran.jpg'

function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Roy Thai</h2>
            <p className='card-text'>I make Youtube videos and play video games</p>
            <hr />
        </div>
    );
}

export default Card