import React from 'react';
import './Team.scss';

import ProductMobile from './../../images/team/product-mobile.jpg';
import ProductTablet from './../../images/team/product-tablet.jpg';
import ProductDesctop from './../../images/team/product-desctop.jpg';
import ProductImg from './../../images/team/img-3.jpg';

import FrontendMobile from './../../images/team/frontend-mobile.jpg';
import FrontendTablet from './../../images/team/frontend-tablet.jpg';
import FrontendDesctop from './../../images/team/frontend-desctop.jpg';

import MarketingMobile from './../../images/team/marketing-mobile.jpg';
import MarketingTablet from './../../images/team/marketing-tablet.jpg';
import MarketingDesctop from './../../images/team/marketing-desctop.jpg';

import DesignerMobile from './../../images/team/designer-mobile.jpg';
import DesignerTablet from './../../images/team/designer-tablet.jpg';
import DesignerDesctop from './../../images/team/designer-desctop.jpg';

import { ReactComponent as Instagram } from './../../images/svg1/instagram 2.svg';
import { ReactComponent as Twitter } from './../../images/svg1/twitter 1.svg';
import { ReactComponent as Facebook } from './../../images/svg1/facebook 1.svg';
import { ReactComponent as Linkedin } from './../../images/svg1/linkedin 1.svg';

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="container">
          <h2 className="team-title center element-animation">Our Team</h2>
          <ul className="team-list">
            <li className="team-item element-animation">
              <picture>
                <source
                  srcset={ProductMobile}
                  media="(max-width: 767px)"
                  type="image/jpg"
                />
                <source
                  srcset={ProductTablet}
                  media="(min-width: 768px) and (max-width: 1199px)"
                />
                <source srcset={ProductDesctop} media="(min-width: 1200px)" />
                <img
                  loading="lazy"
                  class="lazyload"
                  data-src={ProductImg}
                  alt="продукт дизайнер"
                />
              </picture>
              <h3 class="team-subtitle">Igor Demyanenko</h3>
              <p class="team-text">Product Designer</p>
              <ul class="team-flex">
                <li class="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </li>

            <li className="team-item element-animation">
              <picture>
                <source
                  srcset={FrontendMobile}
                  media="(max-width: 767px)"
                  type="image/jpg"
                />
                <source
                  srcset={FrontendTablet}
                  media="(min-width: 768px) and (max-width: 1199px)"
                />
                <source srcset={FrontendDesctop} media="(min-width: 1200px)" />
                <img
                  loading="lazy"
                  class="lazyload"
                  data-src={FrontendDesctop}
                  alt="фронтенд разработчик"
                />
              </picture>

              <h3 className="team-subtitle">Olga Repina</h3>
              <p className="team-text">Frontend Developer</p>
              <ul className="team-flex">
                <li class="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li class="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label="!#"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li class="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </li>

            <li className="team-item element-animation">
              <picture>
                <source
                  srcset={MarketingMobile}
                  media="(max-width: 767px)"
                  type="image/jpg"
                />
                <source srcset={MarketingTablet} media="(min-width: 768px)" />
                <source srcset={MarketingDesctop} media="(min-width: 1200px)" />

                <img
                  loading="lazy"
                  class="lazyload"
                  data-src={MarketingDesctop}
                  alt="маркетолог"
                />
              </picture>

              <h3 className="team-subtitle">Nikolai Tarasov</h3>
              <p className="team-text">Marketing</p>
              <ul className="team-flex">
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </li>

            <li className="team-item element-animation">
              <picture>
                <source
                  srcset={DesignerMobile}
                  type="image/jpeg"
                  media="(max-width: 767px)"
                />
                <source
                  srcset={DesignerTablet}
                  type="image/jpeg"
                  media="(min-width: 768px)"
                />
                <source
                  srcset={DesignerDesctop}
                  type="image/jpeg"
                  media="(min-width:1200px)"
                />

                <img
                  loading="lazy"
                  class="lazyload"
                  data-src={DesignerDesctop}
                  alt="маркетолог"
                />
              </picture>

              <h3 className="team-subtitle">Mikhail Ermakov</h3>
              <p className="team-text">UI Designer</p>
              <ul className="team-flex">
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Twitter className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook className="team-icon" />
                  </a>
                </li>
                <li className="team-list-icon">
                  <a
                    href="!#"
                    aria-label=""
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin className="team-icon" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Team;