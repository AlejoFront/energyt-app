import React from 'react'

const ContentFoot = ({name, description, nameClass}) => {
    return (
        <div className="content-foo">
            <h4>{name}</h4>
            <p className={nameClass}>{description}</p>
        </div>
    )
}

export default ContentFoot
