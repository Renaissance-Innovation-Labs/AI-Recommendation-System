
# Recom-Zen-Guide

Recom-Zen-Guide is a personalized recommendation system that empowers users to curate gamelists, music lists, and movie lists based on their individual preferences. This README provides an overview of the project, its features, installation instructions, and usage guidelines.

link to my powerpoint presentation slides:https://docs.google.com/presentation/d/1bza5jkOVHj1hDUoKhp_M8gywhK5_nDBOaFYh7wZKU_4/edit#slide=id.g27d5bf625a5_0_1783

link to the app:https://recom-zen-guide.vercel.app/

link to my 

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Api-Integration-Guide](#Api-Integration-Guide)
- [Technologies](#technologies)
- [Contributing](#contributing)




## Features

- **Personalization**: Tailor content suggestions to match your unique tastes and preferences.
- **User-Centric Experience**: Create and manage playlists, music lists, and movie lists effortlessly.
- **Quick and Contextual Responses**: Utilize OpenAI's Text-DaVinci-003 model to generate prompt-driven, context-aware responses for an enhanced user experience.
## Installation

Follow these steps to set up Recom-Zen-Guide on your local machine:

- Clone the repository:

   ```bash
   git clone https://github.com/your-username/recom-zen-guide.git
    
- Navigate to the project directory:

    ```bash
    cd recom-zen-guide

- Install the required dependencies:
    ```bash
    npm Install

- Set up environment variables:

    - Create a .env file in the root directory.

    - Add your OpenAI API key to the .env file:
        ```bash
        REACT_APP_OPENAI_API_KEY=your-api-key-here

- Start the development server:

    ```bash
    npm start

- Open your web browser and visit http://localhost:3000 to access the application.
# Usage
This section provides comprehensive information on how to use our application for tailored recommendations in playlists, music lists, and movie lists.


## For Users
- Personalized Recommendations: Recom-Zen-Guide empowers you to customize your game lists,music lists and movie lists based on your preferred genres. Here's how to get started:

**Explore Recommendations**: In your homepage, you will see a group of category cards, named "music catelogue" etc, when you select any category card, a modal pops up and you will see a list of genre buttons to select from based on what category card was selected.

**view recommended lists**: specify your genres by selecting up to three and not less than two genres. once you are done and click the submit button,  It will navigate to a category page, such as "Music Category page" or "Movies category page," where you will see contents tailored to your taste based on your selected genres.

**Add and Remove Items**: Easily add or remove selected genres from your category cards in your homepage.

## For Developers
**API Integration**
If you're a developer looking to integrate our recommendation system into your application, here's how to use our API:

Initialize the OpenAI Client: Begin by initializing the OpenAI client with your API key. See the API Integration Guide for detailed instructions.

Make API Requests: Create API requests to generate recommendations for games, music, or movies based on user preferences. Refer to the API Reference for endpoint details.

Handle API Responses: Handle API responses effectively in your application. Customize the responses to enhance the user experience.

Error Handling: Implement robust error handling to provide a seamless user experience even in the presence of API errors.

# Api-Integration-Guide

This guide provides instructions on how to use the openai client instance to make API requests to the OpenAI service within Recom-Zen-Guide application. You'll learn how to initialize the openai client, create API requests, and handle responses.

## Getting Started
Before using the OpenAI service in the Recom-Zen-Guide application, make sure the necessary packages are installed and your environment variables configured .

    
    # Install the OpenAI Node.js package
    npm install openai
Ensure you have your OpenAI API key stored securely in an environment variable, such as REACT_APP_OPEN_AI_KEY, for authentication.

## Initializing the OpenAI Client

To use the OpenAI service, initialize the openai client instance with your API key. Import the OpenAI class and create an instance as follows:

    import { OpenAI } from 'openai';

    export const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPEN_AI_KEY,
     dangerouslyAllowBrowser: true,
    });
The apiKey property should be set to your OpenAI API key, and dangerouslyAllowBrowser should be set to true if you intend to use the client in a browser environment (common in web applications).

## Creating API Requests
Determine the type of API request you want to make to the OpenAI service. For example, you might want to generate 10 data sets based on user genres selected, using the gamecategory and the genre "action". Here's how to create an API request:

    function generatePrompt(str) {
    return `based on ${str} Only suggest ten games with  names, title and year they were released`;
    }

    async function fetchGameRecommendations() {
    try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      generatePrompt("action"),
      max_tokens: 150,
      temperature: 0.6,
    });

    console.log(response.choices[0].text);
    // Handle the response as needed.
    } catch (error) {
    console.error(error);
    // Handle errors.
        }
    }
Configure the model, prompt, max_tokens, and temperature options according to your specific requirements.
## Handling API Responses
Once you make the API request, you'll receive a response from the OpenAI service. In the example, we logged the generated text to the console. In your application, you should handle the response as needed, such as displaying recommendations to the user or processing the text further.
## Error Handling
Include error handling to gracefully handle any issues that may arise during the API request:

    try {
    // API request code
    } catch (error) {
    console.error(error);
    // Handle errors, e.g., display error message to the user.
    }
## Conclusion
By following these instructions, you can use the openai client instance to interact with the OpenAI service within your Recom-Zen-Guide application. Customize the API requests and responses based on your application's requirements.







# Technologies
Recom-Zen-Guide was built using the following technologies:

- React.js
- Tailwind CSS
- OpenAI API (Text-DaVinci-003)
- React Router


# Contributing
Contributions to this project are welcome. To contribute, follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure they work as expected.
- Commit your changes and push them to your fork.
- Create a pull request to merge your changes into the main - - repository.
