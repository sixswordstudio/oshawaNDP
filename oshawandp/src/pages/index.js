import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


const JackLanding = {
  title: 'Welcome to the Oshawa NDP 🍊',
  body: (
    <>
      <p>
        For more than sixty years, Oshawa’s New Democrats have stood proudly at the heart of Canada’s
        progressive movement. We are activists, workers, artists—neighbours brought together by a deep belief
        in a better world founded on labour solidarity, strong public services, and environmental justice.
        For generations, we have joined together to fight for a fair and equitable future.
      </p>
      <p>
        Our city was home to former NDP Leader Ed Broadbent, a tireless champion for human rights whose legacy
        continues to inspire us today. After some challenging elections, the Oshawa New Democrats have been
        proud to carry forward that tradition with four consecutive winning campaigns for MPP Jennifer French,
        whose leadership continues to reflect the community’s values of strength, compassion, and fairness.
      </p>
      <p>
        But the Oshawa New Democrats are more than a campaign team—we are a community. Together we work hard,
        support one another, and find common purpose in our progressive values at a time when the world can feel
        uncertain. We welcome everyone, and we make sure diverse voices are not only heard but valued. As part
        of Canada’s only truly democratic political party, every member has a vote to help shape our future,
        from electing leaders to debating policies at provincial and federal conventions.
      </p>
      <p>
        Here in Oshawa, we carry forward a proud history of progressive leadership while building a more just
        and equitable tomorrow. We hope you’ll join us.
      </p>
    </>
  ),
  image: '/img/oshawa.png',          // put your image at static/img/oshawa.png
  imageAlt: 'Placeholder image of Oshawa',
};



const ContactColumns = [
  {
    title: 'Riding Association',
    items: [
      { icon: '✉️', text: 'info@oshawandp.ca', href: 'mailto:info@oshawandp.ca' },
      { icon: '📞', text: '647-000-0000', href: 'tel:+16470000000' },
      { icon: '📍', text: '65 Shuter St, Box 81, Toronto, ON M5B 1B2' },
    ],
  },
  {
    title: 'Ontario NDP',
    items: [
      { icon: '✉️', text: 'info@ontariondp.ca', href: 'mailto:info@ontariondp.ca' },
      { icon: '📞', text: '1-866-390-6637', href: 'tel:+18663906637' },
      { icon: '📍', text: '201-2069 Lakeshore Blvd W, Toronto, ON, M8V 3Z4' },
    ],
  },
  {
    title: "Canada's NDP",
    items: [
      { icon: '✉️', text: 'contact@ndp.ca', href: 'mailto:contact@ndp.ca' },
      { icon: '📞', text: '1-866-525-2555', href: 'tel:+18665252555' },
      { icon: '📍', text: '300-279 Laurier W, Ottawa, ON K1P 5J9' },
    ],
  },
];

const DONATE_BASE_PROV = 'https://act.ontariondp.ca/donate/OSH';
const DONATE_BASE_FED = 'https://act.ndp.ca/donate/donate?source=20211018_WEB_GEN_1_DONATE_NDPWS_NDP_EN_ALL';

const ProvincialDonations = {
  title: 'Make a provincial donation',
  amounts: [
    { label: '$5',   href: `${DONATE_BASE_PROV}?ask=5` },
    { label: '$25',  href: `${DONATE_BASE_PROV}?ask=25` },
    { label: '$50',  href: `${DONATE_BASE_PROV}?ask=50` },
    { label: '$100', href: `${DONATE_BASE_PROV}?ask=100` },
  ],
};

const FederalDonations = {
  title: 'Make a federal donation',
  amounts: [
    { label: '$5',   href: `${DONATE_BASE_FED}&ask=5` },
    { label: '$25',  href: `${DONATE_BASE_FED}&ask=25` },
    { label: '$50',  href: `${DONATE_BASE_FED}&ask=50` },
    { label: '$100', href: `${DONATE_BASE_FED}&ask=100` },
  ],
};

function DonationGrid({ left, right }) {
  return (
    <section className="bg--ndp-orange padding-vert--lg">
      <div className="container">
        <div className="row">
          {[left, right].map((block, i) => (
            <div className="col col--6 text--center donation-col" key={i}>
              <h2 className="margin-bottom--lg">{block.title}</h2>
              <div className="row">
                {block.amounts.map((a, j) => (
                  <div key={j} className="col col--6 margin-bottom--sm margin-top--sm">
                    <a
                      className="button button--primary button--lg button--block"
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {a.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactRow({ columns = [] }) {
  return (
    <section className="bg--ndp-black padding-vert--lg" aria-label="Contact information">
      <div className="container">
        <div className="row">
          {columns.map((col, i) => (
            <div key={i} className="col col--4">
              <h3 className="margin-bottom--md">{col.title}</h3>
              <ul className="contact-list">
                {col.items.map((it, j) => (
                  <li key={j} className="contact-item">
                    <span className="contact-icon" aria-hidden>{it.icon}</span>
                    {it.href ? (
                      <a href={it.href}>{it.text}</a>
                    ) : (
                      <span>{it.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Your voice matters.
        </Heading>
        <p className="hero__subtitle">Join the Oshawa NDP today</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-left--md"
            to="https://act.ndp.ca/donate/membership-en"
            target="_self"
          >
            Join Now
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--md"
            to="/docs/membership"
          >
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

function TextBlockRow({ data }) {
  const { title, body, image, imageAlt = '' } = data || {};
  return (
    <section className="padding-vert--lg text-block-row">
      <div className="container">
        <div className="row">
          <div className={image ? 'col col--7' : 'col col--10 col--offset-1'}>
            {title ? <h1 className="margin-bottom--md">{title}</h1> : null}
            {body ? <div className="text-block-body">{body}</div> : null}
          </div>
          {image ? (
            <div className="col col--5">
              <div className="jack-image-wrap">
                <img src={image} alt={imageAlt} />
              </div>
            </div>
          ) : null}
      </div>
    </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Oshawa NDP Association ">
      <HomepageHeader />
      <main>
        <TextBlockRow data={JackLanding} />
        <DonationGrid left={ProvincialDonations} right={FederalDonations} />
        <ContactRow columns={ContactColumns} />
      </main>
    </Layout>
  );
}
