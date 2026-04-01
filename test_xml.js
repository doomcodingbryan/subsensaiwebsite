async function test() {
  const res = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UC29tATlLM-H1-jo8a3WD_Nw');
  const text = await res.text();
  
  const videos = [];
  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  let match;
  while ((match = entryRegex.exec(text)) !== null && videos.length < 3) {
    const entry = match[1];
    const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
    const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
    if (idMatch && titleMatch) {
      videos.push({
        id: idMatch[1],
        title: titleMatch[1],
        link: `https://www.youtube.com/watch?v=${idMatch[1]}`,
        imgSrc: `https://i.ytimg.com/vi/${idMatch[1]}/hqdefault.jpg`
      });
    }
  }
  console.log(videos);
}
test();
