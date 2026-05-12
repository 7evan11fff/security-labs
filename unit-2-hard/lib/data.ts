export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  role: string;
}

export interface UserFile {
  id: number;
  userId: number;
  filename: string;
  content: string;
  createdAt: string;
}

export const users: User[] = [
  { id: 1001, username: "dev_riley", name: "Riley Anderson", email: "riley@vaultdrive.io", role: "developer" },
  { id: 1002, username: "ops_morgan", name: "Morgan Blake", email: "morgan@vaultdrive.io", role: "devops" },
  { id: 1003, username: "pm_casey", name: "Casey Park", email: "casey@vaultdrive.io", role: "product_manager" },
  { id: 1004, username: "dev_quinn", name: "Quinn Foster", email: "quinn@vaultdrive.io", role: "developer" },
  { id: 1005, username: "design_alex", name: "Alex Reeves", email: "alex@vaultdrive.io", role: "designer" },
  ...Array.from({ length: 37 }, (_, i) => ({
    id: 1006 + i,
    username: `user_${1006 + i}`,
    name: `Employee ${1006 + i}`,
    email: `emp${1006 + i}@vaultdrive.io`,
    role: "member",
  })),
  { id: 1042, username: "svc_backup", name: "Backup Service Account", email: "backup-svc@vaultdrive.io", role: "service_account" },
];

export const files: UserFile[] = [
  { id: 1, userId: 1001, filename: "meeting-notes.md", content: "Sprint planning notes for Q3...", createdAt: "2025-07-10" },
  { id: 2, userId: 1001, filename: "todo.txt", content: "1. Fix auth bug\n2. Review PR #412\n3. Update docs", createdAt: "2025-07-12" },
  { id: 3, userId: 1002, filename: "deploy-checklist.md", content: "Pre-deploy: run migrations, check env vars...", createdAt: "2025-07-11" },
  { id: 4, userId: 1003, filename: "roadmap-draft.md", content: "Q4 priorities: AI features, enterprise SSO, mobile app", createdAt: "2025-07-09" },
  { id: 5, userId: 1004, filename: "research.md", content: "Comparison of message queue solutions...", createdAt: "2025-07-13" },
  { id: 6, userId: 1005, filename: "brand-colors.md", content: "Primary: #6366f1, Secondary: #8b5cf6", createdAt: "2025-07-08" },
  { id: 7, userId: 1042, filename: "backup-config.yaml", content: "schedule: daily\nretention: 30d\nstorage: s3://vaultdrive-backups", createdAt: "2025-07-01" },
  { id: 8, userId: 1042, filename: "credentials.env", content: "DB_HOST=db-primary.internal\nDB_PASS=V4ultDr1v3_Pr0d!\nAWS_KEY=AKIA...\nFLAG=FLAG{idor_profile_accessed_42}", createdAt: "2025-07-01" },
];
