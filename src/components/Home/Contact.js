import React from 'react'
import Title from '../Globals/Title'


export default function Contact() {
    return (
        <section className="contact py-5">
            <Title title="contact us" />
            <div className="row">
            <div className="col-10 col-sm-8 col-md-6 mx-auto">
                <form action="https://formspree.io/chimayochilecompany@gmail.com"
                method="POST">
                    {/* name */}
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" className="form-control"
                        name="name"
                        id="name"
                        paceholder="john smith"
                        />
                    </div>
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="text" className="form-control"
                        name="email"
                        id="email"
                        paceholder="email@email.com"
                        />
                    </div>
                    {/* description */}
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea 
                        type="description" className="form-control"
                        rows="5"
                        paceholder="your description here..."
                        />
                    </div>
                    {/* submit */}
                    <button type="submit" className="btn btn-yellow btn-clock text-capitalize mt-5">Submit</button>
                </form>
            </div>
            </div>
        </section>
    )
}
