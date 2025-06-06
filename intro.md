Let's go
# ComNet 66 – Problem Statement

## Context

People who speak different languages often struggle to communicate in real-time voice conversations. While messaging apps can use text translation, and some services offer transcription, there are very few tools that handle live voice translation during a group voice call.

## The Problem

There is no simple way for two or more people to talk to each other in different languages over a voice call and understand each other instantly. Tools like Discord or Zoom support voice, but not real-time translation. Translation apps like Google Translate work for one-to-one use, but not during live conversations between multiple people.

## The Goal

Build a web app that allows users to:

- Join a shared voice room
- Speak in their native language
- Have their speech automatically converted to text
- Translate that text to the target language(s)
- Speak the translation out loud to others in the room
- Optionally show the translated text as subtitles

## Scope

- Web-based UI
- Voice-to-text using browser or cloud speech APIs
- Translation via public API
- Text-to-speech output
- Basic multi-user room support (voice + subtitles)
- Authentication (for private/public rooms)
- Deployable as a single-page application with backend

## Constraints

- Must work with standard microphones and browsers
- Low latency is preferred, but some delay is acceptable
- Accuracy of translation depends on external APIs
- Scalable to a few users per room (not hundreds)

## Audience

This is for people who want to communicate with others across language boundaries in real-time voice — for casual conversations, practice, or collaboration.

