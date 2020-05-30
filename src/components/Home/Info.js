import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title' 

export default function Info() {
    return (
        <section className="py-5 info" >
            <div className="container infos">
            <Title title="About Us"></Title>
            <div className="row">
            <div className="col-12 col-sm-12 col-md-12 mx-auto text-center">
                <p className="lead text-black mb-5 mx-auto font-size-sml">
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit.
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit. 
                    <br></br>
                    <br></br>
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit.
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor. Sunt aliquip pariatur laboris do aliqua commodo tempor proident nisi elit.
                    <br></br>
                    <br></br>
                    Cupidatat eu aute occaecat labore commodo elit nulla magna. Non aliquip commodo anim exercitation ad elit dolor.
                      
                </p>
                <Link to="/about/">
                    <button className="btn text-uppercase btn-yellow btnAbout">About Page</button>
                </Link>

            </div>
            </div>
            </div>
        </section>
    )
}
