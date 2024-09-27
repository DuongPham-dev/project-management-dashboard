// Types
import { UserModel, UserRole } from "@app/types/models/trello-structure";

export const mockUsers: UserModel[] = [
  {
    id: "user1",
    username: "john_doe",
    email: "john@example.com",
    password: "password123", // Changed from passwordHash to password
    role: UserRole.ADMIN,
    createdAt: 1694268000, // Unix timestamp
    updatedAt: 1694269000,
    avatarURL: "https://example.com/avatar1.jpg",
  },
  {
    id: "user2",
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456", // Changed from passwordHash to password
    role: UserRole.MEMBER,
    createdAt: 1694267000,
    updatedAt: 1694268000,
    avatarURL: "https://example.com/avatar2.jpg",
  },
  {
    id: "user3",
    username: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "password456",
    avatarURL: "https://randomuser.me/api/portraits/men/1.jpg",
    createdAt: 1694268000, // Unix timestamp
    updatedAt: 1694269000,
    role: UserRole.MEMBER,
  },
  {
    id: "user4",
    username: "Charlie Brown",
    email: "charlie.brown@example.com",
    password: "password789",
    avatarURL: "https://randomuser.me/api/portraits/men/2.jpg",
    createdAt: 1694267000,
    updatedAt: 1694268000,
    role: UserRole.MEMBER,
  },
];
