import React from "react"
import { ProjectsData } from "../data"

function Projects() {
    return (
        <div>
            {/* <div style={{fontWeight: "900", letterSpacing: "2", fontSize: 18}}>
                $ cd
                <div className="blink-div" style={{
                    backgroundColor: "#fc5185",
                    height: 15,
                    width: 10,
                    display: "inline-block"
                }} />
            </div> */}

            <div>
                <div className="row">
                    {ProjectsData.map((item, index) => (
                        <div key={index} className="column">
                            <div style={{
                                position: "relative"
                            }} className="proj-card">
                                <a href={item.link} target="_blank" rel="noopener">
                                    <img width="100%" src={item.image} />
                                </a>
                                <p style={{
                                    position: "absolute",
                                    bottom: 4,
                                    left: 16
                                }}>{item.project}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects