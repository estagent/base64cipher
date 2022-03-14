export default {
    validateSecret: secret => typeof secret === 'string' && secret.length > 16,
    validateExpiry: expiresAt =>
        typeof expiresAt === 'number' && expiresAt > Date.now(),
    decodeCredentials: credentials =>
        typeof credentials === 'string' ? JSON.parse(atob(credentials)) : null,
    encodeCredentials: data =>
        typeof data === 'object' ? btoa(JSON.stringify(data)) : null,
    validate(data) {
        this.validateSecret(data.secret) && this.validateExpiry(data.expiresAt)
    },
}