import './App.css'
import Navbar from './components/header/Navbar.jsx'
import Hero from './components/header/home/Hero-Section.jsx'
import Client from './components/header/home/client.jsx'
import Community from './components/header/home/Community.jsx'
import Unlock from './components/body/Unlock.jsx'
import Achievements from './components/body/Achievements.jsx'
import Calender from './components/body/Calender.jsx'
import Customers from './components/body/Customers.jsx'
import Communityupdates from './components/body/Communityupdates.jsx'
import FooterTop from './components/footer/footer16.jsx'
import FooterBig from './components/footer/Footerbig.jsx'

export default function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <Client/>
    <Community/>
    <Unlock/>
    <Achievements/>
    <Calender/>
    <Customers/>
    <Communityupdates/>
    <FooterTop/>
    <FooterBig/>
    </>
  )
}
