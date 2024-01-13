const sectionStyle: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const Home = () => {
  return (
    <section style={sectionStyle}>
      <h1>Welcome to Slack 👋</h1>
      <h5>Select a channel to start communicating 💬</h5>
      <p>
        Slack is a new way to communicate with your team. It’s faster, better
        organized, and more secure than email.
      </p>
    </section>
  );
};

export default Home;
