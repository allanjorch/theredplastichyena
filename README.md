# The Red Plastic Hyena

A lightweight creative phrase generator. It combines random colors, textures, moods, physical traits, and animals into odd three-word scenes — then links each phrase to image search so you can see what they look like.

No build step, no backend. Just HTML, CSS, and vanilla JavaScript.

## How it works

- On load, **5 phrases** are generated automatically.
- Click the **red button** (or press **Space** / **Enter**) to generate another.
- Each phrase is a link to **HTTPS** [Brave image search](https://search.brave.com/images).
- Phrases are stored internally (up to **100**). Only **5** are shown at a time.
- **Scroll** or **swipe** over the card area to browse older and newer phrases — there is no scrollable list element; the visible window re-renders as you move through history.

### Phrase structure

Every phrase follows the same pattern:

**color** + **material, mood, or trait** + **animal**

Examples: `golden bouncy zebra`, `fluorescent anxious armadillo`.

## Interface

- **Red button** — glossy SVG circle with a tight red ring; the main control for generating phrases.
- **CREATIVE SPARKS** — curved SVG text beneath the button, styled as a subtle smile.
- **Phrase cards** — warm cream gradient, soft plastic shine, and hover lift.

The layout scales with the viewport via a `--ui-scale` factor so spacing and type stay balanced on different screen sizes.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure |
| `style.css` | Layout, scaling, and visual design |
| `app.js` | Phrase generation, windowed list, and input handling |

Word lists are embedded in `app.js`.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
python -m http.server --directory .
```

Then visit `http://localhost:8000`.

## License

Personal project. Use and adapt as you like.