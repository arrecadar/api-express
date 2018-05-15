# CHANGE LOG

## Unreleased
- [ ] Auth: add token refresh
- [ ] Register: add email validations
- [ ] Resources: add paginations
- [ ] Resources: index routes return `error not found` when needs to return `{ data: [] }`

### Add
- [x] Users.
- [x] Ongs.
- [x] Campaigns.
- [x] Transformers folder to handle with custom transformers.
- [x] Authentication.
  - [x] Login with email and password.
  - [x] JWT authorization.
  - [ ] Token Refresh
- [ ] Register
  - When register send an email confirmation.
- [ ] resources: add pagination.
- [x] Added public routes
  - [x] GET /ongs
  - [x] GET /ongs/:id
  - [x] GET /campaigns
  - [x] GET /campaigns/:id
  - [x] POST /users
