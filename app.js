import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path'
import { fileURLToPath } from 'url'

// Configuration
dotenv.config();
colors.enable();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const PORT = process.env.PORT || 8000;

// __________________________ SERVER __________________________
const app = express();
app.listen(PORT, ()=>{
    console.log("Testing\n".white + "Server Running\n".cyan + "LINK: ".magenta + (`127.0.0.1:` + PORT).yellow.underline.italic)
})

// MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());


// ROUTE
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'View', 'signIn.html'));
});
app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'View', 'mainPage.html'));
});
app.get('/login/profile', (req, res)=>{
    res.sendFile(path.join(__dirname, 'View', 'settingProfile.html'))
})
app.get('/signup', (req, res)=>{
    res.sendFile(path.join(__dirname, 'View', 'signUp.html'))
})

