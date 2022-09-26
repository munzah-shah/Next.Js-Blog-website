import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.paraText}>
        <p>
          Hey! Munzah here, a Computer Systems Engineer from Mirpur Khas, Sindh,
          Pakistan.
          <br />
          <br />I have worked as a freelancer with a diverse range of people for
          almost half a year, before joining this amazing company "Teamo". You
          can read more about my professional experiences{" "}
          <a href="https://www.linkedin.com/in/munzah-shah/" target="_blank">
            here
          </a>
          .<br />
          <br />
          Apart from studies and work, I love to play table tennis, discover new
          playlists on Spotify, watch Psychological Thrillers, and capture
          nature. I like to pen down the concepts I learn in my field. Posting
          all my concepts here in a blog, hope you like my notes!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2
          className={`${utilStyles.headingLg} ${utilStyles.whiteText} ${utilStyles.centeredText}`}
        >
          Blog
        </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, category }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br></br>
              <small
                className={`${utilStyles.lightText} ${utilStyles.headingSm}`}
              >
                Published on: <Date dateString={date}></Date>
                <p className={utilStyles.clearSpace}>Category: {category}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
