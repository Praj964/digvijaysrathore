import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from '../utils/theme'
import Link from 'next/link'
import { NowData } from '../data'

const Layout = dynamic(() => import("../src/layout"))

export default function Now() {

  const [mode] = useContext(ThemeContext)

  const InlineLinksStyle = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: mode ? "#000" : "#FFF"
  }

  return (
    <div>
      <Layout pageTitle="Now — Digvijay" description="">
        <div className="hero-div">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><Link href="/"><span style={InlineLinksStyle}>home</span></Link> / <Link href="/now"><span style={InlineLinksStyle}>now</span></Link></p>
        </div>

        <div>
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}>{NowData.updateStatement}</p>
          <ul style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
          {NowData.updates.map((item, index) => (
              <li key={index}>{item}</li>
          ))}
          </ul>
        </div>
      </Layout>
    </div>
  )
}