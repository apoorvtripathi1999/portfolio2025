import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const GameCanvas = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.global.background};
  position: relative;
  overflow: hidden;
  color: ${theme.colors.text.primary};
  font-family: ${theme.typography.fonts.mono};
  border: 4px solid ${theme.colors.accents.neonGreen};
  box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.2);
`;

const Paddle = styled.div.attrs(props => ({
  style: {
    top: `${props.top}px`,
  },
}))`
  position: absolute;
  width: 12px;
  height: 80px;
  background: linear-gradient(180deg, ${theme.colors.accents.neonGreen}, ${theme.colors.accents.electricBlue});
  border: 2px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 0 0 10px ${theme.colors.accents.neonGreen};
`;

const PlayerPaddle = styled(Paddle)`
  left: 20px;
`;

const AIPaddle = styled(Paddle)`
  right: 20px;
`;

const Ball = styled.div.attrs(props => ({
  style: {
    left: `${props.left}px`,
    top: `${props.top}px`,
  },
}))`
  position: absolute;
  width: 12px;
  height: 12px;
  background: ${theme.colors.accents.hotPink};
  border: 2px solid ${theme.colors.accents.cyberYellow};
  box-shadow: 0 0 15px ${theme.colors.accents.hotPink};
  border-radius: 50%;
`;

const Scoreboard = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  display: flex;
  gap: 40px;
  color: ${theme.colors.accents.cyberYellow};
  text-shadow: 2px 2px 0px ${theme.colors.accents.neonGreen};
`;

const PongContent = () => {
  const gameAreaRef = useRef(null);
  const [paddleY, setPaddleY] = useState(160);
  const [aiPaddleY, setAiPaddleY] = useState(160);
  const [ball, setBall] = useState({ x: 295, y: 195, dx: 4, dy: 4 });
  const [score, setScore] = useState({ player: 0, ai: 0 });

  const gameWidth = 600;
  const gameHeight = 400;
  const paddleHeight = 80;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        setPaddleY(y => Math.max(0, y - 20));
      } else if (e.key === 'ArrowDown') {
        setPaddleY(y => Math.min(gameHeight - paddleHeight, y + 20));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setBall(b => {
        let newX = b.x + b.dx;
        let newY = b.y + b.dy;
        let newDx = b.dx;
        let newDy = b.dy;

        // Wall collision (top/bottom)
        if (newY <= 0 || newY >= gameHeight - 10) {
          newDy = -newDy;
        }

        // Paddle collision
        // Player
        if (newX <= 30 && newX > 20 && newY >= paddleY && newY <= paddleY + paddleHeight) {
          newDx = -newDx;
        }
        // AI
        if (newX >= gameWidth - 40 && newX < gameWidth - 30 && newY >= aiPaddleY && newY <= aiPaddleY + paddleHeight) {
          newDx = -newDx;
        }

        // Score
        if (newX < 0) {
          setScore(s => ({ ...s, ai: s.ai + 1 }));
          return { x: gameWidth / 2, y: gameHeight / 2, dx: 4, dy: 4 };
        }
        if (newX > gameWidth) {
          setScore(s => ({ ...s, player: s.player + 1 }));
          return { x: gameWidth / 2, y: gameHeight / 2, dx: -4, dy: 4 };
        }

        return { x: newX, y: newY, dx: newDx, dy: newDy };
      });

      // AI movement
      setAiPaddleY(y => {
        const ballCenter = ball.y + 5;
        const paddleCenter = y + paddleHeight / 2;
        if (ballCenter < paddleCenter) {
          return Math.max(0, y - 3);
        } else {
          return Math.min(gameHeight - paddleHeight, y + 3);
        }
      });

    }, 1000 / 60);

    return () => clearInterval(gameLoop);
  }, [ball.y, paddleY, aiPaddleY]);

  return (
    <GameCanvas ref={gameAreaRef} tabIndex="0">
      <Scoreboard>
        <span>{score.player}</span>
        <span>{score.ai}</span>
      </Scoreboard>
      <PlayerPaddle top={paddleY} />
      <AIPaddle top={aiPaddleY} />
      <Ball left={ball.x} top={ball.y} />
    </GameCanvas>
  );
};

export default PongContent;
