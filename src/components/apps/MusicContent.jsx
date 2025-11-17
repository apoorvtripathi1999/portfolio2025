import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Wrapper = styled.div`
  padding: 20px;
  font-family: ${theme.typography.fonts.primary};
  font-size: ${theme.typography.sizes.body};
  background-color: ${theme.colors.window.body};
  height: 100%;
  overflow-y: auto;
`;

const SectionTitle = styled.h1`
  font-size: ${theme.typography.sizes.heading};
  font-weight: ${theme.typography.weights.black};
  font-family: ${theme.typography.fonts.display};
  border-bottom: 4px solid ${theme.colors.accents.acidOrange};
  padding-bottom: 8px;
  margin-bottom: 20px;
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 0px ${theme.colors.accents.toxicPurple};
`;

const TrackCard = styled.div`
  background: ${theme.colors.global.surfaceElevated};
  border: 4px solid ${theme.colors.accents.acidOrange};
  box-shadow: 6px 6px 0px ${theme.colors.accents.acidOrange};
  padding: 20px;
  margin-bottom: 20px;
  transition: ${theme.animations.normal};
  position: relative;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px ${theme.colors.accents.acidOrange};
  }
  
  &:before {
    content: '♪';
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    color: ${theme.colors.accents.cyberYellow};
  }
`;

const TrackTitle = styled.h2`
  font-size: ${theme.typography.sizes.subheading};
  font-weight: ${theme.typography.weights.bold};
  font-family: ${theme.typography.fonts.display};
  color: ${theme.colors.accents.neonGreen};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-right: 40px;
`;

const TrackMeta = styled.div`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.accents.hotPink};
  font-weight: ${theme.typography.weights.bold};
  background: rgba(255, 0, 128, 0.1);
  border: 2px solid ${theme.colors.accents.hotPink};
  padding: 4px 12px;
  display: inline-block;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.p`
  font-size: ${theme.typography.sizes.body};
  line-height: 1.6;
  margin: 12px 0;
  color: ${theme.colors.text.primary};
  border-left: 4px solid ${theme.colors.accents.electricBlue};
  padding-left: 16px;
  background: rgba(0, 102, 255, 0.05);
  padding: 12px 16px;
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  cursor: pointer;
  background: ${theme.colors.accents.cyberYellow};
  color: ${theme.colors.global.background};
  padding: 8px 16px;
  border: 3px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 3px 3px 0px ${theme.colors.accents.cyberYellow};
  font-weight: ${theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${theme.animations.fast};
  display: inline-block;
  margin-top: 8px;
  
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px ${theme.colors.accents.cyberYellow};
    background: ${theme.colors.accents.neonGreen};
    border-color: ${theme.colors.accents.neonGreen};
  }
`;

const MusicContent = () => (
  <Wrapper>
    <SectionTitle>My Music Playlists</SectionTitle>
    
    <TrackCard>
      <TrackTitle>Roadtrip Time Travel</TrackTitle>
      <TrackMeta>YouTube Music • Adventure Vibes</TrackMeta>
      <Description>
        Perfect soundtrack for long drives and road adventures. A nostalgic journey through time with tracks that make every mile memorable.
      </Description>
      <Link href="https://music.youtube.com/playlist?list=PLkhE-imQU2aLDci76TVw-ekGAsKqIrNhy&si=QcTt_V_aqHTbsomG" target="_blank" rel="noopener noreferrer">Listen on YouTube Music</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Rock Anthems</TrackTitle>
      <TrackMeta>YouTube Music • High Energy</TrackMeta>
      <Description>
        Epic rock classics and modern anthems that pump you up. From legendary guitar solos to powerful vocals that never get old.
      </Description>
      <Link href="https://music.youtube.com/playlist?list=PLkhE-imQU2aL5OyFSS78H0dGl70X9J1M0&si=Kc4LGL6cedEbU9q6" target="_blank" rel="noopener noreferrer">Listen on YouTube Music</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Bollywood I Listen To When I'm Free</TrackTitle>
      <TrackMeta>YouTube Music • Chill Bollywood</TrackMeta>
      <Description>
        My go-to Bollywood collection for relaxation and leisure time. A mix of soulful melodies, upbeat numbers, and timeless classics.
      </Description>
      <Link href="https://music.youtube.com/playlist?list=PLkhE-imQU2aJBE4t_fA39RauhRElKaoBW&si=cN-HS9ynu61jZE4c" target="_blank" rel="noopener noreferrer">Listen on YouTube Music</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Reggae</TrackTitle>
      <TrackMeta>YouTube • Island Vibes</TrackMeta>
      <Description>
        Laid-back reggae rhythms and island vibes to relax and unwind. Smooth grooves and positive energy from the Caribbean music tradition.
      </Description>
      <Link href="https://youtube.com/playlist?list=PLkhE-imQU2aJ4FJrr-SyVS3IoJ0fPPxwF&si=7m8H9pkLhUUIBEkc" target="_blank" rel="noopener noreferrer">Listen on YouTube</Link>
    </TrackCard>
  </Wrapper>
);

export default MusicContent;
