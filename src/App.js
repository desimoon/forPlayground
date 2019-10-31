import React, { useState, useEffect, useContext } from 'react';
import MobileContextProvider, { MobileContext } from 'Context/MobileContext';
import ScrollContextProvider from 'Context/ScrollContext';
import Carosuel from 'components/Carosuel/Carousel';
import {
  GridContainer,
  Header,
  Texture,
  Image,
  Content,
  Tabs,
  CardsList,
  Form,
  Button,
  Footer,
  CookieBanner,
} from 'components/';
import bannerWeAre from 'Assets/Images/banner-we-are.jpg';
import bannerWeDo from 'Assets/Images/banner-we-do.jpg';
import bannerCareers from 'Assets/Images/banner-careers.jpg';

import './App.scss';

function App() {
  const { breakpoint } = useContext(MobileContext);

  return (
    <ScrollContextProvider>
      <div className="App">
        <section className="wrapper-header">
          <GridContainer
            container_fluid={breakpoint.isMobile ? <Texture /> : null}
            container={<Header />}
            background={breakpoint.isMobile ? '#4A00E4' : null}
            header
          />
        </section>

        <section className="slider">
          <GridContainer container_fluid={<Carosuel />} />
        </section>

        <section className="wrapper-cards">
          <GridContainer container={<CardsList />} background="#ebebeb" />
        </section>

        <section className="wrapper-we-are">
          <GridContainer
            container_fluid={<Image src={bannerWeAre} />}
            container={
              <Content
                columns={{
                  left: { width: 7, fillWithContent: false },
                  right: { width: 5, fillWithContent: true },
                }}
                title="we are."
                sentence="Consectetur adipiscing elit. Nulla condimentum tortor sem."
                labelButton="the players"
                goTo="https://www.playground.it/it/chi-siamo"
                themeBannerContent="dark"
              />
            }
            forceToFluid
            forceToColumnOnMobile
          />
        </section>

        <section className="wrapper-we-do">
          <GridContainer
            container_fluid={<Image src={bannerWeDo} />}
            container={
              <Content
                columns={{
                  left: { width: 5, fillWithContent: true },
                  right: { width: 7, fillWithContent: false },
                }}
                title="we do."
                sentence="Consectetur adipiscing elit. Nulla condimentum tortor sem."
                labelButton="the projects"
                goTo="https://www.playground.it/it/cosa-facciamo"
                themeBannerContent={breakpoint.isMobile ? 'dark' : 'ligth'}
              />
            }
            forceToFluid
            forceToColumnOnMobile
            overrideConstraint
          />
        </section>

        <section className="wrapper-careers">
          <GridContainer
            container_fluid={<Image src={bannerCareers} />}
            container={
              <Content
                columns={{
                  left: { width: 7, fillWithContent: false },
                  right: { width: 5, fillWithContent: true },
                }}
                title="careers."
                sentence="Consectetur adipiscing elit. Nulla condimentum tortor sem."
                labelButton="the positions"
                goTo="https://www.playground.it/it/lavora-con-noi"
                themeBannerContent="dark"
              />
            }
            forceToFluid
            forceToColumnOnMobile
          />
        </section>

        <section className="wrapper-tabs">
          <GridContainer container={<Tabs />} background="#ebebeb" />
        </section>

        <section className="wrapper-contact-us">
          <GridContainer container={<Form />} background="#000" />
        </section>

        <section>
          <GridContainer
            container_fluid={<div style={{ borderTop: '1px solid #252525' }} />}
            container={<Footer />}
            background="#000"
          />
        </section>

        <CookieBanner />
      </div>
    </ScrollContextProvider>
  );
}

export default App;
