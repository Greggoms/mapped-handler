# Mapped Handler

## Purpose

The purpose of this project is to discover how to use a single boolean value to affect a specific component in a list of mapped components.

## The Problem

I recieve a JSON object and set it to some state. I want each mapped div to have a button that will expand it to show more details on an onClick event. I've been using the wrong approach previously. I would put that button, the handler, and boolean inside the Compnent holding the mapped div. Doing it this way would causes the boolean value to be true for all divs, which would expand ALL divs at once.

## The Solution

Instead of returning a mapped div, map the results you want as props on a new `<Component id={...} title={...} />`. Put the button, handler, and boolean logic inside that separate component. This code shows a working example.
