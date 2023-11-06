import { io } from "socket.io-client";
const URL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-server-6hj5.onrender.com' : 'http://localhost:5000'

export const socket = io(URL);

