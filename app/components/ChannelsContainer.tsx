import CompanyDropdown from "./CompanyDropdown";

const ChannelsContainer = () => {
  return (
    <section
      style={{ borderRight: "1px solid purple", padding: 12, width: 300 }}
    >
      <CompanyDropdown />
      <ul>
        <li># general</li>
        <li># random</li>
      </ul>
    </section>
  );
};

export default ChannelsContainer;
