import React from 'react'
import Helmet from 'react-helmet'

const Success = (props) => (
    <div>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Check your email inbox to confirm.</h1>
                    </header>
                    <span className="image main"></span>
                    <p>Thank you for contacting us!</p>
                </div>
            </section>
        </div>

    </div>
)

export default Success