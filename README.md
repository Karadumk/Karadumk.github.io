# Kara's terminal portfolio

Live at **https://karadumk.github.io** once it's set up.

## Files

| File | What it is |
|---|---|
| `index.html` | The site itself: look, intro and terminal. You rarely need to touch this. |
| `content.js` | **All the words on the site.** Edit this to change your bio, jobs, projects, links and so on. |
| `resume.pdf` | The résumé that the `resume` command opens. |

## Put the site live (one time, about 5 minutes)

1. On GitHub, click **+** (top right) > **New repository**.
2. Name it exactly `Karadumk.github.io`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in `index.html`, `content.js`, `resume.pdf` and this `README.md`, then click **Commit changes**.
5. Wait a minute or two, then open **https://karadumk.github.io**.

If it doesn't show up, go to the repo's **Settings > Pages** and check that the source is
**Deploy from a branch**, branch **main**, folder **/ (root)**.

## Change the text later

1. Open the repo on GitHub and click `content.js`.
2. Click the **pencil icon** (Edit this file).
3. Change the words inside the quote marks. For example, to update your bio, edit the lines under `bio:`.
4. Click **Commit changes**. The live site updates in about a minute (refresh with Ctrl+Shift+R or Cmd+Shift+R).

Tips that keep the site from breaking:
- Keep text inside `"quote marks"` and keep the commas at the ends of lines.
- If your text needs a `"` inside it, write `\"` instead.
- To add a job or project, copy one whole `{ ... },` block, paste it next to the others, and change the words.
- If something breaks, open the repo's **History** (clock icon on `content.js`) to see and undo the last change.

## Replace the résumé

Upload a new file named exactly `resume.pdf` (**Add file > Upload files**). It replaces the old one.
