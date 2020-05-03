export default {
    PORT: process.env.PORT || 8080,
    TOKEN_KEY: 'justforfund-auth-token',
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    "http://localhost:8000/api"
}