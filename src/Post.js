import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "../utils/theme"

export const Post = ({ post, isBlogPost }) => {
  const {
    link,
    module,
  } = post

  const [mode] = useContext(ThemeContext)

  return (
    <article>
      <Link href={'/posts' + link}>
        <div>
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <p style={{
              display: "inline",
              fontSize: "18px"
            }} className="post-title">{module.title}</p>
            <p style={{
              display: "inline",
              fontSize: "12px"
            }}>{module.date.display}</p>
          </div>
          <hr style={{
            height: "2px"
          }} color={mode ? "#1A1A1A" : "#EDEDED"} />
        </div>
      </Link>
    </article>
  )
}