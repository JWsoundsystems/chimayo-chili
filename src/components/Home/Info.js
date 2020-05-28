import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title' 

export default function Info() {
    return (
        <section className="py-5 info" >
            <div className="container infos">
            <Title title="About Us"></Title>
            <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-muted mb-5">
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit.
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit. 
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit.
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit. 
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
