import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>BTS, an acronym of Bangtan Sonyeondan or “Beyond the Scene”, is a South Korean boyband that has been capturing the hearts of millions of fans globally since their debut in June 2013.</p>

        <p>The members of BTS are RM, Jin, SUGA, j-hope, Jimin, V and Jung Kook.Gaining recognition from their authentic, self-produced music and top-notch performances to the way they interact with their fans, the band has established themselves as global superstars breaking countless world records.  {''}
          <a href="https://ibighit.com/bts/eng/">BTS BOY BAND</a>
         </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id,date,title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
              <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
