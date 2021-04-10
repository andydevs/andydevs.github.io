import React from "react"

export default function Work() {
    return (
        <section id="work-experience">
            <h2>Work Experience</h2>

            {/* Work list */}
            <div>
                {/* Work unit */}
                <div>
                    {/* Title subtitle group */}
                    <div>
                        <h3>Raytheon</h3>
                        <h4>Software Engineer</h4>
                        <h4>2020 - present</h4>
                    </div>
                    <ul>
                        <li>Did some awesome stuff</li>
                        <li>Work in a group of people</li>
                    </ul>
                </div>

                <div>
                    <div>
                        <h3>Mathworks</h3>
                        <h4>Live Editor Intern</h4>
                        <h4>2018</h4>
                    </div>
                    <ul>
                        <li>Stuff</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}