import { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeContext } from '../../utils/theme'
import { posts } from '../../utils/getAllPosts'
import {Post} from "../../src/Post"
import Link from 'next/link'
import { useRouter } from "next/router";
import * as JsSearch from 'js-search';

const Layout = dynamic(() => import("../../src/layout"))

export default function Category() {

  const router = useRouter();
  const { category } = router.query;
  const [mode] = useContext(ThemeContext)
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [categories, setCategories] = useState([])

  const InlineLinksStyle = {
    backgroundColor: mode ? "#F1F1F1" : "#1A1A1A",
    color: mode ? "#000" : "#FFF"
  }

  useEffect(() => {

    const fetchData = () => {
        // sort posts based on dates
        var sortedArray = posts.sort((a, b) => {
            var c = a.module.date.use
            var d = b.module.date.use
            return d - c
        })

        // fetch categories
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

        // search all the posts for a particular category
        var search = new JsSearch.Search(["module", "title"]);
        search.addIndex(["module", "category"]);
        search.addDocuments(posts);
        console.log(category)
        var result = search.search(category);

        var sortedResult = result.sort((a, b) => {
            var c = a.module.date.use
            var d = b.module.date.use
            return d - c
        })

        // set posts
        setData(sortedResult)   
    }

    fetchData()

    const handleRouteChange = (url) => {
        console.log(
            `App is changing to ${url} shallow routing`
        )
        setCount(count + 1)
    }
  
    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
        router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [count])

  return (
    <div>
      <Layout pageTitle="Writing Archives — Digvijay" description="">
        <div className="main-div">
          <p style={{
            fontSize: "18px",
            lineHeight: "1.6"
          }}><Link href="/"><span style={InlineLinksStyle}>home</span></Link> / <Link href="/posts"><span style={InlineLinksStyle}>writing archives</span></Link> / <Link href={`/wiki/${category}`}><span style={InlineLinksStyle}>{category}</span></Link></p>
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
        
        <div style={{padding: 10}} />
        {data.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </Layout>
    </div>
  )
}

Category.getInitialProps = async () => {
    return {}
}