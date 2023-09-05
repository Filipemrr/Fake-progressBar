import styled from "styled-components";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [loaded, setLoaded] = useState(0);


  return (
    <Section>
      <h1>Home</h1>
      <div className="playerWrapper">
        <ReactPlayer
          playing
          onDuration={(d) => setDuration(d)}
          progressInterval={100}
          onProgress={(p) => {
            setPlayed(p.playedSeconds);
            setLoaded(p.loadedSeconds);
          }}
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
          url="https://www.youtube.com/watch?v=YLslsZuEaNE"
          controls={true} // Adicione esta linha para exibir os controles, incluindo a barra de volume
        />
        <ProgressBar progress={barra_de_progressao(played / duration)}>
          <div />
        </ProgressBar>
      </div>
      <div>
        <p>played: {played}</p>
        <p>duration: {duration}</p>
        <p>pro_bar: {barra_de_progressao(played / duration)}%</p>
      </div>
    </Section>
  );
}

function barra_de_progressao(x) {
  return -(x * x)+(2*x)
}

const ProgressBar = styled.div`
  width: 100%;
  background-color: #000;

  div {
    background-color: #ff0000;
    height: 10px;
    width: ${(props) => props.progress * 100}%;
  }
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #black;
  padding: 0 100px;
  gap: 2rem;
  input {
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
  }
  box-sizing: border-box;
  .grid {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    gap: 40px;
  }
`;
