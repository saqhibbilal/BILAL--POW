
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code2, Database, Brain, Globe, TrendingUp, Layers, BarChart4, Microscope, Globe2, Terminal, Cpu, Activity, Zap, X } from 'lucide-react';

import ibmImage from './IBM.jpg';
import qubicImage from './qubic.jpg';
import nvidiaImage from './nvidia.jpg';

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/saqhibbilal' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/saqhibb' },
  { name: 'Email', icon: <Mail size={20} />, url: 'mailto:saqhibbilal@gmail.com' },
];

export const TECH_ARSENAL = [
  { category: 'Systems & Languages', skills: ['C++ (STL)', 'Rust', 'Python', 'CMake', 'Ray'] },
  { category: 'ML & Intelligence', skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Qdrant', 'ChromaDB'] },
  { category: 'Distributed & Infra', skills: ['Docker', 'Kubernetes', 'AWS', 'Kafka', 'Databricks'] },
  { category: 'Backend & Data', skills: ['FastAPI', 'Node.js', 'Redis', 'PostgreSQL', 'MongoDB'] },
];

export const WORK_EXPERIENCE = [
  {
    company: 'Sentiantal',
    role: 'Software Engineer - MLOps',
    period: 'MAR 2025 — NOV 2025',
    description: 'Leading backend architecture for UpadyAI, an AI-assisted interview platform. Built a resume-aware question generation module using LLMs + Vector DB with prompt versioning and caching. Designed an adaptive pipeline that refines difficulty based on evaluation signals. Implemented LLM guardrails and optimized inference using response truncation to reduce latency.',
    highlights: ['LLM Guardrails', 'Inference Optimization', 'Vector DB Architecture']
  },
  {
    company: 'Optimum Business Solutions',
    role: 'Software Engineer',
    period: 'APR 2024 — FEB 2025',
    description: 'Architected an OCR-based ML API endpoint for invoice processing and multimodal data aggregation. Engineered a Kafka-driven event pipeline for asynchronous cross-service synchronization. Built an LLM-powered RAG system using Qdrant and Ollama for automated document querying and complaint classification.',
    highlights: ['Kafka Event Pipelines', 'OCR ML APIs', 'RAG Systems']
  },
  {
    company: 'Shawave Technologies',
    role: 'Software Engineer - Machine Learning',
    period: 'NOV 2023 — APR 2024',
    description: 'Scaled DriverSpot to production within a microservices architecture, implementing persistent WebSocket connections for real-time driver location streaming. Optimized demand surge pricing through model experimentation and versioning using MLflow and DVC. Leveraged AWS for secure infrastructure and RBAC.',
    highlights: ['Microservices Scaling', 'Real-time WebSockets', 'MLflow/DVC']
  },
  {
    company: 'Cyber Secured India',
    role: 'Digital Forensics Intern',
    period: 'SEP 2023 — NOV 2023',
    description: 'Executed web application security audits using Burp Suite and network reconnaissance via Nmap. Performed Android penetration testing to mitigate mobile vulnerabilities and analyzed forensic artifacts to identify potential security threats.',
    highlights: ['Security Testing', 'Penetration Testing', 'Digital Forensics']
  },
  {
    company: 'Google Developer Student Clubs',
    role: 'Mobile App Development Lead',
    period: 'AUG 2022 — AUG 2023',
    description: 'Led mobile engineering initiatives as a core team member. Orchestrated technical workshops, mentored developers, and managed full-cycle project deployments using cross-platform frameworks to drive community-led innovation.',
    highlights: ['Technical Leadership', 'Mobile Development', 'Mentorship']
  },
  {
    company: 'NSIC - National Small Industries Coorporation',
    role: 'Machine Learning Intern',
    period: 'JUN 2022 — SEP 2022',
    description: 'Engineered and optimized predictive ML models for industrial use cases. Implemented robust data preprocessing, feature engineering, and cross-validation pipelines to enhance model accuracy on high-dimensional manufacturing datasets.',
    highlights: ['Model Optimization', 'Feature Engineering', 'Data Preprocessing']
  },
  {
    company: 'Cisco',
    role: 'Software Engineer Intern',
    period: 'DEC 2021 — JAN 2022',
    description: 'Developed backend services and network automation scripts. Optimized internal tooling and participated in peer code reviews, focusing on scalable architectural patterns and robust API integrations within a global enterprise infrastructure.',
    highlights: ['Backend Development', 'Network Automation', 'API Integration']
  }
];

export const HACKATHONS = [
  {
    id: 'h1',
    title: 'Agentic AI Hackathon (IBM watsonx)',
    rank: 'FINALIST',
    year: '2025',
    description: 'Built a multi-agent preventive security system for desalination plants. Orchestrated IBM watsonx agents to ingest PLC/sensor data, detect anomalies, and automate incident routing via Twilio and WhatsApp API for real-time compliance reporting.',
    tags: ['IBM watsonx', 'Python', 'Multi-Agent Systems', 'IoT'],
    image: ibmImage
  },
  {
    id: 'h2',
    title: 'Qubic | Hack the Future',
    rank: 'FINALIST',
    year: '2024',
    description: 'Engineered Micro-Qubic, a pay-per-use micropayments engine for digital assets. Leveraged Qubic’s quorum-based consensus for near-instant settlement, providing merchants with automated monetization infrastructure and usage-based pricing models.',
    tags: ['Blockchain', 'Flask', 'Fintech', 'Smart Contracts'],
    image: qubicImage
  },
  {
    id: 'h3',
    title: 'Blackwell NVFP4 Kernel Hackathon',
    rank: 'PARTICIPANT',
    year: '2025',
    description: 'Under guidance Optimized low-level CUDA kernels for NVIDIA Blackwell hardware. Focused on pushing the theoretical limits of NVFP4 precision for maximum throughput, utilizing DGX B200 compute resources for high-performance performance tuning.',
    tags: ['CUDA', 'NVIDIA Blackwell', 'Kernel Optimization', 'HPC'],
    image: nvidiaImage
  }
];

/*
export const OPEN_SOURCE = [
  {
    id: 'os1',
    title: 'Distributed Image Processor',
    role: 'Creator',
    description: 'A parallel image-processing pipeline using Ray to scale batch workloads across CPU cores. Features chunk-based parallel workers for resizing and filtering, mirroring real-world ML preprocessing systems.',
    tags: ['Python', 'Ray', 'Distributed Systems'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  }
];
*/

export const PROJECTS = [
  {
    id: 'dist-img-ray',
    title: 'RayScale: Distributed Image Engine',
    description: 'Built a parallel image-processing pipeline in Python using Ray to scale batch workloads across all available CPU cores. Replaced sequential execution with chunk-based parallel workers for resizing, compression, and filtering. Designed fault-tolerant batch handling with detailed metrics for transparent performance tracking.',
    tags: ['Python', 'Ray', 'Distributed Systems', 'Pillow'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'solana-label',
    title: 'ChainLabel: Decentralized Annotation',
    description: 'Developed a minimal decentralized data-labeling platform on Solana using Anchor. Creators define text/image tasks off-chain, while task anchors and verified outcomes are written on-chain for auditability. Implemented an oracle service for tamper-resistant records and transparent contribution tracking.',
    tags: ['Rust', 'Anchor', 'Solana', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'chat-distiller',
    title: 'Context Distill: AI Chat Intelligence',
    description: 'Built an AI-powered chat intelligence system that transforms noisy group conversations into concise summaries and action items. Implemented a RAG pipeline using semantic embeddings and ChromaDB retrieval. Optimized token usage by sending only top-k relevant chunks to Mistral.',
    tags: ['Python', 'FastAPI', 'Mistral', 'ChromaDB'],
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'context-budget-opt',
    title: 'Context Budget Optimizer',
    description: 'LLM systems engineering project maximizing information density within fixed token budgets. Implemented greedy optimization for chunk selection based on semantic relevance and token cost. Features ChromaDB vector search and Mistral integration for cost-efficient RAG.',
    tags: ['LLM Systems', 'ChromaDB', 'Optimization', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'anti-calculator',
    title: 'ANTI-Calculator: Financial AI',
    description: 'Conversational assistant for real estate decisions using structured tool calling to eliminate LLM hallucinations. Built with Next.js and Mistral AI, it maps natural language to deterministic backend math functions for auditable financial outputs.',
    tags: ['Next.js', 'Mistral AI', 'Function Calling', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fraud-detection-streaming',
    title: 'Streaming Fraud Detection',
    description: 'Real-time anomaly detection pipeline processing ~6M transactions. Leverages Apache Kafka for ingestion and Spark Structured Streaming for inference using IsolationForest. Visualizes live risk signals via a Streamlit dashboard on GCP.',
    tags: ['Kafka', 'Spark', 'MLOps', 'GCP'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
];

export const EDUCATION = [
  {
    institution: 'Osmania University',
    degree: 'Bachelor of Engineering in Computer Science',
    location: 'Hyderabad, India',
    period: '2019 — 2023',
    coursework: ['Distributed Systems', 'Networking', 'DSA', 'Database Systems', 'Machine Learning'],
    highlights: ['Systems Programming', 'Algorithm Design', 'Network Architecture']
  }
];

export const NAVIGATION = [
  { id: 'tech-arsenal', label: 'Tech Arsenal' },
  { id: 'work-experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'education', label: 'Education' },
];
