# Express-backend-assignment

A Showwcase Node Assignment

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)

## Introduction

A this is an app that tests my understanding of Nodejs, Typescript, express and MongoDb.

## Features

List the key features or functionalities of this project, implemented a user authentication system using JWT. 

The API has the following endpoints:
  
    *   `/api/auth/register` - Register a new user with email and password.
    *   `/api/auth/login` - Log in a user and return a JWT token.
    *   `/api/auth/profile` - Retrieve the user's profile information using the JWT token (protected route).

## Installation

Please follow the steps below to get started

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo.git

# Change into the project directory
cd your-repo

# Ensire to have Docker install on your machine or you can download it here
# Go to the Docker website: https://www.docker.com/products/docker-desktop

# In the open terminal, run the following command to pull the official MongoDB Docker image
docker pull mongo

# Create a Docker Volume
docker volume create mongodb_data

# Start the MongoDB Container
docker run -d -p 27017:27017 --name mongodb --restart=always -v mongodb_data:/data/db mongo

# Verify Mongo container
docker ps

# Install dependencies
npm install

# Use this to run the server
npm run start
