import { ColorType, TaskStatusType, TaskPriority } from "@app/constants";
import {
  ColumnModel,
  FileType,
  ProjectModel,
  ProjectVisibility,
  TaskActivityLogModel,
  TaskAssigneeModel,
  TaskAttachmentModel,
  TaskCommentModel,
  TaskModel,
  UserModel,
  UserRole,
} from "@app/types/models/trello-structure";

// Mock Data for UserType
export const users: UserModel[] = [
  {
    id: "user1",
    username: "john_doe",
    email: "john@example.com",
    password: "password123", // Changed from passwordHash to password
    role: UserRole.ADMIN,
    createdAt: 1694268000, // Unix timestamp
    updatedAt: 1694269000,
    avatarURL: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "user2",
    username: "jane_smith",
    email: "jane@example.com",
    password: "password456", // Changed from passwordHash to password
    role: UserRole.MEMBER,
    createdAt: 1694267000,
    updatedAt: 1694268000,
    avatarURL: "https://randomuser.me/api/portraits/men/4.jpg",
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

// Mock Data for BoardType
export const boards: ProjectModel[] = [
  {
    id: "board1",
    ownerID: "user1",
    title: "Web Development Project",
    description: "Board for managing the web development tasks",
    visibility: ProjectVisibility.PRIVATE,
    createdAt: 1694268000,
    updatedAt: 1694269000,
  },
  {
    id: "board2",
    ownerID: "user2",
    title: "Marketing Strategy",
    description: "Tasks related to marketing campaigns and strategy planning",
    visibility: ProjectVisibility.PUBLIC,
    createdAt: 1694267000,
    updatedAt: 1694268000,
  },
];

// Mock Data for ListType
export const lists: ColumnModel[] = [
  {
    id: "list1",
    projectID: "board1",
    title: "Todo",
    position: 1,
    color: ColorType.VIOLET,
    createdAt: 1694268000,
    updatedAt: 1694269000,
  },
  {
    id: "list2",
    projectID: "board1",
    title: "In Progress",
    color: ColorType.ORANGE,
    position: 2,
    createdAt: 1694267000,
    updatedAt: 1694268000,
  },
  {
    id: "list3",
    projectID: "board1",
    title: "Done",
    color: ColorType.GREEN,
    position: 2,
    createdAt: 1694267000,
    updatedAt: 1694268000,
  },
];

// Mock Data for CardType (Tasks)
export const cards: TaskModel[] = [
  {
    id: "card1",
    columnID: "list1",
    title: "Set up environment",
    description: "Initial setup for the development environment",
    priority: TaskPriority.HIGH,
    status: TaskStatusType.TODO,
    dueDate: 1694872800, // Unix timestamp
    createdAt: 1694268000,
    updatedAt: 1694269000,
  },
  {
    id: "card2",
    columnID: "list2",
    title: "Build UI components",
    description: "Create reusable UI components",
    priority: TaskPriority.MEDIUM,
    status: TaskStatusType.IN_PROGRESS,
    createdAt: 1694267000,
    updatedAt: 1694268000,
  },
  {
    id: "card3",
    columnID: "list1",
    title: "Research APIs",
    description: "Explore third-party APIs for integration",
    priority: TaskPriority.NORMAL,
    status: TaskStatusType.TODO,
    dueDate: 1694969200, // Unix timestamp
    createdAt: 1694268000,
    updatedAt: 1694269000,
  },
  {
    id: "card4",
    columnID: "list3",
    title: "Deploy app",
    description: "Deploy the app to a cloud provider",
    priority: TaskPriority.HIGH,
    status: TaskStatusType.COMPLETED,
    createdAt: 1694266000,
    updatedAt: 1694267000,
  },
  {
    id: "card5",
    columnID: "list2",
    title: "Write tests",
    description: "Create unit tests for the core components",
    priority: TaskPriority.MEDIUM,
    status: TaskStatusType.IN_PROGRESS,
    dueDate: 1694969200, // Unix timestamp
    createdAt: 1694268000,
    updatedAt: 1694269000,
  },
  {
    id: "card6",
    columnID: "list3",
    title: "Finalize documentation",
    description: "Complete the project documentation",
    priority: TaskPriority.LOW,
    status: TaskStatusType.COMPLETED,
    createdAt: 1694265000,
    updatedAt: 1694266000,
  },
  {
    id: "card7",
    columnID: "list1",
    title: "Design database schema",
    description: "Create schema for the database",
    priority: TaskPriority.HIGH,
    status: TaskStatusType.TODO,
    createdAt: 1694267000,
    updatedAt: 1694268000,
  },
];

// Mock Data for CardCommentType
export const cardComments: TaskCommentModel[] = [
  {
    id: "comment1",
    taskID: "card1", // Comment associated with task1
    userID: "user1", // User who made the comment
    content: "Don't forget to set up a linter.", // Comment content
    createdAt: 1694268000, // When the comment was created (Unix timestamp)
    updatedAt: 1694269000, // When the comment was last updated (Unix timestamp)
  },
  {
    id: "comment2",
    taskID: "card2", // Comment associated with task2
    userID: "user2",
    content: "UI components look good, but need testing.",
    createdAt: 1694267000,
    updatedAt: 1694268000,
  },
  {
    id: "comment3",
    taskID: "card1", // Another comment for task1
    userID: "user3",
    content: "Please review the code for best practices.",
    createdAt: 1694266000,
    updatedAt: 1694267000,
  },
  {
    id: "comment4",
    taskID: "card3", // Comment for task3
    userID: "user4",
    content: "Remember to update the documentation after changes.",
    createdAt: 1694269000,
    updatedAt: 1694269500,
  },
  {
    id: "comment5",
    taskID: "card4", // Comment for task4
    userID: "user1",
    content: "The demo video looks great. No changes needed.",
    createdAt: 1694270000,
    updatedAt: 1694270500,
  },
];

// Mock Data for CardAttachmentType
export const cardAttachments: TaskAttachmentModel[] = [
  {
    id: "attachment1", // Unique ID for the attachment
    taskID: "card1", // ID of the task the attachment belongs to
    fileURL: "https://example.com/setup-guide.pdf", // URL to access the file
    filename: "setup-guide.pdf", // Name of the file
    fileType: FileType.PDF, // Type of file (from the FileType enum)
    uploadedAt: 1694268000, // Unix timestamp when the file was uploaded
  },
  {
    id: "attachment2",
    taskID: "card2",
    fileURL: "https://example.com/design-specs.doc",
    filename: "design-specs.doc",
    fileType: FileType.DOC,
    uploadedAt: 1694269000,
  },
  {
    id: "attachment3",
    taskID: "card3",
    fileURL: "https://example.com/logo.png",
    filename: "logo.png",
    fileType: FileType.IMAGE,
    uploadedAt: 1694267000,
  },
  {
    id: "attachment4",
    taskID: "card4",
    fileURL: "https://example.com/demo-video.mp4",
    filename: "demo-video.mp4",
    fileType: FileType.VIDEO,
    uploadedAt: 1694270000,
  },
  {
    id: "attachment5",
    taskID: "card5",
    fileURL: "https://example.com/financial-report.xlsx",
    filename: "financial-report.xlsx",
    fileType: FileType.EXCEL,
    uploadedAt: 1694271000,
  },
  {
    id: "attachment6",
    taskID: "card1",
    fileURL: "https://example.com/additional-docs.pdf",
    filename: "additional-docs.pdf",
    fileType: FileType.PDF,
    uploadedAt: 1694272000,
  },
  {
    id: "attachment7",
    taskID: "card3",
    fileURL: "https://example.com/banner-image.png",
    filename: "banner-image.png",
    fileType: FileType.IMAGE,
    uploadedAt: 1694273000,
  },
];
// Mock Data for CardAssigneeType
export const cardAssignees: TaskAssigneeModel[] = [
  {
    cardID: "card1",
    userID: ["user1", "user2"],
  },
  {
    cardID: "card2",
    userID: ["user2"],
  },
];

// Mock Data for ActivityLogType
export const activityLogs: TaskActivityLogModel[] = [
  {
    id: "log1",
    taskID: "card1",
    userID: "user1",
    action: "Moved task to 'In Progress'",
    timestamp: 1694268000,
  },
];
