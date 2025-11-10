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
    <SectionTitle>Coding Playlists & Music</SectionTitle>
    
    <TrackCard>
      <TrackTitle>Lofi Girl - Beats to Code/Study To</TrackTitle>
      <TrackMeta>YouTube • Live Stream • 24/7</TrackMeta>
      <Description>
        The iconic 24/7 lofi hip hop radio stream perfect for coding sessions. Millions of 
        developers worldwide use this stream to maintain focus during programming.
      </Description>
      <Link href="https://www.youtube.com/watch?v=jfKfPfyJRdk" target="_blank" rel="noopener noreferrer">Listen on YouTube</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Peaceful Piano - Spotify</TrackTitle>
      <TrackMeta>Spotify • 6 hours • Official Playlist</TrackMeta>
      <Description>
        Peaceful piano pieces for focus and relaxation. Perfect instrumental background music 
        for coding, featuring modern and classical piano compositions.
      </Description>
      <Link href="https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO" target="_blank" rel="noopener noreferrer">Listen on Spotify</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>ChilledCow - Lofi Hip Hop Mix</TrackTitle>
      <TrackMeta>YouTube • 1 hour • Popular Mix</TrackMeta>
      <Description>
        High-quality lofi hip hop mix perfect for programming sessions. Features smooth beats 
        and jazzy samples that help maintain concentration without being distracting.
      </Description>
      <Link href="https://www.youtube.com/watch?v=5qap5aO4i9A" target="_blank" rel="noopener noreferrer">Listen on YouTube</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Deep Focus - Spotify Official</TrackTitle>
      <TrackMeta>Spotify • 3 hours • Updated Weekly</TrackMeta>
      <Description>
        Keep calm and focus with ambient and post-rock music. Designed specifically for 
        concentration and deep work sessions including programming and coding.
      </Description>
      <Link href="https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ" target="_blank" rel="noopener noreferrer">Listen on Spotify</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Synthwave Programming - GitHub Playlist</TrackTitle>
      <TrackMeta>YouTube • 2 hours • Curated by Developers</TrackMeta>
      <Description>
        Cyberpunk and synthwave tracks that create the perfect atmosphere for late-night coding 
        sessions. Popular among developers on GitHub and Stack Overflow communities.
      </Description>
      <Link href="https://www.youtube.com/watch?v=MV_3Dpw-BRY" target="_blank" rel="noopener noreferrer">Listen on YouTube</Link>
    </TrackCard>
    
    <TrackCard>
      <TrackTitle>Brain Food - Spotify Focus</TrackTitle>
      <TrackMeta>Spotify • 4 hours • Official Playlist</TrackMeta>
      <Description>
        Ambient electronic and instrumental music to help you concentrate. Perfect background 
        music for coding, studying, and other focus-intensive work.
      </Description>
      <Link href="https://open.spotify.com/playlist/37i9dQZF1DWXLeA8Omikj7" target="_blank" rel="noopener noreferrer">Listen on Spotify</Link>
    </TrackCard>
  </Wrapper>
);

export default MusicContent;
