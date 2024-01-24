import React from 'react';
import Style from "../Stylesheets/Quote.module.css"

const Quote = () => {
    return (
    < section className={Style.quote} >
        <div className={Style.quoteText}>
            {"Registered Shops :)"}
        </div>
    </section >
    )
}

export default Quote;