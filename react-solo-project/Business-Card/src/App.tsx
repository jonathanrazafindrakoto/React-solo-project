import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin , faTwitter, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'


function App() {
  const image = "../src/assets/hero.png";
  return (
    <>
      <div className='main-container'>
        <div className='hero-container'>
          <img src={image} alt="Hero Image" className='hero-image' />
          <h1 className ='name'>Jonathan RAZAFINDRAKOTO</h1>
          <p className='Job'>Frontend Developer</p>
          <p className='website'><a href="#" target='_blank'>jonathan.razafindrakoto.website</a></p>
        </div>
        <div className="buttons">
          <button className="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </button>
          <button className="linkedin">
            <FontAwesomeIcon icon={faLinkedin}/> LinkedIn</button>
        </div>
        <div className="about-section">
          <h2 className="about">About</h2>
          <p className="about-text">I am a frontend developer with a passion for creating beautiful and functional user interfaces. I have experience with React, Vue, and Angular, and I am always looking to learn new technologies.</p>
        </div>
        <div className="interests-section">
          <h2 className="interests">Interests</h2>
          <p className="interests-text">In my free time, I enjoy hiking, cooking, and playing video games. I also have a passion for photography and love to capture the beauty of nature.</p>
        </div>
        <div className="media-section">
          <ul>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
