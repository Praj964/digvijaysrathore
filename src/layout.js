import React, { useContext } from "react"
import {
    VscColorMode
} from "react-icons/vsc"
import {
    FaTwitter
} from "react-icons/fa"
import { ThemeContext } from "../utils/theme"
import Link from "next/link"

function Layout(props) {

    const [mode, setMode] = useContext(ThemeContext)

    return (
        <div style={{
            backgroundColor: mode ? "#1A202C" : "#F1F1F1",
            color: mode ? "#fff" : "#000"
        }}>
            <div style={{
                backgroundColor: mode ? "#000" : "#FFF",
                borderRight: `1px solid`,
                borderRightColor: mode ? "#000" : "#EDEDED",
            }} className="sidebar">  
                <a href="/" style={{
                    color: mode ? "#fff" : "#000",
                    fontSize: "25px"
                }}>👋</a>

                <div className="sider-bottom">
                    <a style={{
                        marginLeft: "10px",
                        color: mode ? "#fff" : "#000"
                    }}><VscColorMode onClick={() => {
                        window.localStorage.setItem("mode", !mode)
                        setMode(!mode)
                    }} size={25} /></a>  
                    <a target="_blank" href="https://twitter.com/novadigvijay" rel="noopener" style={{
                        marginLeft: "10px",
                        color: mode ? "#fff" : "#000"
                    }}><FaTwitter size={25} /></a>
                </div>
            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Layout