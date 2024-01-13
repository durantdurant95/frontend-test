"use client";

import { useChannelStore } from "@/zustand/useChannels";
import Link from "next/link";
import CompanyDropdown from "./CompanyDropdown";

const ChannelsContainer = () => {
  const channels = useChannelStore.use.channels();
  return (
    <section
      style={{ borderRight: "1px solid purple", padding: 12, width: 300 }}
    >
      <CompanyDropdown />
      <h5>Channels</h5>
      {channels.map((channel) => (
        <div key={channel.id} style={{ paddingTop: 10 }}>
          <Link
            style={{
              color: "black",
              textDecoration: "none",
            }}
            href={`/home/${channel.id}`}
          >
            <span style={{ marginRight: 8 }}>#</span>
            {channel.name}
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ChannelsContainer;
