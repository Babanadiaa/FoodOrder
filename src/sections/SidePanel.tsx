import React from 'react'
import instagram from '../icons/instagram.svg'
import facebook from '../icons/facebook.svg'

export default function SidePanel() {
    return (
        <aside className="sidepanel">
            <div className="sidepanel__text">
                <span>Соціальні мережі</span>
            </div>
            <div className="sidepanel__divider" />
            <a href="#" className="sidepanel__icon">
                <img src={instagram} alt="instagram" />
            </a>
            <a href="#" className="sidepanel__icon">
                <img src={facebook} alt="facebook" />
            </a>
        </aside>

    )
}
