import React, { useContext, useEffect } from "react"
import {
    VscColorMode
} from "react-icons/vsc"
import { ThemeContext } from "../utils/theme"
import Link from "next/link"
import Head from "next/head"

function Layout({children, pageTitle, description}) {

    const [mode, setMode] = useContext(ThemeContext)

    return (
        <>

        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="Description" content={description}></meta>
            <title>{pageTitle}</title>
        </Head>

        <div style={{
            backgroundColor: mode ? "#131415" : "#F1F1F1",
            color: mode ? "#fff" : "#000"
        }}>
            <div style={{
                backgroundColor: mode ? "#000" : "#fff",
                borderRight: `1px solid`,
                borderRightColor: mode ? "#000" : "#EDEDED",
            }} className="sidebar">  
                <Link href="/">
                    <a style={{
                        color: mode ? "#fff" : "#000",
                        fontSize: "25px"
                    }}><img src="/prof.png" width="40" style={{
                        borderRadius: "50%"
                    }} /></a>
                </Link>

                <div style={{
                    paddingBottom: "8px"
                }} className="sider-bottom">
                    <a style={{
                        marginLeft: "10px",
                        color: mode ? "#fff" : "#000"
                    }}><VscColorMode onClick={() => {
                        window.localStorage.setItem("mode", !mode)
                        setMode(!mode)
                    }} size={25} /></a>  
                </div>
            </div>

            <div className="content">
                {children}
            </div>

            <div style={{
                backgroundColor: mode ? "#000" : "#FFF"
            }} className="links">
                <p className="vertical-text"><a style={{
                    color: mode ? "#fff" : "#000"
                }} href="https://twitter.com/novadigvijay" style={{
                    color: mode ? "#fff" : "#000"
                }} target="_blank" rel="noopener">twitter</a> <a style={{
                    color: mode ? "#fff" : "#000"
                }} href="https://twitch.tv/digvijaysrathore" target="_blank" rel="noopener">twitch</a> <a style={{
                    color: mode ? "#fff" : "#000"
                }} href="https://github.com/digvijaysrathore" target="_blank" rel="noopener">github</a></p>
            </div>
        </div>
        </>
    )
}

export default Layout