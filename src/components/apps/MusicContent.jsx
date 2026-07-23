import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import client from '../../lib/sanityClient';
import { MUSIC_QUERY } from '../../lib/queries';
import LoadingState from '../shared/LoadingState';

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
  padding: 12px 16px;
  background: rgba(0, 102, 255, 0.05);
`;

const Link = styled.a`
  font-size: ${theme.typography.sizes.body};
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

const MusicContent = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch(MUSIC_QUERY)
      .then((result) => {
        setPlaylists(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading || error || playlists.length === 0) {
    return (
      <Wrapper>
        <SectionTitle>My Music Playlists</SectionTitle>
        <LoadingState
          loading={loading}
          error={error}
          empty={!loading && !error && playlists.length === 0}
          emptyMessage="Add 'Music Playlist' documents in Sanity Studio."
        />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SectionTitle>My Music Playlists</SectionTitle>
      {playlists.map((playlist) => (
        <TrackCard key={playlist._id}>
          <TrackTitle>{playlist.title}</TrackTitle>
          {(playlist.platform || playlist.mood) && (
            <TrackMeta>
              {playlist.platform}{playlist.platform && playlist.mood ? ' • ' : ''}{playlist.mood}
            </TrackMeta>
          )}
          {playlist.description && (
            <Description>{playlist.description}</Description>
          )}
          {playlist.url && (
            <Link href={playlist.url} target="_blank" rel="noopener noreferrer">
              Listen Now
            </Link>
          )}
        </TrackCard>
      ))}
    </Wrapper>
  );
};

export default MusicContent;
