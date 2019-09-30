import React from 'react';
import Footer from '../components/footer/Footer';
import About from '../components/about/About';

function Home({ team }) {
  return (
    <>
      <About team={team} />
      <Footer />
    </>
  );
}

const t1 = [
  {
    name: 'Matt Hardman 🇬🇧',
    position: 'Frontend Developer - Voice-over specialist - Director',
    src: 'static/me.png',
    country: '',
  },
  {
    name: 'Ike Eze 🇳🇬',
    position: 'Backend Developer - DevOps Specialist',
    src: 'static/ike.png',
    country: '',
  },
  {
    name: 'Rui Hildt 🏴‍☠️',
    position: 'Backend Developer - Q & A - PM - Director',
    src: 'static/rui.png',
    country: '',
  },
  {
    name: 'Delba de Olivieria 🇧🇷',
    position: 'Frontend Developer',
    src: 'static/delba.png',
    country: '',
  },
  {
    name: 'Pascal Bou 🇫🇷',
    position: 'Frontend Developer',
    src: 'static/pascal.png',
    country: '',
  },
  {
    name: 'Chris Sorin 🇷🇴',
    position: 'Frontend Developer',
    src: 'static/sorin.png',
    country: '',
  },
  {
    name: 'Vincent 🇳🇬',
    position: 'Backend Developer - Database Specialist',
    src: 'static/vincent.png',
    country: '',
  },
  {
    name: 'Damola 🇳🇬',
    position: 'Backend Developer',
    src: 'static/damola.png',
    country: '',
  },
  {
    name: 'Lukas Busk 🇵🇱',
    position: 'PM',
    src: 'static/lukas.png',
    country: '',
  },
];

const rand = () => Math.floor(Math.random() * 9);

const randomTeam = (t) => {
  const j = t;
  j.forEach((each, i) => {
    let temp = '';
    const r = rand();
    temp = t[r];
    j[r] = each;
    j[i] = temp;
  });
  return t;
};


Home.getInitialProps = () => {
  const team = randomTeam(t1);
  return { team };
};

export default Home;
