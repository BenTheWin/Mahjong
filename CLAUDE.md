# OpenWolf

@.wolf/OPENWOLF.md

This project uses OpenWolf for context management. Read and follow .wolf/OPENWOLF.md every session. Check .wolf/cerebrum.md before generating code. Check .wolf/anatomy.md before reading files.

# Git & GitHub

This project uses Git with a remote on GitHub (https://github.com/BenTheWin/Mahjong).

**Rules — follow these every session without being asked:**

1. After completing any meaningful unit of work (a feature, a fix, a config change, a new file), commit it immediately with a clean, descriptive message.
2. Commit messages must follow this format:
   - `feat: short description` — new feature or capability
   - `fix: short description` — bug fix
   - `chore: short description` — tooling, config, refactoring, non-functional changes
   - `docs: short description` — documentation only
3. After every commit (or after a batch of related commits), push to GitHub: `git push origin main`
4. Never end a session without ensuring all committed work has been pushed.
5. Never commit generated build artifacts, secrets, or large binary files.
6. If in doubt whether something is worth a commit — commit it. Granular history is safer than lost work.
