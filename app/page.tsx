import LoginForm from "./components/LoginForm";

const mainStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  height: "100vh",
};

export default function Home() {
  return (
    <main style={mainStyle}>
      <h1>Login to Slack</h1>
      <p>
        We suggest using the <strong>email address you use at work.</strong>
      </p>
      <LoginForm />
    </main>
  );
}
