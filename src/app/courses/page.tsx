"use client";

import { motion } from "framer-motion";
import {
    Database,
    BrainCircuit,
    Code2,
    LineChart,
    Globe,
    CheckCircle2,
    Clock,
    Users,
    Award,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
    {
        id: "data-science",
        name: "Data Science Fundamentals",
        icon: <Database className="w-8 h-8" />,
        duration: "12 Weeks",
        level: "Beginner to Intermediate",
        students: "500+",
        description: "Master the foundations of data science, from data manipulation to statistical analysis and visualization.",
        whatYouLearn: [
            "Python programming for data analysis",
            "Statistical analysis and probability",
            "Data cleaning and preprocessing",
            "Exploratory Data Analysis (EDA)",
            "Data visualization with Matplotlib & Seaborn",
            "SQL for data manipulation",
            "Introduction to machine learning concepts"
        ],
        tools: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Jupyter Notebooks",
            "SQL",
            "Git & GitHub"
        ],
        capstoneProject: {
            title: "Customer Churn Prediction System",
            description: "Build an end-to-end data science project analyzing customer behavior patterns to predict churn. You'll collect, clean, and analyze real-world data, create insightful visualizations, and present actionable business recommendations.",
            deliverables: [
                "Complete data analysis report",
                "Interactive dashboards",
                "Predictive model with 85%+ accuracy",
                "Business presentation deck"
            ]
        }
    },
    {
        id: "machine-learning",
        name: "Machine Learning Engineering",
        icon: <Code2 className="w-8 h-8" />,
        duration: "16 Weeks",
        level: "Intermediate to Advanced",
        students: "350+",
        description: "Learn to build, train, and deploy production-ready machine learning models that solve real-world problems.",
        whatYouLearn: [
            "Supervised learning algorithms (Regression, Classification)",
            "Unsupervised learning (Clustering, Dimensionality Reduction)",
            "Feature engineering and selection",
            "Model evaluation and validation",
            "Hyperparameter tuning and optimization",
            "Ensemble methods (Random Forest, XGBoost)",
            "Model deployment and MLOps basics"
        ],
        tools: [
            "Scikit-learn",
            "TensorFlow",
            "XGBoost",
            "MLflow",
            "Docker",
            "FastAPI",
            "AWS SageMaker",
            "Weights & Biases"
        ],
        capstoneProject: {
            title: "Intelligent Recommendation Engine",
            description: "Develop a sophisticated recommendation system similar to those used by Netflix or Amazon. Implement collaborative filtering, content-based filtering, and hybrid approaches, then deploy the model as a REST API.",
            deliverables: [
                "Trained recommendation model",
                "REST API with FastAPI",
                "Docker containerized application",
                "Performance monitoring dashboard",
                "Technical documentation"
            ]
        }
    },
    {
        id: "deep-learning",
        name: "Deep Learning & Neural Networks",
        icon: <BrainCircuit className="w-8 h-8" />,
        duration: "20 Weeks",
        level: "Advanced",
        students: "280+",
        description: "Dive deep into neural networks, computer vision, and natural language processing with cutting-edge deep learning techniques.",
        whatYouLearn: [
            "Neural network architectures (CNNs, RNNs, Transformers)",
            "Computer vision with CNNs",
            "Natural Language Processing (NLP)",
            "Transfer learning and fine-tuning",
            "Generative AI (GANs, VAEs)",
            "Attention mechanisms and Transformers",
            "Model optimization and quantization",
            "GPU acceleration and distributed training"
        ],
        tools: [
            "PyTorch",
            "TensorFlow/Keras",
            "Hugging Face Transformers",
            "OpenCV",
            "CUDA",
            "Weights & Biases",
            "Ray",
            "ONNX"
        ],
        capstoneProject: {
            title: "Multi-Modal AI Assistant",
            description: "Create an advanced AI system that can process both text and images. Build a custom chatbot that can analyze images, answer questions about them, and generate relevant responses using state-of-the-art transformer models.",
            deliverables: [
                "Custom trained vision-language model",
                "Interactive web application",
                "Model optimization for inference",
                "Comprehensive evaluation metrics",
                "Research paper-style documentation"
            ]
        }
    },
    {
        id: "time-series",
        name: "Time Series Forecasting",
        icon: <LineChart className="w-8 h-8" />,
        duration: "10 Weeks",
        level: "Intermediate",
        students: "220+",
        description: "Master time series analysis and forecasting techniques for financial, weather, and business applications.",
        whatYouLearn: [
            "Time series decomposition and analysis",
            "ARIMA and SARIMA models",
            "Prophet for forecasting",
            "LSTM networks for sequential data",
            "Anomaly detection in time series",
            "Multi-variate time series analysis",
            "Real-time forecasting systems"
        ],
        tools: [
            "Prophet",
            "statsmodels",
            "TensorFlow/Keras",
            "Plotly",
            "Apache Kafka",
            "InfluxDB",
            "Grafana",
            "Streamlit"
        ],
        capstoneProject: {
            title: "Real-Time Stock Market Predictor",
            description: "Build a comprehensive forecasting system that predicts stock prices and market trends. Implement multiple forecasting models, compare their performance, and create a real-time dashboard for monitoring predictions.",
            deliverables: [
                "Multiple forecasting models (ARIMA, LSTM, Prophet)",
                "Real-time data pipeline",
                "Interactive prediction dashboard",
                "Automated model retraining system",
                "Performance comparison report"
            ]
        }
    },
    {
        id: "ai-engineering",
        name: "AI Engineering & LLM Applications",
        icon: <Globe className="w-8 h-8" />,
        duration: "14 Weeks",
        level: "Intermediate to Advanced",
        students: "420+",
        description: "Learn to build production-grade AI applications using Large Language Models (LLMs) and modern AI engineering practices.",
        whatYouLearn: [
            "Working with OpenAI, Anthropic, and open-source LLMs",
            "Prompt engineering and optimization",
            "RAG (Retrieval Augmented Generation) systems",
            "Vector databases and embeddings",
            "LangChain and LlamaIndex frameworks",
            "Fine-tuning LLMs for specific tasks",
            "AI agent development",
            "Production deployment and scaling"
        ],
        tools: [
            "OpenAI API",
            "LangChain",
            "Pinecone/Weaviate",
            "Hugging Face",
            "Streamlit",
            "FastAPI",
            "Redis",
            "Kubernetes"
        ],
        capstoneProject: {
            title: "Enterprise RAG Chatbot System",
            description: "Develop a sophisticated chatbot that can answer questions about company documents using RAG architecture. Implement document processing, vector search, conversation memory, and deploy it as a scalable web application.",
            deliverables: [
                "Full-stack RAG application",
                "Document processing pipeline",
                "Conversational AI with memory",
                "Admin dashboard for monitoring",
                "Scalable cloud deployment",
                "Security and access control"
            ]
        }
    },
    {
        id: "ai-deployment",
        name: "AI System Deployment & MLOps",
        icon: <BrainCircuit className="w-8 h-8" />,
        duration: "12 Weeks",
        level: "Advanced",
        students: "190+",
        description: "Master the art of deploying, monitoring, and maintaining AI systems in production environments.",
        whatYouLearn: [
            "CI/CD pipelines for ML models",
            "Model versioning and experiment tracking",
            "Containerization with Docker and Kubernetes",
            "Model monitoring and drift detection",
            "A/B testing for ML models",
            "Infrastructure as Code (IaC)",
            "Cloud platforms (AWS, GCP, Azure)",
            "Cost optimization for AI workloads"
        ],
        tools: [
            "Docker",
            "Kubernetes",
            "MLflow",
            "Kubeflow",
            "Terraform",
            "GitHub Actions",
            "Prometheus",
            "Grafana",
            "AWS/GCP/Azure"
        ],
        capstoneProject: {
            title: "End-to-End MLOps Pipeline",
            description: "Build a complete MLOps infrastructure for a machine learning project. Implement automated training, testing, deployment, and monitoring with proper CI/CD practices and cloud infrastructure.",
            deliverables: [
                "Automated ML pipeline",
                "Model registry and versioning",
                "Monitoring and alerting system",
                "Auto-scaling deployment",
                "Infrastructure as Code",
                "Complete documentation and runbooks"
            ]
        }
    }
];

export default function CoursesPage() {
    return (
        <main className="min-h-screen bg-[#0B0F1A]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                        <Award className="w-4 h-4 text-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                            Professional Training
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        AI Academy <span className="text-secondary">Courses</span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Industry-leading AI training programs designed to transform you into a skilled AI professional.
                        Each course includes hands-on projects, expert mentorship, and a comprehensive capstone project.
                    </p>
                </motion.div>
            </section>

            {/* Courses Section */}
            <section className="pb-24 section-padding">
                <div className="space-y-24">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-3xl p-8 md:p-12 hover:border-secondary/30 transition-all"
                        >
                            {/* Course Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-secondary flex-shrink-0">
                                        {course.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">{course.name}</h2>
                                        <p className="text-gray-400 text-lg">{course.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Course Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                <div className="glass p-4 rounded-xl flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-secondary" />
                                    <div>
                                        <p className="text-xs text-gray-400">Duration</p>
                                        <p className="font-semibold">{course.duration}</p>
                                    </div>
                                </div>
                                <div className="glass p-4 rounded-xl flex items-center gap-3">
                                    <Award className="w-5 h-5 text-secondary" />
                                    <div>
                                        <p className="text-xs text-gray-400">Level</p>
                                        <p className="font-semibold">{course.level}</p>
                                    </div>
                                </div>
                                <div className="glass p-4 rounded-xl flex items-center gap-3">
                                    <Users className="w-5 h-5 text-secondary" />
                                    <div>
                                        <p className="text-xs text-gray-400">Students</p>
                                        <p className="font-semibold">{course.students}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-10">
                                {/* What You'll Learn */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                                        What You&apos;ll Learn
                                    </h3>
                                    <ul className="space-y-3">
                                        {course.whatYouLearn.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                                <ArrowRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tools & Technologies */}
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Code2 className="w-5 h-5 text-secondary" />
                                        Tools & Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {course.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-secondary/20 transition-all"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Capstone Project */}
                            <div className="glass-card bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30">
                                <div className="flex items-start gap-3 mb-4">
                                    <Award className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Capstone Project</h3>
                                        <h4 className="text-lg text-secondary font-semibold mb-3">
                                            {course.capstoneProject.title}
                                        </h4>
                                        <p className="text-gray-300 mb-4 leading-relaxed">
                                            {course.capstoneProject.description}
                                        </p>
                                        <div>
                                            <p className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-400">
                                                Project Deliverables:
                                            </p>
                                            <ul className="space-y-2">
                                                {course.capstoneProject.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-300">
                                                        <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enroll Button */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link href="/enroll" className="btn-primary flex items-center gap-2">
                                    Enroll in This Course
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link href="#contact" className="btn-outline">
                                    Ask Questions
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
