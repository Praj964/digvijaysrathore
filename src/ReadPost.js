import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "../utils/theme"
import Layout from "./layout"

export default function BlogPost({ children, meta}) {

  const [mode] = useContext(ThemeContext)

  const InlineLinksStyle = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: mode ? "#000" : "#FFF"
  }

  return (
    <Layout pageTitle={`${meta.title} | ${meta.category} | Writing Archives — Digvijay`} description={meta.description}>
      <div className="main-div">
        <p style={{
          fontSize: "20px",
          lineHeight: "1.6"
        }}><Link href="/"><span style={InlineLinksStyle}>home</span></Link> / <Link href="/notes"><span style={InlineLinksStyle}>writing archives</span></Link> / <Link href={`/r/${meta.category}`}><span style={{textTransform: "lowercase" ,...InlineLinksStyle}}>{meta.category}</span></Link> / <Link href=""><span style={{
          ...InlineLinksStyle,
          textTransform: "lowercase"
        }}>{meta.title}</span></Link></p>
      </div>
      <h1>{meta.title}</h1>
      <article className="post-body" style={{
        fontSize: "20px",
        lineHeight: "1.6"
      }}>{children}</article>
      <div style={{padding: "50px"}} />
    </Layout>
  )
}