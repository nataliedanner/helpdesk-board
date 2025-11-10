# Coding Project 05: Helpdesk Ticket Board

## Project Setup & Structure
The app runs locally using npm install and npm run dev in the terminal. The app is configured using React and has the proper folders.

## Components + JSX + Keys
All components are in separate JSX files. When displaying the tickets, "id" is used as the key.

## Props + Lifting State
Parent to child callbacks are used for filters and other updates. Board holds the lifted state.

## State + Controlled Inputs
useState is used in Board.jsx. The status and priority filters, along with the search are controlled.

## Effects + Cleanup
The ticket data is fetched in Board.jsx. The site updates realistically with cleanup.

## Rendering
useStates are rendered properly, and buttons are disabled when needed.

