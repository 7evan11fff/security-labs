export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  notes: string;
}

export const users: User[] = [
  { id: 1, name: "Jordan Hayes", email: "jordan@taskflow.io", role: "developer", department: "Engineering", notes: "Working on API v2 migration." },
  { id: 2, name: "Priya Sharma", email: "priya@taskflow.io", role: "designer", department: "Design", notes: "Redesigning onboarding flow." },
  { id: 3, name: "Marcus Chen", email: "marcus@taskflow.io", role: "developer", department: "Engineering", notes: "Fixing CI pipeline issues." },
  { id: 4, name: "Lena Okafor", email: "lena@taskflow.io", role: "product_manager", department: "Product", notes: "Q3 roadmap planning." },
  { id: 5, name: "Carlos Rivera", email: "carlos@taskflow.io", role: "developer", department: "Engineering", notes: "Performance optimization sprint." },
  ...Array.from({ length: 36 }, (_, i) => ({
    id: i + 6,
    name: `User ${i + 6}`,
    email: `user${i + 6}@taskflow.io`,
    role: "member",
    department: "General",
    notes: "Standard user account.",
  })),
  { id: 42, name: "System Administrator", email: "sysadmin@taskflow.io", role: "admin", department: "IT Operations", notes: "FLAG{idor_profile_accessed_42}" },
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 43,
    name: `User ${i + 43}`,
    email: `user${i + 43}@taskflow.io`,
    role: "member",
    department: "General",
    notes: "Standard user account.",
  })),
];
