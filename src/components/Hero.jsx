import { useEffect, useState } from 'react'

export default function Hero() {
  const roles = ['AI Engineer', 'AI Developer', 'AI/ML Engineer']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero container" id="top">
      <div className="hero-top">
        <div className="avatar-wrap">
          <div className="avatar">
            <img src="/assets/profile.jpeg" alt="Rajesh Sarma Bordoloi" />
          </div>
          <span className="avatar-status" title="Available for internships" />
        </div>

        <div className="hero-text">
          <h1 className="hero-name">Rajesh Sarma&nbsp;Bordoloi</h1>
          <p className="hero-tagline">Unlocking Possibilities.</p>

          <p className="hero-role">
            {roles[roleIndex]}
            <span className="cursor" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  )
}