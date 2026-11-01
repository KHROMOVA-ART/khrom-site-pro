// Архив: дизайн-инструменты, которые я сделала для себя. Файлы лежат в assets/tools/<id>/.
// files: [{ name: "reels-montage.zip", note: "скилл для Claude" }] — name совпадает с именем файла в папке.
window.TOOLS = [
  {
    id: "reels-montage",
    title: "reels editing agent",
    text: "A Claude Code skill that assembles a Remotion reel from raw footage. It transcribes speech with whisper and checks it against the audio, adds step-by-step captions, cuts pauses and filler words, adds motion inserts and texture, mixes the sound and renders in one of three styles: collage, archive or bold type.",
    files: [{ name: "reels-montage.zip", note: "skill: instructions, scripts, Remotion components" }],
  },
  {
    id: "emoji-stickers",
    title: "chrome emoji and sticker generator",
    text: "A Python engine that turns any shape, a font glyph or a hand-drawn mask, into liquid chrome with reflections in brand colours. It outputs static PNGs, animated WEBMs and 512 px Telegram stickers, plus contact sheets for checking on dark and light backgrounds.",
    files: [
      { name: "chrome-emoji-generator.zip", note: "generator scripts and instructions" },
      { name: "chrome-emoji-pack.zip", note: "ready-made Chrome pack: 31 emoji + 5 animated" },
    ],
  },
  {
    id: "covers",
    title: "social media cover agent",
    text: "Makes social media covers several times faster while keeping the style, fonts and grid consistent.",
    files: [],
  },
  {
    id: "plugins",
    title: "browser and Figma plugins",
    text: "Small helpers that take the routine out of a designer's daily work.",
    files: [],
  },
];

(() => {
  const list = document.getElementById("tools");
  if (!list) return;
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  };

  for (const tool of window.TOOLS) {
    const item = el("li", "tools__item");
    const info = el("div", "tools__info");
    info.append(el("h2", "tools__title", tool.title), el("p", "tools__text", tool.text));
    if (tool.image) {
      const pic = el("img", "tools__image");
      pic.src = `./assets/tools/${tool.id}/${tool.image}`;
      pic.alt = `${tool.title}: example`;
      pic.loading = "lazy";
      info.append(pic);
    }
    const files = el("ul", "tools__files");
    for (const f of tool.files) {
      const li = el("li");
      const a = el("a", "tools__file");
      a.href = `./assets/tools/${tool.id}/${f.name}`;
      a.download = f.name;
      a.append(el("span", "tools__file-name", f.name));
      if (f.note) a.append(el("span", "tools__file-note", f.note));
      a.append(el("span", "tools__file-icon", "↓"));
      li.append(a);
      files.append(li);
    }
    if (!tool.files.length) files.append(el("li", "tools__soon", "files coming soon"));
    item.append(info, files);
    list.append(item);
  }
})();
