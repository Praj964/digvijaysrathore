import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from '../utils/theme'
import { posts } from '../utils/getAllPosts'
import {Post} from "../src/Post"
import Link from 'next/link'
import * as JsSearch from 'js-search';

const Layout = dynamic(() => import("../src/layout"))

export default function Posts() {

  const [mode] = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [categories, setCategories] = useState([])
  const [input, setInput] = useState("")

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

    const fetchCats = new Promise(() => {
      var cats = sortedArray.map(({ module }) => module.category)
      var uniqueCats = [...new Set(cats)];
      setCategories(uniqueCats)
    })

    fetchCats.then(value => {
      console.log(value)
    }).catch(err => {
      console.log(err)
    })

    setData(sortedArray)
  }, [])

  // const onChange = (e) => {
  //   if(e.target.value === "" | e.target.value === " ") {
  //     setInput(e.target.value)
  //     var sortedArray = posts.sort((a, b) => {
  //       var c = a.module.date.use
  //       var d = b.module.date.use
  //       return d - c
  //     });
  //     setData(sortedArray)
  //   } else {
  //     setInput(e.target.value);
  //     var search = new JsSearch.Search(["module","title"]);
  //     search.addIndex(["module", "title"])
  //     search.addIndex(["module", "description"])
  //     search.addDocuments(posts)
  //     console.log(posts[0].module.title)
  //     var newData = search.search(e.target.value)
  //     var sortedArray = newData.sort((a, b) => {
  //       var c = a.module.date.use
  //       var d = b.module.date.use
  //       return d - c
  //     });
  //     setData(sortedArray)
  //   }
  // }

  return (
    <div>
      <Layout pageTitle="Writing Archives — Digvijay" description="">
        <div className="hero-div">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><Link href="/"><span style={InlineLinksStyle}>home</span></Link> / <Link href="/posts"><span style={InlineLinksStyle}>writing archives</span></Link></p>
        </div>

        <Link href={`/posts`}>
          <span style={{
              borderBottom: "4px solid #f3f169",
              marginRight: "15px",
              fontSize: "18px"
          }}>All</span>
        </Link>

        {categories.map((item, index) => (
          <Link key={index} href={`/wiki/${item}`}>
            <span style={{
                borderBottom: "4px solid #f3f169",
                marginRight: "15px",
                fontSize: "18px"
            }}>{item}</span>
          </Link>
        ))}

        {/* <div className="search-container">
          <input value={input} onChange={(e) => onChange(e)} className="search-input" style={{
            backgroundColor: mode ? "#fff" : "#1a1a1a",
            color: mode ? "#000" : "#fff"
          }} placeholder="Search" />
        </div> */}
        
        <div style={{padding: 10}} />
        {data.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </Layout>
    </div>
  )
}