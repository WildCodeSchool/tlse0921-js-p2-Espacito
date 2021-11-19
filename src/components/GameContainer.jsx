/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';

const GameContainer = () => {
  // general settings of GameContainer
  const canvasRef = useRef(null);
  const widthOfContainer = 431;
  const heightOfContainer = 768;
  let gamePlaying = false;
  useEffect(() => {
    // General settings of GameContainer useEffect
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = 'ressources/assets-flappiss/flappiss-set.png';
    // GameContainer behaviour
    const gravity = 0.5;
    const speed = 6.2;
    const size = [60, 36];
    const jump = -11.5;
    const cTench = canvas.width / 10;
    // Asteroids settings
    const asteroidsWidth = 232;
    const asteroidsGap = 250;
    const asteroidsLoc = () => Math.random()
        * (canvas.height - (asteroidsGap + asteroidsWidth) - asteroidsWidth)
      + asteroidsWidth;
    // Based variables states
    let index = 0;
    let bestScore = 42;
    let currentScore = 0;
    let asteroids = [];
    let flight;
    let flightHeight;
    let animationFrameId;
    // Based setup of the game
    const setup = () => {
      currentScore = 0;
      flight = jump;
      flightHeight = canvas.height / 2 - size[1] / 2;
      asteroids = Array(3)
        .fill()
        .map((a, i) => [
          canvas.width + i * (asteroidsGap + asteroidsWidth) + 175,
          asteroidsLoc(),
        ]);
      console.log(asteroids);
    };
    // Game render (canvas behaviour)
    const render = () => {
      index += 1;
      // Background drawing
      ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 4)) % canvas.width) + canvas.width,
        0,
        canvas.width,
        canvas.height,
      );
      ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 4)) % canvas.width),
        0,
        canvas.width,
        canvas.height,
      );
      // Game display on click
      if (gamePlaying === true) {
        ctx.drawImage(
          img,
          432,
          Math.floor((index % 4) / 2) * size[1],
          ...size,
          cTench,
          flightHeight,
          ...size,
        );
        flight += gravity;
        flightHeight = Math.min(flightHeight + flight, canvas.height - size[1]);
      } else {
        ctx.drawImage(
          img,
          432,
          Math.floor((index % 4) / 2) * size[1],
          ...size,
          canvas.width / 2 - size[0] / 2,
          flightHeight,
          ...size,
        );
        flightHeight = canvas.height / 2 - size[1] / 2;
        ctx.fillText(`Meilleur Score : ${bestScore}`, 215, 245);
        ctx.fillText('Cliquez pour partir', 215, 535);
        ctx.fillText('à la rescousse', 215, 565);
        ctx.fillText("de l'ISS", 215, 595);
        ctx.textAlign = 'center';
        ctx.font = 'bold 30px courier';
      }
      // Asteroids display
      if (gamePlaying === true) {
        asteroids.map((asteroid) => {
          asteroid[0] -= speed;
          // Top asteroids
          ctx.drawImage(
            img,
            491,
            502 - asteroid[1],
            asteroidsWidth,
            asteroid[1],
            asteroid[0],
            0,
            asteroidsWidth,
            asteroid[1],
          );
          // Bottom asteroids
          ctx.drawImage(
            img,
            723,
            502 - asteroid[1],
            asteroidsWidth,
            canvas.height - asteroid[1] + asteroidsGap,
            asteroid[0],
            asteroid[1] + asteroidsGap,
            asteroidsWidth,
            canvas.height - asteroid[1] + asteroidsGap,
          );
          if (asteroid[0] <= -asteroidsWidth) {
            // Score calculing
            currentScore += 1;
            bestScore = Math.max(bestScore, currentScore);
            // remove past asteroid and creat a new one
            asteroids = [
              ...asteroids.slice(1),
              [
                asteroids[asteroids.length - 1][0]
                  + asteroidsGap
                  + asteroidsWidth,
                asteroidsLoc(),
              ],
            ];
          }
          // Make asteroids solid
          if (
            [
              asteroid[0] <= cTench + size[0],
              asteroid[0] + asteroidsWidth >= cTench,
              asteroid[1] - 20 > flightHeight
                || asteroid[1] + asteroidsGap + 20 < flightHeight + size[1],
            ].every((e) => e)
          ) {
            gamePlaying = false;
            setup();
          }
        });
      }
      document.getElementById(
        'bestScore',
      ).innerHTML = `Meilleur score : ${bestScore}`;
      document.getElementById(
        'currentScore',
      ).innerHTML = `Score actuel : ${currentScore}`;
      animationFrameId = window.requestAnimationFrame(render);
    };
    setup();
    img.onload = render();
    document.addEventListener('click', () => (gamePlaying = true));
    window.onclick = () => (flight = jump);
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      width={widthOfContainer}
      height={heightOfContainer}
    />
  );
};

export default GameContainer;
