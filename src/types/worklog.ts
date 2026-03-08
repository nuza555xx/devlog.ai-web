export interface Worklog {
  id: string;
  userId: string;
  date: string;
  rawText: string;
  tasks: string[];
  problems: string[];
  solutions: string[];
  learnings: string[];
  tags: string[];
  createdAt: string;
}

export interface WorklogListResponse {
  data: Worklog[];
}
