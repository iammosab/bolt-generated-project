import React, { useState, useEffect } from 'react'
    import styled, { keyframes, css } from 'styled-components'
    import { useInView } from 'react-intersection-observer'
    import { animated, useSpring, config } from 'react-spring'

    // Animations
    const float = keyframes`
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    `

    const gradient = keyframes`
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    `

    // Styled Components
    const Container = styled.div`
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 2rem;

      @media (max-width: 768px) {
        padding: 0 1rem;
      }
    `

    const Section = styled.section`
      padding: 6rem 0;
      position: relative;

      @media (max-width: 768px) {
        padding: 3rem 0;
      }
    `

    const GlassCard = styled.div`
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
      padding: 2.5rem;
      margin: 1rem 0;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }

      @media (max-width: 768px) {
        padding: 1.5rem;
      }
    `

    const HeroSection = styled(Section)`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: linear-gradient(-45deg, #1a237e, #283593, #3949ab);
      background-size: 400% 400%;
      animation: ${gradient} 15s ease infinite;
      color: white;
    `

    const DomainName = styled.h1`
      font-size: 6rem;
      margin-bottom: 1.5rem;
      letter-spacing: -0.03em;
      animation: ${float} 6s ease-in-out infinite;
      background: linear-gradient(90deg, #ffffff, #ffeb3b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (max-width: 768px) {
        font-size: 3.5rem;
      }
    `

    const CTAButton = styled.button`
      background: linear-gradient(135deg, #ff9800, #ff5722);
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.25rem;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
      position: relative;
      overflow: hidden;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
      }

      &:active {
        transform: translateY(0);
      }

      @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
      }
    `

    const ValueCard = styled(GlassCard)`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      backdrop-filter: blur(15px);
      background: rgba(255, 255, 255, 0.08);
    `

    const TrustSection = styled(Section)`
      background: linear-gradient(45deg, #1a237e, #283593);
      color: white;
      text-align: center;
      padding: 4rem 0;
    `

    const TrustBadges = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    `

    const TrustBadge = styled(GlassCard)`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 1.5rem;
      min-height: 120px;
    `

    const ContactForm = styled(GlassCard)`
      max-width: 600px;
      margin: 2rem auto;
      display: ${props => props.show ? 'flex' : 'none'};
      flex-direction: column;
      gap: 1.5rem;
      backdrop-filter: blur(20px);
      background: rgba(255, 255, 255, 0.1);
    `

    const Input = styled.input`
      width: 100%;
      padding: 1rem;
      margin: 0.5rem 0;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      backdrop-filter: blur(5px);
      transition: all 0.3s ease;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }

      &:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 0 2px rgba(255, 152, 0, 0.5);
      }
    `

    export default function App() {
      const [showForm, setShowForm] = useState(false)
      const [ref, inView] = useInView({ triggerOnce: true })
      
      const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: config.gentle
      })

      const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
      }

      useEffect(() => {
        if (showForm) {
          // Track form view
          console.log('Form viewed')
        }
      }, [showForm])

      return (
        <div>
          <HeroSection>
            <animated.div style={fadeIn}>
              <DomainName>skool.ma</DomainName>
              <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
                Transform Moroccan Education Online | حول التعليم المغربي عبر الإنترنت
              </p>
              <CTAButton onClick={() => setShowForm(true)}>
                Make an Offer | تقديم عرض
              </CTAButton>
            </animated.div>
          </HeroSection>

          <Container ref={ref}>
            <Section>
              <ValueCard>
                <h2>Premium .ma Domain for Education</h2>
                <p>6 characters, memorable</p>
                <p>Native Moroccan TLD</p>
                <p>Education sector exact match</p>
              </ValueCard>

              <ValueCard className="rtl">
                <h2>فرصة سوقية</h2>
                <p>سوق التعليم الإلكتروني المتنامي في المغرب</p>
                <p>التحول الرقمي في التعليم</p>
                <p>اسم نطاق جاهز للعلامة التجارية</p>
              </ValueCard>

              <ValueCard>
                <h2>Technical Advantages</h2>
                <p>Perfect domain authority potential</p>
                <p>SEO-optimized length</p>
                <p>Cross-platform compatibility</p>
              </ValueCard>
            </Section>

            <TrustSection>
              <h2>Secure Transaction Guaranteed</h2>
              <TrustBadges>
                <TrustBadge>🔒 SSL Secured</TrustBadge>
                <TrustBadge>📜 Escrow Service</TrustBadge>
                <TrustBadge>⚡ Instant Transfer</TrustBadge>
              </TrustBadges>
            </TrustSection>

            <ContactForm show={showForm} onSubmit={handleSubmit}>
              <h2>Make an Offer</h2>
              <Input type="text" placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
              <Input type="tel" placeholder="Phone (optional)" />
              <Input type="number" placeholder="Offer Amount (MAD)" required />
              <Input as="textarea" placeholder="Message" rows="4" required />
              <CTAButton type="submit">Submit Offer</CTAButton>
            </ContactForm>
          </Container>
        </div>
      )
    }
