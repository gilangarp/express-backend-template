import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: "*",
  allowedHeaders: "Content-Type, Authorization, X-Custom-Header",
  credentials: true,
  exposedHeaders: "X-Custom-Header, X-Response-Time",
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  preflightContinue: false,
};

export default corsOptions;
