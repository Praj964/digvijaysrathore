import React from "react"
import { ProjectsData } from "../data"

function isEven(n) {
    return n % 2
}

function Projects() {
    return (
        <div>
            <div>
                <div className="row">
                    {ProjectsData.map((item, index) => (
                        <div key={index} className={isEven(index) ? "col-odd" : "col-even"}>
                            <div style={{
                                position: "relative"
                            }} className="proj-card">
                                <a href={item.link} target="_blank" rel="noopener">
                                    <img width="100%" src={item.image} />
                                </a>
                                <p style={{
                                    position: "absolute",
                                    bottom: 4,
                                    left: 16,
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    padding: 5
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