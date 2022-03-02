import React from "react";


const Contact = () => {
    return <>
    <div className="contact">
        <div className="social">
            <h2>Email</h2>
            <p>email@example.co.za</p>
            <h2>Social media</h2>

        </div>
        <div className="message">
            <h2>Send a message</h2>
            <p>Tell us what you liked so we can keep di=oing it or let us know what to improve on.</p>
            <form className="user_form">
                <input type="text" placeholder="Full Name" name="name"></input>
                <input type="phone" placeholder="Contact Number" name="contact"></input>
                <input type="email" placeholder="Email Address" name="email"></input>
                <select>
                    <option>Select a store</option>
                    <option>Johannesburg</option>
                </select>
                <select>
                    <option>compliment</option>
                    <option>give feedback on experience</option>
                    <option>suggest something</option>
                    <option>get information</option>

                </select>


            </form>
        </div>
    </div>
    </>
}

export default Contact;