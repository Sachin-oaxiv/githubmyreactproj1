import React from 'react'

const Footer = ({len}) => {
  return(
    
    <footer>{len}List {len === 1 ? "item":"items"}</footer>
  )
}

export default Footer

//const year = new Date();
//copyrights &copy; {year.getFullYear()}