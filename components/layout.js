import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Munzah Shah";
const description = "Software Engineer @ Teamo";
const linkedinProfile = "https://www.linkedin.com/in/munzah-shah/";
const facebookProfile = "https://web.facebook.com/munzah.shah.18?_rdc=1&_rdr";
const githubProfile = "https://github.com/munzah-shah";
export const siteTitle = "Munzah's Blog";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <meta
        name="description"
        content="My first ever personal blog website using Next.js. I write about random stuff"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle}></meta>
      <meta name="twitter:card" content="summary_large_image" />
      <fieldset className={styles.header_container}>
        {home ? (
          <>
            <legend
              className={`${utilStyles.headingXl} ${utilStyles.centeredText}`}
            >
              {name}
            </legend>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={90}
              width={90}
              alt="my display picture"
            />
            <h3 className={utilStyles.headingSm}>{description}</h3>
          </>
        ) : (
          <>
            <legend
              className={`${utilStyles.headingXl} ${utilStyles.centeredText}`}
            >
              {name}
            </legend>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={90}
                  width={90}
                  alt="my display picture"
                />
              </a>
            </Link>
            <h3 className={utilStyles.headingSm}>{description}</h3>
          </>
        )}
      </fieldset>
      <main className={utilStyles.justifiedText}>{children}</main>
      {!home && (
        <div className={`${styles.backToHome} ${utilStyles.centeredText}`}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer>
        <div className={styles.socials}>
          <a
            href={facebookProfile}
            className={styles.socialLink}
            target="_blank"
          >
            <Image src="/images/facebook.png" width={30} height={30} />
          </a>
          <a
            href={linkedinProfile}
            className={styles.socialLink}
            target="_blank"
          >
            <Image src="/images/linkedin.png" width={30} height={30} />
          </a>
          <a href={githubProfile} className={styles.socialLink} target="_blank">
            <Image src="/images/github.png" width={30} height={30} />
          </a>
        </div>
        <p className={styles.copyright}>Developed by Munzah Shah - 2022</p>
      </footer>
    </div>
  );
}
export default Layout;
