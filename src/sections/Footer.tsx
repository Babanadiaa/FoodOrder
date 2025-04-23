import React from 'react'
import pepper from '../icons/veg.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    <div className="subtitle">Ми в соціальних мережах:</div>
                    <a href="#" className="link">
                        instagram
                    </a>
                    <a href="#" className="link">
                        facebook
                    </a>
                </div>
                <div className="pepper">
                    <img src={pepper} alt="pepper" />
                </div>
                <div className="call">
                    <div className="subtitle">Або подзвоніть нам</div>
                    <a href="#" className="link">
                        +380678341034
                    </a>
                    <a href="#" className="link">
                        +380500941356
                    </a>
                </div>
            </div>
        </footer>

    )
}
