// Types
import { UserType } from "@app/types";

export const mockUsers: UserType[] = [
  {
    id: "1",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    password: "password123",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 30, // 30 days ago
    avatarURL: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "2",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "password456",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 60, // 60 days ago
    avatarURL: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "3",
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    password: "password789",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 90, // 90 days ago
    avatarURL: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];
