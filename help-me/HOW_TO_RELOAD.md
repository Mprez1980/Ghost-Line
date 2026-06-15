# Reloading the Project After Updates

If the project has been updated (by an agent like Antigravity or manually), follow these steps to ensure you are seeing the latest version and everything is running correctly.

## 1. Refresh the Development Server
If you are already running the project with `npm run dev`, Vite usually handles Hot Module Replacement (HMR) automatically. However, if changes are not appearing:
- **Hard Refresh the Browser**: Press `Ctrl + F5` (Windows/Linux) or `Cmd + Shift + R` (Mac).
- **Restart the Terminal Process**: Press `Ctrl + C` in your terminal to stop the server, then run:
  ```bash
  npm run dev
  ```

## 2. Update Dependencies
If the updates involved new libraries or packages (changes to `package.json`):
```bash
npm install
```

## 3. Resuming with Antigravity
If Antigravity (`agy`) stopped due to usage limits or other reasons:
- Simply run `agy` again in the root of the project to resume your session.
- The agent should be able to see the current state of the files and understand what was completed before the interruption.

## 4. Clear Cache (If problems persist)
Sometimes the Vite cache can get out of sync. You can clear it by running:
```bash
rm -rf node_modules/.vite
npm run dev
```

## 5. Verify the Build
To ensure there are no TypeScript or build errors after an update:
```bash
npm run build
```
