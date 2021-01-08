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
    color: mode ? "#000" : "#FFF"
  }

  return (
    <div>
      <Head>
        <title>Digvijay — Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout pageTitle="Digvijay - Hacker" description="My Personal Blog">
        <div className="hero-div">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}>Hey! I am Digvijay. I write code, design UX and build products. I am interested in tech, startups, humans, evolution & philosophy and would love to have a chat around that. I have been sharing my notes at <Link href="/posts"><span style={InlineLinksStyle}>/posts</span></Link>. Below is what I'm spending most of my time at.</p>
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

        <div style={{padding: 10}} />
        <Projects />
      </Layout>
    </div>
  )
}
