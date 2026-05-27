export default function Home() {
  return (
    <main style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      fontFamily: 'Arial'
    }}>
      <h1 style={{
        fontSize: '60px',
        color: '#22d3ee',
        marginBottom: '20px'
      }}>
        Rare Breed Karaoke
      </h1>

      <p style={{
        fontSize: '24px',
        color: '#facc15'
      }}>
        Unleash Your Inner Rockstar 🎤
      </p>
    </main>
  );
}
