import React from 'react'
import { Link } from 'react-router'

const Header = ( counter ) => (
  <div>
    < h1 > Hello React - Redux! < /h1>
    <ul>
      <li><Link to={`/`}>トップ</Link></li>
      <li><Link to={`wheelchair`}>車いすタイプ選択</Link></li>
      <li><Link to={`destination`}>目的地選択</Link></li>
      <li><Link to={`departure`}>出発地選択</Link></li>
      <li><Link to={`way`}>道のり</Link></li>
    </ul>
  </div>
)

export default Header
