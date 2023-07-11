import useSound from 'use-sound';



function DialUp() {
    const soundUrl = '/sounds/hoverdialup.mp3';
  
    const [playbackRate, setPlaybackRate] = React.useState(0.75);
  
    const [play] = useSound(soundUrl, {
      playbackRate,
      volume: 0.5,
    });
  
    const handleClick = () => {
      setPlaybackRate(playbackRate + 0.1);
      play();
    };
  
    return (
      <Button onClick={handleClick}>
        <span role="img" aria-label="Heart">
          💖
        </span>
      </Button>
    );
  }
  
  export default DialUp