import { useState } from "react";
import '../styles/ContactUs.css';
import Relax from '../assets/relax.png';

export default function ContactUs() {

    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }

    return (
        <div className="contactblock">
            <div className="form1">
                <form onSubmit={onSubmit}>

                    <div className="name_email">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label><br></br>
                            <input className="form-control" type="text" id="name" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label><br></br>
                            <input className="form-control" type="email" id="email" required />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label className="form-label" htmlFor="subject">
                            Subject
                        </label><br></br>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label><br></br>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
            <div className="img">
                <img src={Relax} alt='relax' />
            </div>
        </div>
    )
}
