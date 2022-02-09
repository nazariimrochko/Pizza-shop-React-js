import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={270}
        height={460}
        viewBox="0 0 270 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="135" cy="121" r="119" />
        <rect x="0" y="273" rx="6" ry="6" width="280" height="26" />
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" />
        <rect x="137" y="408" rx="20" ry="20" width="140" height="46" />
        <rect x="0" y="418" rx="6" ry="6" width="90" height="46" />
    </ContentLoader>
)

export default MyLoader
