# Funcionalidades do projeto (PT-BR)

* CRUD completo de contatos

# Project features (EN)

* Full contact CRUD

# API Endpoints

The following endpoints are available:

| Endpoints             | Usage                     | Params                                        |
| ----------------------| --------------------------| ----------------------------------------------|
| `GET /`               | Get all of the contacts.  |                                               |
| `POST /new`           | Add a new contact.        |**name, username**: [String] **age**: [Number] | 
| `PUT /users/edit/:id` | Edit the contact.         |**name, username**: [String] **age**: [Number] |
| `DELETE /:id`         | Remove the contact.       |                                               | 

# IMPORTANT

## To run the project locally you will need to create mongodb cluster and a .env file in server folder with ATLAS_URI=<your_mongodb_connection_string>

