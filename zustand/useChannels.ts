import { createSelectors } from "@/services/createSelectors";
import { create } from "zustand";

type Message = {
  dateCreated?: Date;
  content: string;
  author?: string;
};

type Channel = {
  id: number;
  name: string;
  messages: Message[];
};

type Store = {
  channels: Channel[];
  addMessage: (channelId: number, message: Message, author: string) => void;
  deleteMessage: (channelId: number, messageDate: Date) => void;
};

const useChannelStoreBase = create<Store>((set) => ({
  channels: [
    {
      id: 1,
      name: "Channel 1",
      messages: [
        {
          id: 1,
          dateCreated: new Date("2024-01-01"),
          content: "Hello from Channel 1",
          author: "Author 1",
        },
        // Add more messages as needed
      ],
    },
    {
      id: 2,
      name: "Channel 2",
      messages: [
        {
          id: 1,
          dateCreated: new Date("2024-01-02"),
          content: "Hello from Channel 2",
          author: "Author 2",
        },
        // Add more messages as needed
      ],
    },
    // Add more channels as needed
  ],
  addMessage: (channelId, message, author) =>
    set((state) => {
      const channelIndex = state.channels.findIndex(
        (channel) => channel.id === channelId
      );
      if (channelIndex !== -1) {
        // Create a copy of the channels array
        const newChannels = [...state.channels];
        // Add the new message with author and current date to the messages array of the correct channel
        newChannels[channelIndex].messages.push({
          ...message,
          author,
          dateCreated: new Date(),
        });
        // Return the new channels array
        return { channels: newChannels };
      }
      // If the channel is not found, return the current state
      return state;
    }),

  deleteMessage: (channelId: number, messageDate: Date) =>
    set((state) => {
      const channelIndex = state.channels.findIndex(
        (channel) => channel.id === channelId
      );
      if (channelIndex !== -1) {
        // Create a copy of the channels array
        const newChannels = [...state.channels];
        // Find the message in the messages array of the correct channel and remove it
        newChannels[channelIndex].messages = newChannels[
          channelIndex
        ].messages.filter((message) => message.dateCreated !== messageDate);
        // Return the new channels array
        return { channels: newChannels };
      }
      // If the channel is not found, return the current state
      return state;
    }),
}));

export const useChannelStore = createSelectors(useChannelStoreBase);
