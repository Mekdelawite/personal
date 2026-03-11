import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";

const db = new Database("portfolio.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    tags TEXT,
    image TEXT,
    link TEXT
  );
`);

// Seed data if empty
const projectCount = db.prepare("SELECT COUNT(*) as count FROM projects").get() as { count: number };
if (projectCount.count === 0) {
  const insert = db.prepare("INSERT INTO projects (title, description, tags, image, link) VALUES (?, ?, ?, ?, ?)");
  insert.run("Nexus Cloud Platform", "A distributed cloud infrastructure management tool built with Go and React.", "Go,React,Docker,gRPC", "https://picsum.photos/seed/nexus/800/600", "#");
  insert.run("EcoStream AI", "Real-time environmental monitoring system using machine learning for anomaly detection.", "Python,TensorFlow,Next.js,PostgreSQL", "https://picsum.photos/seed/eco/800/600", "#");
  insert.run("Vanguard Pay", "Secure, high-throughput payment gateway integration for modern e-commerce.", "Node.js,TypeScript,Redis,Stripe", "https://picsum.photos/seed/vanguard/800/600", "#");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/projects", (req, res) => {
    const projects = db.prepare("SELECT * FROM projects").all();
    res.json(projects.map((p: any) => ({ ...p, tags: p.tags.split(",") })));
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const insert = db.prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    insert.run(name, email, message);
    res.json({ success: true, message: "Message sent successfully" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
