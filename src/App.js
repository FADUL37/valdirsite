import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Hero = styled.header`
  background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  color: #333;
  padding: 60px 0 40px 0;
  text-align: center;
`;
const Title = styled.h1`
  color: #ff7f00;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;
const Whats = styled.a`
  display: inline-block;
  background: #ff7f00;
  color: #fff;
  padding: 0.7em 1.5em;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1em;
  transition: background 0.2s;
  &:hover { background: #ff9900; }
`;
const Section = styled.section`
  background: #fffbe6;
  color: #333;
  padding: 2em 1em;
  margin: 0;
`;
const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }
`;
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(255,127,0,0.1);
  width: 260px;
  min-height: 260px;
  text-align: left;
  padding: 0;
  margin-bottom: 1em;
  transition: transform 0.2s;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 6px 20px rgba(255,127,0,0.2);
  }
  @media (max-width: 600px) {
    width: 90vw;
    min-width: 0;
  }
`;
const CardContent = styled.div`
  padding: 1.2em;
`;
const ServiceTitle = styled.h3`
  color: #ff7f00;
  margin-top: 0.5em;
`;
const Location = styled.div`
  background: #fffbe6;
  color: #333;
  text-align: center;
  padding: 2em 1em;
`;
const Footer = styled.footer`
  background: #ffe0b2;
  color: #333;
  text-align: center;
  padding: 1em 0;
  font-size: 0.95em;
`;

const services = [
  { title: 'Marcenaria', desc: 'Serviços de madeira sob medida e reformas.' },
  { title: 'Pintura', desc: 'Pintura residencial e comercial com acabamento profissional.' },
  { title: 'Reparos Elétricos', desc: 'Troca de tomadas, luminárias e pequenos reparos elétricos.' },
  { title: 'Reparos Hidráulicos', desc: 'Desentupimentos, vazamentos e manutenções em geral.' },
  { title: 'Esquadrias de Alumínio', desc: 'Instalação e manutenção de janelas e portas de alumínio.' },
  { title: 'Montagem de Móveis', desc: 'Montagem e desmontagem de móveis com agilidade.' },
  { title: 'Alvenaria', desc: 'Pequenas reformas, reparos em muros e paredes.' },
  { title: 'Drywall', desc: 'Instalação e manutenção de paredes de gesso acartonado.' },
];

const serviceEmojis = [
  '🪚', // Marcenaria
  '🎨', // Pintura
  '💡', // Reparos Elétricos
  '🚰', // Reparos Hidráulicos
  '🚪', // Esquadrias de Alumínio
  '🛋️', // Montagem de Móveis
  '🧱', // Alvenaria
  '🧰', // Drywall
];

function App() {
  return (
    <>
      <Hero>
        <Title>Marido de Aluguel Valdir</Title>
        <p>Serviços de qualidade em Curitiba/PR - Cristo Rei</p>
        <Whats href="https://wa.me/5541996994791" target="_blank" rel="noopener noreferrer">WhatsApp: (41) 99699-4791</Whats>
      </Hero>
      <Section>
        <h2 css={css`color: #ff7f00; text-align: center; margin-bottom: 1.5em;`}>Serviços Prestados</h2>
        <ServicesGrid>
          {services.map((s, i) => (
            <Card key={i}>
              <div style={{fontSize: '4em', textAlign: 'center', paddingTop: '20px'}}>{serviceEmojis[i]}</div>
              <CardContent>
                <ServiceTitle>{s.title}</ServiceTitle>
                <p>{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </ServicesGrid>
      </Section>
      <Location>
        <h2 style={{color:'#ff7f00'}}>Atendimento</h2>
        <p>Bairro: Cristo Rei<br/>Cidade: Curitiba/PR</p>
      </Location>
      <Footer>
        &copy; 2024 Marido de Aluguel Valdir. Todos os direitos reservados.
      </Footer>
    </>
  );
}

export default App;