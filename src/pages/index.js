import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>

      <h2>Fonts Test</h2>
      <p className="font-black">
        Font Black Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis alias earum, doloribus accusantium error sed voluptatum
        libero dolor, repellat officiis, exercitationem officia excepturi.
        Minima deleniti facere doloremque veritatis error{' '}
      </p>

      <p className="font-bold">
        Font Bold Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis alias earum, doloribus accusantium error sed voluptatum
        libero dolor, repellat officiis, exercitationem officia excepturi.
        Minima deleniti facere doloremque veritatis error{' '}
      </p>

      <p className="font-light">
        Font Light Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis alias earum, doloribus accusantium error sed voluptatum
        libero dolor, repellat officiis, exercitationem officia excepturi.
        Minima deleniti facere doloremque veritatis error{' '}
      </p>

      <p className="font-med">
        Font Medium Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis alias earum, doloribus accusantium error sed voluptatum
        libero dolor, repellat officiis, exercitationem officia excepturi.
        Minima deleniti facere doloremque veritatis error{' '}
      </p>

      <p className="font-reg">
        Font Regular Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis alias earum, doloribus accusantium error sed voluptatum
        libero dolor, repellat officiis, exercitationem officia excepturi.
        Minima deleniti facere doloremque veritatis error{' '}
      </p>

      <p className="font-mono">
        Font Monospace Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Blanditiis alias earum, doloribus accusantium error sed voluptatum
        libero dolor, repellat officiis, exercitationem officia excepturi.
        Minima deleniti facere doloremque veritatis error{' '}
      </p>
    </div>
  </Layout>
);

export default IndexPage;
