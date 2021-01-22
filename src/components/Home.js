import React from 'react';
import './Home.css';
import logo1 from './image/Logo.png';
// import logo from './image/gravel.jpg';

function Home(){
    return(
        <div className='home'>
            <div className='backgnd'></div>
            <div className='container'>
                <div className='image'>
                    <img className='img' src={logo1} alt='error' ></img>    
                </div>
                <div className ="content" >
                    <text ><h1>An Initiative of Government of India...</h1>
                    Cyber Crime in India has been rapidly evolving since the dawn of the technological era.
                     Every day, in fact, you get to hear different tricks, scams and many other offence being committed on the cyberspace. There are many types of cyber crime in India that have already been listed under the Information Technology Act, 2000, suggesting various types of crimes.
                      Also in order to follow the guidelines of cyber crime act in India, in major cities, many cyber crime cells in India have been set up. 
                      With the advancement of technology, recent cases of cyber crime in India has also increased. Today, many crimes like kidnapping, fraud, hacking, data theft are being committed with the help of internet. Criminals who perform such activities are often referred to as “hackers”. Many of the cyber crime cases in India are registered under the IT Act. Digitalization is unbridled these days and the Internet has made life easier for everybody, with everything just a click away. From white collar crimes to attacks by terrorist organizations, the number of cyber crimes in India has also increased. It has made man dependent on the technology for every little basic need. Today each need is covered online like online shopping, ordering food, online gaming, making payments and etc. What is Cyber Crime in India? In India, cyber crime can be defined as a crime or an unlawful act where the computer is used either as a tool, a target or both. In other terms, cyber crimes in India can be defined as an unauthorized access to some computer system without the permission of rightful owner or place of criminal activity and include everything from online cracking to denial of service attacks. Some examples of cyber crime include phishing, spoofing, DoS (Denial of Service) attack, credit card fraud, online transaction fraud, cyber defamation, child pornography, etc. 
                    Causes of Cyber Crime in India
                    </text>
                </div>
            </div>
        </div>
    )
}

export default Home;
