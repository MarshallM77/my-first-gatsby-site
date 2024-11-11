# My First Gatsby Site

This is a gatsby site I have developed for my Senior Seminar class for Eastern Kentucky University. Using Docker, Gatsby, and Node.js a site was created which dynamically adds blogposts and draws dynamically from a Recipe and Article API.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Technologies and Tools](#technologies-and-tools)
4. [Usage](#usage)
5. [Testing](#testing)
6. [Deployment](#deployment)

## Getting Started
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MarshallM77/my-first-gatsby-site.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd my-first-gatsby-site
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   gatsby develop
   ```

## Features
- Dynamic recipe/article content pulled from GraphQL
- SEO optimization with reusable `Seo` component
- Docker-based deployment strategy with atomic site replacement
- Dynamic blog posting using .mdx

## Technologies and Tools
- **Gatsby** - Static site generator
- **GraphQL** - Data fetching
- **Docker** - Containerization
- **GitHub Actions** - CI/CD for automated deployment

## Usage
The project allows you to add blog posts dynamically by adding a directory in the /blog directory.

## Testing
This project includes specific tests for key components. Run tests with the following command:

```bash
npm test
```

### Test Coverage
- **Seo component** for page titles
- **Mock data** for recipe ingredients
- **Collection testing** for articles

## Deployment
This project uses a GitHub Actions workflow to automate deployment. It checks if Docker is running on the server and uses an atomic deployment process.

1. **Push** changes to the main branch.
2. The GitHub Action handles the build and deployment to `student05.wendell.tech`.
