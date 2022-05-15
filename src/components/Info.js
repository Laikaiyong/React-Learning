import { BsLinkedin } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const Info = () => {
  return (
    <header>
        <img
            src="https://img5.goodfon.com/wallpaper/nbig/7/e3/eva-elfie-devushka-koltso-volosy.jpg"
            alt="Eva Elfie"
            id="info-img"
        />
        <h1>Eva Elfie</h1>
        <h4>Full Stack Developer</h4>
        <h5>evaelfie.website</h5>
        <div className='cover'>
        <div className="btn-group">
            <div id="email-card" className="btn-card">
              <GrMail className='btn-icons' />
              Email
            </div>
            <div id="linkedin-card" className="btn-card">
              <BsLinkedin className="btn-icons" />
              LinkedIn
            </div>
        </div>
        </div>
    </header>
  )
}

export default Info