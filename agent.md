# Ghost-Line: Project Briefing & Agent Context

This file serves as a persistent context record for AI agents (Gemini CLI, Antigravity, Claude, GPT, etc.) working on the Ghost-Line project. **Agents should read this file first to understand the current state and conventions.**

## 1. Project Overview
**Ghost-Line** is an interactive, narrative-driven tactical game built with React, TypeScript, and Vite. It features a "Tactical Scanner" (a grid-based map) and a "Scene Display" where players can interact with the story using free-form text input or buttons.

- **Primary Goal**: Rescue "Wisp" from the Conclave while managing the emotional and tactical approaches of two companions, Vale and Rook.
- **Key Mechanic**: Free-form text choices are resolved via a keyword-based local matcher and an optional LLM-powered service.

## 2. Technical Stack
- **Frontend**: React 19, Vite 8, TypeScript.
- **Styling**: Vanilla CSS with a dynamic theme system (defined in `src/index.css` and applied in `src/App.tsx`).
- **State Management**: React Context API (`src/context/GameContext.tsx`).
- **Narrative**: Scenes are defined as a record of `Scene` objects in `src/story/chapter1.ts`.
- **Backend/API**: Vercel-style functions in `api/resolve-choice.ts` for LLM choice resolution.

## 3. Architecture & Conventions
- **Scene Structure**: Every scene has an `id`, `lines`, and either `choices` or a `next` pointer.
- **Tactical Scanner**: A 16x16 grid (coordinates 0-15). Positions of characters and objects are defined per-scene.
- **Theming**: The `app-shell` class in `App.tsx` changes based on `sceneId` to update the CSS variables (primary colors, backgrounds, glows).
- **Keywords**: Choice matching is boosted by `keywords` arrays in the `Choice` objects.

## 4. Key Directories
- `src/story/`: Narrative content and types.
- `src/components/`: UI components (`SceneDisplay`, `TacticalScanner`).
- `src/services/`: Business logic for choice matching and AI integration.
- `help-me/`: User guides for project maintenance.

## 5. Recent Work (As of June 15, 2026)
- **Extended Narrative**: Chapter 1 has been significantly expanded. It now includes a convergence at the "Memory Pier," a prison escape sequence, and a new "Archives" section where Wisp is found.
- **Visual Feed (Illustration Window)**: Added a new "Visual Feed" component that provides stylized, text-based scene reconstructions ("Neural Link" aesthetic) with glitch effects and CRT scanlines.
- **Archives Sequence**: Introduced new characters/entities like "The Prime Enforcer" and "Shadows."
- **Archives Theme**: Added a Gold/Royal Blue theme for the Archives section.
- **Help Resources**: Created `help-me/HOW_TO_RELOAD.md` to assist the user with restarting the dev server and resuming sessions after agent updates.
- **Tactical Scanner Expansion**: Updated `CharacterPosition` types to include `Enforcer`, `ArchiveNode`, `MemoryCore`, and `Barrier`.

## 6. Current Status
- **Dev Server**: Running on `http://localhost:5173/`.
- **Build Status**: Passing (last verified via `npm run build`).
- **Next Steps**: Continue the story into Chapter 2 or refine the combat mechanics for the Prime Enforcer encounter.

## 7. Instructions for Agents
- **Maintain Style**: Use the existing descriptive, slightly noir/cyberpunk tone for narration and dialogue.
- **Types First**: Always update `src/story/types.ts` before adding new character types or mechanics.
- **Check Matcher**: When adding new choices, ensure relevant keywords are added to `choiceMatcher.ts` to improve the "game feel" of free-form input.
- **Documentation**: If adding new complex features, update this file and the `help-me` folder.
