'use client';

export default function Navbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = document.querySelector('.global-nav').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="global-nav">
      <div className="nav-content">
        <a href="#hero" className="nav-brand" onClick={(e) => handleScroll(e, '#hero')}>Prashant Kumar Manjhi</a>
        <div className="nav-links">
          <a href="#research" onClick={(e) => handleScroll(e, '#research')}>Research</a>
          <a href="#experiences" onClick={(e) => handleScroll(e, '#experiences')}>Experiences</a>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
          <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
          <a href="#education" onClick={(e) => handleScroll(e, '#education')}>Education</a>
        </div>
      </div>
    </nav>
  );
}
