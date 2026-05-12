// Simulated database for SQL injection demonstration
// This mimics vulnerable SQL query execution

export const users = [
  { id: 1, username: "admin", password: "s3cur3P@ss!", email: "admin@shopdb.io", role: "admin" },
  { id: 2, username: "john", password: "john123", email: "john@shopdb.io", role: "user" },
  { id: 3, username: "sarah", password: "sarah456", email: "sarah@shopdb.io", role: "user" },
];

export const products = [
  { id: 1, name: "Wireless Headphones", price: 79.99, category: "Electronics" },
  { id: 2, name: "USB-C Hub", price: 45.00, category: "Electronics" },
  { id: 3, name: "Mechanical Keyboard", price: 129.99, category: "Electronics" },
  { id: 4, name: "Standing Desk", price: 399.99, category: "Furniture" },
  { id: 5, name: "Monitor Light Bar", price: 59.99, category: "Electronics" },
];

export const secrets = [
  { id: 1, key_name: "api_master_key", key_value: "mk_prod_9x8z7y6w5v4u" },
  { id: 2, key_name: "flag", key_value: "FLAG{sqli_union_extract_secret}" },
  { id: 3, key_name: "db_backup_key", key_value: "bk_2025_encrypted_aes256" },
];

export function simulateLogin(username: string, password: string): { success: boolean; user?: typeof users[0]; query: string } {
  const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

  // Check for SQL injection patterns
  if (username.includes("'") || password.includes("'")) {
    // Simulate injection: if the condition evaluates to always true
    const combined = username + password;
    if (combined.includes("OR") && (combined.includes("1=1") || combined.includes("'='"))) {
      return { success: true, user: users[0], query };
    }
    if (username.includes("--") || password.includes("--")) {
      // Comment out the rest — match on username only
      const cleanUser = username.split("'")[0];
      const found = users.find(u => u.username === cleanUser);
      if (found) return { success: true, user: found, query };
      // If no specific user, return first (admin)
      return { success: true, user: users[0], query };
    }
  }

  const found = users.find(u => u.username === username && u.password === password);
  return { success: !!found, user: found, query };
}

export function simulateSearch(term: string): { results: unknown[]; query: string } {
  const query = `SELECT * FROM products WHERE name LIKE '%${term}%'`;

  // Check for UNION injection
  if (term.toUpperCase().includes("UNION") && term.toUpperCase().includes("SELECT")) {
    // Parse what table they're trying to access
    const lower = term.toLowerCase();

    if (lower.includes("from secrets") || lower.includes("from  secrets")) {
      return {
        results: secrets.map(s => ({ name: s.key_name, price: s.key_value, category: "secrets" })),
        query,
      };
    }

    if (lower.includes("from users")) {
      return {
        results: users.map(u => ({ name: u.username, price: u.password, category: u.role })),
        query,
      };
    }

    // Generic UNION — return table names (information_schema simulation)
    if (lower.includes("table_name") || lower.includes("information_schema")) {
      return {
        results: [
          { name: "users", price: "table", category: "BASE TABLE" },
          { name: "products", price: "table", category: "BASE TABLE" },
          { name: "secrets", price: "table", category: "BASE TABLE" },
        ],
        query,
      };
    }

    return { results: [{ name: "UNION detected but no valid target", price: "", category: "" }], query };
  }

  // Check for ORDER BY (column count detection)
  if (term.toUpperCase().includes("ORDER BY")) {
    const match = term.match(/ORDER BY (\d+)/i);
    if (match) {
      const col = parseInt(match[1]);
      if (col <= 3) {
        const filtered = products.filter(p => p.name.toLowerCase().includes(term.split("'")[0].toLowerCase()));
        return { results: filtered, query };
      }
      return { results: [], query: query + " -- ERROR: column " + col + " out of range (max 3)" };
    }
  }

  // Normal search
  const filtered = products.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
  return { results: filtered, query };
}
