import React from 'react'
import { connect } from 'react-redux'

const Blog = ({ id, date, post }) => (
  <li
    onClick={() => post{ type: 'ADD_POST', id })}
    >
    {name}
    </li>
)

export default connect()(Blog)