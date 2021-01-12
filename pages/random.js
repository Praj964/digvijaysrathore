import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from '../utils/theme'
import Link from 'next/link'
import { RandomBooks, RandomLinks, RandomMovies } from '../data'

const Layout = dynamic(() => import("../src/layout"))

export default function Random() {

  const [mode] = useContext(ThemeContext)

  const InlineLinksStyle = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: mode ? "#000" : "#FFF"
  }

  const SpanStyles = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: "#000000",
    backgroundColor: "#f3f169"
  }

  return (
    <div>
      <Layout pageTitle="Random — Digvijay" description="">
        <div className="hero-div">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><Link href="/"><span style={InlineLinksStyle}>home</span></Link> / <Link href="/random"><span style={InlineLinksStyle}>random</span></Link></p>
        </div>

        <div style={{padding: 10}} />

        <div>
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><span style={SpanStyles}>Books</span> — {RandomBooks.statement} You may link to have a look over <a target="_blank" rel="noopener" href="https://goodreads.com/digvijaysr"><span style={SpanStyles}>goodreads.com/digvijaysr</span></a> where I track my reading progress.</p>
          <ul style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
          {RandomBooks.books.map((item, index) => (
              <Link href={item.link}><li key={index}>{item.name} by {item.author}</li></Link>
          ))}
          </ul>
        </div>

        <div style={{padding: 10}} />

        <div>
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><span style={SpanStyles}>Links</span> — {RandomLinks.statement}</p>
          <ul style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
          {RandomLinks.links.map((item, index) => (
              <a style={{
                  color: mode ? "#fff" : "#000",
                  textDecoration: "none"
              }} target="_blank" rel="noopener" href={item.link}><li key={index}>{item.excerpt} by {item.author}</li></a>
          ))}
          </ul>
        </div>

        <div style={{padding: 10}} />

        <div>
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><span style={SpanStyles}>Links</span> — {RandomMovies.statement}</p>
          <ul style={{
            fontSize: "18px",
            lineHeight: "1.8"
          }}>
          {RandomMovies.watch.map((item, index) => (
              <li key={index}>{item.name}</li>
          ))}
          </ul>
        </div>
        
      </Layout>
    </div>
  )
}