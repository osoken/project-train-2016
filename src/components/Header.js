import React from 'react'
import { Link } from 'react-router'

const Header = ( counter ) => (
  <div>
    < h1 > Hello React - Redux! < /h1>
    <ul>
      <li><Link to={`/`}>トップ</Link></li>
      <li><Link to={`wc`}>車椅子</Link></li>
    </ul>
  </div>
)

export default Header