import React from 'react';
import Nav from '../components/nav/Nav';
import Hero from '../components/hero/Hero';
import Info from '../components/info/Info';
import Get from '../components/get/Get';
import InfoScreenContents from '../components/info/InfoScreenContents';
import Footer from '../components/footer/Footer';

const pages = [{
  title: 'Location.',
  subtitle: 'Find Mentors By Location',
  // eslint-disable-next-line
  info: 'We connect you with mentors  who are located in the same city, town  or local government area you are in.',
  screenContents: <InfoScreenContents />,
}];

const getNiyonText = {
  title: 'Get Niyon',
  text: ['Sign up for Niyon today'],
  link: 'https://niyonapp.now.sh/auth/signup',
};

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {pages.map(text => <Info {...text} />)}
      <Get {...getNiyonText} />
      <Footer />
    </>
  );
}

export default Home;
