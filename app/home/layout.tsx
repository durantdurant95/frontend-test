import ChannelsContainer from "../components/ChannelsContainer";
import SideBar from "../components/SideBar";
import SlackHeader from "../components/SlackHeader";

const mainStyle: React.CSSProperties = {
  overflow: "hidden",
  backgroundColor: "#f0f0f0",
};

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={mainStyle}>
      <SlackHeader />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div
          style={{
            display: "flex",
            border: "1px solid purple",
            marginRight: 8,
            marginBottom: 8,
            borderRadius: 8,
            flex: 1,
          }}
        >
          <ChannelsContainer />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Homelayout;
