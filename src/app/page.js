'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header id="hero" className="section hero-section dark-mode">
        <ScrollReveal className="container text-center">
          <div className="profile-img-container">
            <Image 
              src="/prashant-profile.jpg" 
              alt="Prashant Kumar Manjhi" 
              width={140} 
              height={140} 
              className="profile-img" 
              priority
            />
          </div>
          <h1 className="hero-title">Prashant Kumar Manjhi.</h1>
          <p className="hero-description">
            Aspiring Research Scientist | Post graduate Student at Lovely Professional University Phagwara, Punjab | Lifelong Learner & Team Collaborator | Passionate About Diagnostic Science & Cancer Research
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <a href="mailto:manjhiprashant235@gmail.com" className="icon-btn" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </a>
            <a href="tel:8757079752" className="icon-btn" aria-label="Phone">
              <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/prashantmanjhi-labscientist?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
          </div>
        </ScrollReveal>
      </header>

      {/* 1. Research Section */}
      <section id="research" className="section projects-section light-mode">
        <ScrollReveal className="container">
          <h2 className="section-title">Research Area</h2>
          
          <ScrollReveal className="project-feature">
            <div className="project-info" style={{ flex: '1 1 100%' }}>
              <div className="project-header">
                <h3>Research Focus</h3>
                <span className="badge">Ovarian Cancer</span>
              </div>
              <p className="institution">Chittaranjan National Cancer Institute (CNCI), Kolkata</p>
              <p style={{ color: 'var(--text-light-secondary)', marginBottom: '20px' }}><strong>Department:</strong> Pathology and Cancer Screening</p>
              
              <ul className="feature-list">
                <li><strong>Core Disease Focus:</strong> Ovarian Cancer.</li>
                <li><strong>Technical Lens:</strong> Utilizing molecular biology techniques to identify early detection biomarkers and analyze oncogenic pathways.</li>
              </ul>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* 2. Experiences Section */}
      <section id="experiences" className="section experience-section dark-mode">
        <ScrollReveal className="container">
          <h2 className="section-title">Experiences</h2>
          
          <ScrollReveal className="project-feature mb-40">
            <div className="project-info" style={{ flex: '1 1 100%' }}>
              <div className="project-header">
                <h3>Summer Research Internship</h3>
                <span className="badge">Molecular Biology & Diagnostics</span>
              </div>
              <p className="institution">Chittaranjan National Cancer Institute (CNCI), Kolkata (June 1st – July 15th)</p>
              
              <ul className="feature-list">
                <li><strong>RNA Isolation:</strong> Successfully extracted high-quality RNA from clinical serum and blood samples.</li>
                <li><strong>DNA Isolation:</strong> Performed genomic DNA extractions from whole blood samples.</li>
                <li><strong>Spectrophotometry:</strong> Quantified concentrations and verified purity ratios using NanoDrop analysis.</li>
                <li><strong>Targeted Amplification:</strong> Mastered Polymerase Chain Reaction (PCR) architectures.</li>
                <li><strong>Gel Electrophoresis:</strong> Visualized and resolved fractional nucleic acid bands.</li>
                <li><strong>Western Blotting:</strong> Executed downstream protein detection and verification workflows.</li>
                <li><strong>Immunohistochemistry (IHC):</strong> Developed specialized skills to localize and analyze target antigens within tumor tissue samples.</li>
                <li><strong>Research Methodology:</strong> Rigorous adherence to precise clinical laboratory practices and deep integration of molecular diagnostic theory with translational oncological research models.</li>
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="project-feature">
            <div className="project-info" style={{ flex: '1 1 100%' }}>
              <div className="project-header">
                <h3>Laboratory Internships</h3>
                <span className="badge">Clinical Diagnostics</span>
              </div>
              <div className="institution" style={{ marginBottom: '10px' }}>
                <strong>SGL Superspeciality Hospital, Jalandhar</strong> (Jun 2024 – Dec 2024)<br />
                <strong>Fortis Memorial Research Institute, Gurgaon</strong> (Jun 2021 - Dec 2022)
              </div>
              
              <ul className="feature-list">
                <li>Collected blood, urine, and other biological samples efficiently, labeled and prepared samples accurately for detailed analysis.</li>
                <li>Culturing of microorganism, Identification by biochemical testing, Antibiotic sensitivity testing.</li>
                <li>Operated laboratory equipment like microscopes, analyzers (hematology and biochemistry) and centrifuges effectively conducted routine laboratory tests, including blood counts, glucose levels, and urinalysis.</li>
                <li>Histopathological and Cytological sample processing, performed histopathological staining like H and E etc. and documentation of results.</li>
                <li>Calibrated and maintained laboratory equipment, Documented test results with precision and entered them into hospital databases, to support healthcare providers in decision-making.</li>
              </ul>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* 3. Projects Section */}
      <section id="projects" className="section projects-section light-mode">
        <ScrollReveal className="container">
          <h2 className="section-title">Projects</h2>
          
          <ScrollReveal className="project-feature">
            <div className="project-info" style={{ flex: '1 1 100%', textAlign: 'center', padding: '60px' }}>
              <h3 style={{ color: 'var(--text-light-secondary)' }}>Project information coming soon.</h3>
              <p style={{ marginTop: '10px' }}>This section is reserved for detailed breakdowns of future academic or clinical projects.</p>
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </section>

      {/* 4. Skills Section */}
      <section id="skills" className="section skills-section dark-mode">
        <ScrollReveal className="container">
          <h2 className="section-title">Skills</h2>
          
          <div className="list-container mb-40">
            <ScrollReveal className="list-card" style={{ display: 'block' }}>
              <h3>Technical & Clinical Skills</h3>
              <p style={{ color: 'var(--text-dark-secondary)', marginTop: '8px', marginBottom: '20px' }}>Proficient in manual and automated diagnostic laboratory procedures.</p>
              <ul className="feature-list">
                <li><strong>Molecular Biology Techniques:</strong> DNA & RNA isolation, PCR, Agarose Gel Electrophoresis (AGE), Western Blotting, and Immunohistochemistry (IHC).</li>
                <li><strong>Clinical Instrumentation:</strong> Hands-on experience with advanced diagnostic analyzers including Cobas C311, Cobas E411, Sysmex XN1000, ECL 411, and Vitek 2 Compact.</li>
                <li><strong>Laboratory Diagnostics:</strong> Proficient in clinical microbiology, hematology, biochemistry, coagulation, and pathology.</li>
                <li><strong>Microbial Analysis:</strong> Experienced in Microbial Identification and Antimicrobial Susceptibility Testing (A.S.T).</li>
                <li><strong>Quality Assurance:</strong> Skilled in laboratory equipment calibration, routine maintenance, and quality control (QC) protocols.</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal className="list-card" style={{ display: 'block', transitionDelay: '0.1s' }}>
              <h3>Soft Skills</h3>
              <p style={{ color: 'var(--text-dark-secondary)', marginTop: '8px', marginBottom: '20px' }}>Ensuring quality assurance, precise documentation, and effective teamwork.</p>
              <ul className="feature-list">
                <li><strong>Analytical Thinking:</strong> Strong problem-solving abilities applied to trouble-shooting diagnostic assays and interpreting complex data.</li>
                <li><strong>Attention to Detail:</strong> Meticulous approach to executing sensitive wet-lab molecular protocols and maintaining contamination-free environments.</li>
                <li><strong>Collaborative Teamwork:</strong> Proven capability to work effectively within multi-disciplinary pathology and oncology research teams.</li>
                <li><strong>Time Management:</strong> Efficiently handling high-throughput diagnostic workflows and balancing research timelines.</li>
                <li><strong>Professional Communication:</strong> Able to present scientific data clearly and collaborate on research documentation.</li>
              </ul>
            </ScrollReveal>
          </div>

          <h3 style={{ marginBottom: '20px', fontSize: '24px', letterSpacing: '-0.02em' }}>Certifications & Seminars</h3>
          <div className="list-container">
            <ScrollReveal className="list-card">
              <div className="list-card-left">
                <h3>Good Clinical Practice (GCP)</h3>
                <p className="institution">LPU</p>
              </div>
              <div className="list-card-right">
                <p className="date">Dec 2023 - 2025</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="list-card" style={{ transitionDelay: '0.1s' }}>
              <div className="list-card-left">
                <h3>HACCP Certification</h3>
                <p className="institution">Certification Board</p>
              </div>
              <div className="list-card-right">
                <p className="date">Active</p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="list-card" style={{ transitionDelay: '0.2s' }}>
              <div className="list-card-left">
                <h3>Workshop on Vaccine Designing</h3>
                <p className="institution">ITLS Academy</p>
              </div>
              <div className="list-card-right">
                <p className="date">Aug 20 - 2025</p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="list-card" style={{ transitionDelay: '0.3s' }}>
              <div className="list-card-left">
                <h3>Seminars</h3>
                <p className="institution">LPU / CIF LPU</p>
                <ul className="feature-list" style={{ marginTop: '15px' }}>
                  <li>Field emission scanning electron microscopy (Mar 2026)</li>
                  <li>Communicable diseases (Jan 2025)</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Education Section */}
      <section id="education" className="section education-section light-mode">
        <ScrollReveal className="container">
          <h2 className="section-title">Education</h2>
          <div className="list-container">
            <ScrollReveal className="list-card">
              <div className="list-card-left">
                <h3>MSc. Clinical Microbiology</h3>
                <p className="institution">Lovely Professional University (Phagwara, Punjab)</p>
              </div>
              <div className="list-card-right">
                <p className="date">Aug 2025 - Present</p>
                <p className="metric">CGPA: 8.81</p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="list-card" style={{ transitionDelay: '0.1s' }}>
              <div className="list-card-left">
                <h3>Bachelor of Medical Lab Technology</h3>
                <p className="institution">Lovely Professional University (Phagwara, Punjab)</p>
              </div>
              <div className="list-card-right">
                <p className="date">Aug 2023 – July 2025</p>
                <p className="metric">CGPA: 8.94 (89%)</p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="list-card" style={{ transitionDelay: '0.2s' }}>
              <div className="list-card-left">
                <h3>Diploma in Medical Lab Technology</h3>
                <p className="institution">Lovely Professional University (Phagwara, Punjab)</p>
              </div>
              <div className="list-card-right">
                <p className="date">Aug 2020 – May 2023</p>
                <p className="metric">CGPA: 8.85 (88.5%)</p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="list-card" style={{ transitionDelay: '0.3s' }}>
              <div className="list-card-left">
                <h3>10th Grade</h3>
                <p className="institution">Sainik School Nalanda (Nalanda, Bihar)</p>
              </div>
              <div className="list-card-right">
                <p className="date">May 2017</p>
                <p className="metric">CGPA: 8.4</p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="global-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <p><strong>Prashant Kumar Manjhi</strong></p>
              <p>+91 8757079752</p>
            </div>
            <div className="footer-col right">
              <a href="mailto:manjhiprashant235@gmail.com">manjhiprashant235@gmail.com</a>
              <a href="https://www.linkedin.com/in/prashantmanjhi-labscientist?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Prashant Kumar Manjhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
