import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contactform.css';

export const ContactUs = () => {
    const form = useRef();
    const [sentSuccessfully, setSentSuccessfully] = useState(false);
    const [errorOccurred, setErrorOccurred] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // Get client's email address and name from the form
        const clientName = form.current['user_name'].value;

        // Send email to the admin
        emailjs
            .send('service_BookHaven', 'template_mllgdxq', {
                user_email: 'harshitchordiya17@gmail.com', // Admin email
                message: `Query from ${clientName}: ${form.current['message'].value}`,
            }, { publicKey: 'vrGItIwfBvbDKy8W6' })
            .then(() => {
                console.log('Email sent to admin!');
                setSentSuccessfully(true)
            })
            .catch((error) => {
                console.error('Error sending email to admin:', error);
                setErrorOccurred(true);
            });
    };

    return (
        <div id="contacts">
    <div className="container mx-auto">
        <div className="row flex flex-col md:flex-row">
            <div className="contact-right md:w-full">
                <div className="card p-4 bg-white shadow-md rounded-lg">
                    <hr className="w-full border-gray-300 mb-4"/>
                    <h1 className="sub-title text-2xl font-bold text-center">Contact Us</h1>
                    <p className="text-center mb-4">harshitchordiya17@gmail.com</p>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
                        <input type="email" name="user_name" placeholder="Your Email" required className="w-1/2 p-2 mb-4 border border-gray-300 rounded" />
                        <input type="text" name="user_email" placeholder="Your Name" required className="w-1/2 p-2 mb-4 border border-gray-300 rounded" />
                        <textarea name="message" rows="6" placeholder="Your Message" required className="w-1/2 p-2 mb-4 border border-gray-300 rounded"></textarea>
                        <button type="submit" className="btn btn2 bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                    </form>
                    <div id="msg" className="mt-4 flex justify-center items-center">
                        {sentSuccessfully && <p className="success-message text-green-500">Email sent successfully!</p>}
                        {errorOccurred && <p className="error-message text-red-500">An error occurred. Please try again later.</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    
    

    );
};

export default ContactUs;
