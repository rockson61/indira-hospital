# Authentication for Autonomous Agents

Welcome to Indira Super Speciality Hospital's API platform. AI Agents and automated clients can programmatically authenticate to access protected resources (like scheduling and medical records inquiries).

## Registration

To obtain API credentials, please register your agent via our developer portal or contact our IT desk. 

**Portal URL**: `https://www.indirasuperspecialityhospital.com/developer/register`

## Authentication Method

We support OAuth 2.0 with Client Credentials Grant for server-to-server agents, and Authorization Code Grant for user-delegated actions.

Check our discovery endpoints for details:
- `/.well-known/oauth-authorization-server`
- `/.well-known/oauth-protected-resource`

## Scopes
- `api.read`: Read public and authorized data
- `api.write`: Submit forms and book appointments
