const containerStyle = {
  display: "flex",
  padding: 10,
};
const MessageContainer = ({ params }: { params: { channelID: string } }) => {
  return (
    <div style={containerStyle}>
      <div>Channel ID: {params.channelID}</div>
    </div>
  );
};

export default MessageContainer;
