import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from '../utils/theme'
import { posts } from '../utils/getAllPosts'
import {Post} from "../src/Post"
import Link from 'next/link'

const Layout = dynamic(() => import("../src/layout"))

export default function Posts() {

  const [mode] = useContext(ThemeContext)
  const [data, setData] = useState([])

  const InlineLinksStyle = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: mode ? "#000" : "#FFF"
  }

  useEffect(() => {
    var sortedArray = posts.sort((a, b) => {
      var c = a.module.date.use
      var d = b.module.date.use
      return d - c
    })

    setData(sortedArray)
  })

  return (
    <div>
      <Layout pageTitle="writing archives — Digvijay" description="">
        <div className="hero-div">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><Link href="/"><span style={InlineLinksStyle}>home</span></Link> / <Link href="/"><span style={InlineLinksStyle}>writing archives</span></Link></p>
        </div>
        
        <div style={{padding: 10}} />
        {data.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </Layout>
    </div>
  )
}