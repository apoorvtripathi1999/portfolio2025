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
    <SectionTitle>Music & Audio Projects</SectionTitle>
    
    <TrackCard>
      <TrackTitle>Coding Playlist - Focus Sessions</TrackTitle>
      <TrackMeta>Released: 2023 • 2 hours 30 min</TrackMeta>
      <Description>
        Curated playlist of ambient and electronic music designed to enhance focus and productivity 
        during coding sessions. Features artists like Boards of Canada, Aphex Twin, and Tycho.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Listen on Spotify</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Digital Dreams - Original Composition</TrackTitle>
      <TrackMeta>Released: 2022 • 4 min 32 sec</TrackMeta>
      <Description>
        Original electronic composition created using Ableton Live, featuring synthesized 
        sounds and ambient textures inspired by the digital world.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Listen on SoundCloud</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Tech Podcast Theme Music</TrackTitle>
      <TrackMeta>Released: 2022 • 1 min 15 sec</TrackMeta>
      <Description>
        Upbeat electronic theme music created for a technology podcast, featuring 
        modern synthesizers and driving rhythms.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Listen on YouTube</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Ambient Coding Sounds</TrackTitle>
      <TrackMeta>Released: 2021 • 1 hour 45 min</TrackMeta>
      <Description>
        Collection of ambient soundscapes and white noise designed to create the perfect 
        coding environment. Includes rain sounds, coffee shop ambiance, and nature sounds.
      </Description>
      <Link href="#" onClick={(e) => e.preventDefault()}>Listen on Bandcamp</Link>
    </TrackCard>
  </Wrapper>
);

export default MusicContent;
