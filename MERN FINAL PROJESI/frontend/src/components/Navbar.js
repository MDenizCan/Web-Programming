import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav>
      <div className="container">
        <Link to="/">
          <h1>Stickyy Notess</h1>
        </Link>
        <div className="date-time">
          <p>{date.toLocaleTimeString()}</p>
          <p>{date.toLocaleDateString()}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
