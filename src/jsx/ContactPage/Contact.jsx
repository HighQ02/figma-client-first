import React from 'react'; 
import '../../static/Contact.css';

function Contact() {
  return (
    // Contact
    <section class="contact-section">
        <h2>Let’s Start a Conversation</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        
        <div class="purple-block">
            <div class="info">
                <div class="working-hours">
                    <h3>Working hours</h3>
                    <p>Monday To Friday<br/>9:00 AM to 8:00 PM<br/>Our Support Team is available 24/7</p>
                </div>
                
                <div class="contact-info">
                    <h3>Contact Us</h3>
                    <p>020 7993 2905<br/>hello@finsweet.com</p>
                </div>
            </div>
        </div>

        <form class="contact-form">
            <input type="text" placeholder="Full Name" required/>
            <input type="email" placeholder="Your Email" required/>
            <div class="query-selector">
                <select required>
                    <option value="" disabled selected>Query Related</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </section>
  );
}

export default Contact;