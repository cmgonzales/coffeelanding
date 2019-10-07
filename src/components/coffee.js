import React from 'react'
import propTypes from 'prop-types'
import '../css/body.css'

const Coffee = props => (
    <div>
    <h1 className = "title">{props.title}</h1>
    <p className = "body">{props.body}</p>
    </div>
)

Coffee.propType = {
    title: propTypes.String,
    body: propTypes.String
}

export default Coffee


