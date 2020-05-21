import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title' 

export default function Info() {
    return (
        <section className="py-5" >
            <div className="container">
            <Title title="our story"></Title>
            <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
                    Eu adipisicing elit id anim nostrud ex. Occaecat enim incididunt aliqua esse et qui nisi enim est cupidatat mollit magna. Tempor proident culpa consectetur aute ad. Do veniam culpa duis sit. Do sint adipisicing fugiat pariatur. Elit nulla consectetur cupidatat laborum do cillum ea sint consectetur reprehenderit.
                </p>
                <Link to="/about/">
                    <button className="btn text-uppercase btn-yellow">About Page</button>
                </Link>

            </div>
            </div>
            </div>
        </section>
    )
}
