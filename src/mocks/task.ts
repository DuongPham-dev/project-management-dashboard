// Constants
import { FileExtensionType, TaskPriority, TaskStatus } from "@app/constants";
// Types
import { TaskType } from "@app/types";

export const mockTasks: TaskType[] = [
  {
    id: "task-1",
    title: "Implement authentication",
    description: "Create a secure login and signup system for the app.",
    priority: TaskPriority.HIGH,
    status: TaskStatus.IN_PROGRESS,
    createdAt: 1694332800000, // Equivalent to "2024-09-10T08:00:00Z"
    updatedAt: 1694512800000, // Equivalent to "2024-09-12T10:00:00Z"
    assignedUserID: ["user-1", "user-2"],
    parentTaskID: undefined,
    dueDate: 1695211200000, // Equivalent to "2024-09-20T12:00:00Z"
    tags: [
      { id: "tag-1", label: "Backend" },
      { id: "tag-2", label: "Security" },
    ],
    files: [
      {
        id: "file-1",
        taskID: "task-1",
        fileURL: "https://example.com/file1.pdf",
        filename: "auth_design.pdf",
        uploadedAt: 1694442600000, // Equivalent to "2024-09-11T12:30:00Z"
        uploadedBy: "user-1",
        fileType: FileExtensionType.PDF,
      },
    ],
    comments: [
      {
        id: "comment-1",
        taskID: "task-1",
        userID: "user-2",
        content: "We need to add token-based authentication.",
        createdAt: 1694450400000, // Equivalent to "2024-09-11T14:00:00Z"
      },
    ],
  },
  {
    id: "task-2",
    title: "Design landing page",
    description: "Design a responsive landing page for the new app.",
    priority: TaskPriority.MEDIUM,
    status: TaskStatus.TODO,
    createdAt: 1693900800000, // Equivalent to "2024-09-05T08:00:00Z"
    updatedAt: 1693900800000, // Equivalent to "2024-09-05T08:00:00Z"
    assignedUserID: ["user-3"],
    parentTaskID: undefined,
    dueDate: undefined,
    tags: [
      { id: "tag-3", label: "Frontend" },
      { id: "tag-4", label: "Design" },
    ],
    files: [],
    comments: [],
  },
  {
    id: "task-3",
    title: "Setup CI/CD pipeline",
    description: "Automate testing and deployment using a CI/CD tool.",
    priority: TaskPriority.HIGH,
    status: TaskStatus.COMPLETED,
    createdAt: 1692489600000, // Equivalent to "2024-08-20T08:00:00Z"
    updatedAt: 1693552800000, // Equivalent to "2024-09-01T10:00:00Z"
    assignedUserID: ["user-4"],
    parentTaskID: "task-1",
    dueDate: 1693406400000, // Equivalent to "2024-08-30T12:00:00Z"
    tags: [{ id: "tag-5", label: "DevOps" }],
    files: [
      {
        id: "file-2",
        taskID: "task-3",
        fileURL:
          "https://media.dolenglish.vn/PUBLIC/MEDIA/e744e4da-d45e-4312-9b55-7a668664bf03.png",
        filename: "pipeline_config.png",
        uploadedAt: 1692970200000, // Equivalent to "2024-08-25T14:30:00Z"
        uploadedBy: "user-4",
        fileType: FileExtensionType.PNG,
      },
    ],
    comments: [
      {
        id: "comment-2",
        taskID: "task-3",
        userID: "user-5",
        content: "Great job on setting up the pipeline!",
        createdAt: 1693554600000, // Equivalent to "2024-09-01T10:30:00Z"
      },
    ],
  },
];
