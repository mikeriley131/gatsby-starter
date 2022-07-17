import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import stronethrowersShirtFront from '../images/pt-stonethrowers-shirt-front.png';
import stronethrowersShirtBack from '../images/pt-stonethrowers-shirt-back.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <h1 className="visuallyhidden">Pulling Teeth</h1>
      <section>
        <h2 className="h1">Stonethrowers shirt</h2>
        <p>
          We&rsquo;re not a band, but if we can sell some shirts to benefit an
          organization providing support to LGBTQ youth, we&rsquo;re happy to do
          so. Proceeds benefit{' '}
          <a href="https://www.thetrevorproject.org/">the Trevor Project</a>.
          Design by{' '}
          <a href="https://www.instagram.com/onetricpony/">Simon Tripcony</a>.
        </p>

        <div className="flex-wrapper flex-wrapper--two">
          <div>
            <img
              src={stronethrowersShirtFront}
              alt="front view of black shirt with Pulling Teeth logo and text that reads 'What are you so afraid of?'"
              loading="lazy"
              width="600"
              height="599"
              decoding="async"
            />
          </div>

          <div>
            <img
              src={stronethrowersShirtBack}
              alt="back view of black shirt with the lyrics to the song 'Stonethrowers'."
              loading="lazy"
              width="600"
              height="599"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="h1">Heretic Video</h2>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/9inzBm9Y-z0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>

      <section>
        <h2 className="h1">Coming Soon</h2>
        <ul>
          <li>shirt gallery</li>
          <li>flyer gallery</li>
          <li>some other stuff</li>
        </ul>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
