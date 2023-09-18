import { useState } from "react";
import '../styles/ContactUs.css';
import location from '../assets/location.png';
import axios from "axios";

export default function ContactUs() {

    const [formStatus, setFormStatus] = useState('Send')

    const [email, setEmail] = useState("");
    const [name1, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     setFormStatus('Submitting...')
    //     const { name, email, message } = e.target.elements
    //     let conFom = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     }
    //     console.log(conFom)
    // }

    async function send(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8085/api/persons/contact",{
                name: name1,
                email:email,
                subject: subject,
                message: message
            });
            alert("Sent");
            window.location.reload();
        }
        catch(err){
            alert(err);
        }
    }

    return (
        <div className="contactblock">
            <div className="form1">
                <form>

                    <div className="name_email">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="name">
                                Name
                            </label><br></br>
                            <input className="form-control" type="text" id="name"
                            value={name1}
                            onChange={(event) => {
                            setName(event.target.value);
                            }}
                             required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label><br></br>
                            <input className="form-control" type="email" id="email"
                            value={email}
                            onChange={(event) => {
                            setEmail(event.target.value);
                            }}
                            required />
                        </div>
                    </div>


                    <div className="mb-3">
                        <label className="form-label" htmlFor="subject">
                            Subject
                        </label><br></br>
                        <input className="form-control" type="text" id="name" 
                        value={subject}
                        onChange={(event) => {
                        setSubject(event.target.value);
                        }}
                        required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label><br></br>
                        <textarea className="form-control" id="message" required 
                        value={message}
                        onChange={(event) => {
                        setMessage(event.target.value);
                        }}
                        />
                    </div>
                    <button className="btn btn-danger" type="submit" onClick={send}>
                        Send
                    </button>
                </form>
            </div>
            <div className="img">
                {/* <img src={location} alt='relax' /> */}
            </div>
        </div>
    )
}
