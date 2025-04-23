import React from 'react'
import Header from './sections/Header'
import Tabs from './sections/Tabs'
import SidePanel from './sections/SidePanel'
import Offer from './sections/Offer'
import Calculator from './sections/Calculator'
import Order from './sections/Order'
import Timer from './sections/Timer'
import Modal from './sections/Modal'
import Footer from './sections/Footer'
// import services from './services/services.tsx'
import Menu from './sections/Menu.tsx'
import vegy from './img/tabs/vegy.jpg'

export default function App() {
  return (
    <>
      <Header />
      <Tabs />
      <SidePanel />
      <Offer />
      <Calculator />
      <Menu />
      <Order />
      <Timer />
      <Footer />
    </>
  );
}

