export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  notes: string;
  phone: string;
}

export const users: User[] = [
  { id: 101, name: "Taylor Morgan", email: "taylor@cloudhub.dev", role: "developer", department: "Engineering", notes: "Working on microservices refactor.", phone: "+1 555-0101" },
  { id: 102, name: "Ava Williams", email: "ava@cloudhub.dev", role: "designer", department: "Design", notes: "New brand guidelines project.", phone: "+1 555-0102" },
  { id: 103, name: "Noah Johnson", email: "noah@cloudhub.dev", role: "developer", department: "Engineering", notes: "Kubernetes migration lead.", phone: "+1 555-0103" },
  { id: 104, name: "Isabella Garcia", email: "isabella@cloudhub.dev", role: "product_manager", department: "Product", notes: "Roadmap alignment with sales.", phone: "+1 555-0104" },
  { id: 105, name: "Liam Brown", email: "liam@cloudhub.dev", role: "developer", department: "Engineering", notes: "API gateway implementation.", phone: "+1 555-0105" },
  { id: 106, name: "Sophia Martinez", email: "sophia@cloudhub.dev", role: "devops", department: "Engineering", notes: "Terraform state migration.", phone: "+1 555-0106" },
  { id: 107, name: "Ethan Davis", email: "ethan@cloudhub.dev", role: "developer", department: "Engineering", notes: "Bug triage rotation this week.", phone: "+1 555-0107" },
  ...Array.from({ length: 34 }, (_, i) => ({
    id: 108 + i,
    name: `Team Member ${108 + i}`,
    email: `member${108 + i}@cloudhub.dev`,
    role: "member",
    department: "General",
    notes: "Standard account.",
    phone: `+1 555-${String(108 + i).padStart(4, "0")}`,
  })),
  { id: 142, name: "Admin Root", email: "root@cloudhub.dev", role: "super_admin", department: "Infrastructure", notes: "FLAG{idor_profile_accessed_42}", phone: "+1 555-0000" },
];
