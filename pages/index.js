import Head from 'next/head'
import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from '../utils/theme'
import Projects from '../src/projects'
import {Post} from "../src/Post"
import Link from 'next/link'
import { NowData } from '../data'

const Layout = dynamic(() => import("../src/layout"))

export default function Index() {

  const [mode] = useContext(ThemeContext)

  const InlineLinksStyle = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: "#000000",
    backgroundColor: "#f3f169",
    textDecoration: "none"
  }

  return (
    <div>
      <Head>
        <title>Digvijay — Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout pageTitle="Digvijay — Developer, Maker" description="My Personal Blog">


        <div className="main-div main-text">
          <p style={{
            fontSize: "26px",
            lineHeight: "1.6"
          }}>> Hey! I'm <a href="https://twitter.com/novadigvijay" target="_blank" rel="noopener"><span style={InlineLinksStyle}>Digvijay</span></a>. I write code, design UX and build products. Currently, I am working on <a href="https://kotaru.io" target="_blank" rel="noopener"><span style={InlineLinksStyle}>Kotaru</span></a>, a platform to share your personal notes with ease. Browse through my <a href="#projects"><span style={InlineLinksStyle}>projects</span></a> mentioned below.
          </p>
          <p className="main-text" style={{
            fontSize: "26px",
            lineHeight: "1.6"
          }}>
          > I am interested in tech, startups, humans, evolution & philosophy and would love to have a chat around that. I have been sharing my notes at <Link href="/posts"><span style={InlineLinksStyle}>/posts</span></Link>.
          </p>
          {/* <p style={{
            fontSize: "26px",
            lineHeight: "1.6"
          }}>
          > Visit <Link href="/now"><span style={InlineLinksStyle}>/now</span></Link> to know more about what I am upto and <Link href="/random"><span style={InlineLinksStyle}>/random</span></Link> to read some random facts about me.
          </p> */}
        </div>

        <p className="main-text" style={{
          fontSize: "26px"
        }}>> By the way,</p>

        <ul className="main-text" style={{
          fontSize: "26px",
          lineHeight: "1.8"
        }}>
          <li>I won the <a target="_blank" rel="noopener" href="https://hackinout.co"><span style={InlineLinksStyle}>InOut 7.0</span></a> by Devfolio.</li>
          <li>Successfully recieved <a target="_blank" rel="noopener" href="https://twitter.com/atroyn"><span style={InlineLinksStyle}>BUIDL grant by Anton</span></a> for quitting Twitter for a week and building a product.</li>
          <li>My article got featured on <a target="_blank" rel="noopener" href="https://hashnode.com"><span style={InlineLinksStyle}>Hashnode</span></a>'s must read list.</li>
        </ul>

        {/* <div style={{padding: 10}} />
        <div id="projects">
          <Projects />
        </div> */}
        <div style={{padding: 50}} />
      </Layout>
    </div>
  )
}
