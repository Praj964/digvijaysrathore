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
    color: mode ? "#000" : "#FFF",
    textDecoration: "none"
  }

  return (
    <div>
      <Head>
        <title>Digvijay — Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout pageTitle="Digvijay — Developer, Maker" description="My Personal Blog">


        <div className="hero-div">
          <h1 style={{
            fontWeight: "900px"
          }}>Hey, I'm Digvijay!</h1>
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}>I write code, design UX and build products. I am interested in tech, startups, humans, evolution & philosophy and would love to have a chat around that. I have been sharing my notes at <Link href="/posts"><span style={InlineLinksStyle}>/posts</span></Link>. Below is what I'm spending most of my time at.</p>
        </div>

        <ul style={{
          fontSize: "18px",
          lineHeight: "1.8"
        }}>
          <li>Building Kotaru</li>
          <li>Learning Golang</li>
        </ul>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.6"
        }}>Know more about what I am upto at <Link href="/now"><span style={InlineLinksStyle}>/now</span></Link>.</p>

        <h1>Random</h1>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.6"
        }}>Below is a list of some random but interesting facts about me.</p>

        <ul style={{
          fontSize: "18px",
          lineHeight: "1.8"
        }}>
          <li>I won the Hack <a target="_blank" rel="noopener" href="https://hackinout.co"><span style={InlineLinksStyle}>InOut 7.0</span></a> by Devfolio.</li>
          <li>Successfully recieved <a target="_blank" rel="noopener" href="https://twitter.com/atroyn"><span style={InlineLinksStyle}>BUIDL grant by Anton</span></a> for quitting Twitter for a week and building a product.</li>
          <li>My article got featured on <a target="_blank" rel="noopener" href="https://hashnode.com"><span style={InlineLinksStyle}>Hashnode</span></a>'s must read list.</li>
          <li>I want to start streaming on Twitch.</li>
          <li>I started web programming to work my own IOT platform which I never really built :(</li>
        </ul>

        <div style={{padding: 10}} />
        <Projects />
      </Layout>
    </div>
  )
}
