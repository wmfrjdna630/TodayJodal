from pathlib import Path
import base64
import json
import mimetypes

root = Path(__file__).resolve().parent
dist = root / 'dist'
html = (dist / 'index.html').read_text(encoding='utf-8')
style = (dist / 'style.css').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>{style}</style>')
for filename in ('assets/art.js', 'contract.js', 'game.js'):
    source = (dist / filename).read_text(encoding='utf-8')
    if filename == 'assets/art.js':
        registry, helpers = source.removeprefix('const ART = ').split(';\n', 1)
        artwork = json.loads(registry)
        for key, path in artwork.items():
            asset = dist / path
            media_type = mimetypes.guess_type(asset)[0]
            if not media_type or not media_type.startswith('image/'):
                raise ValueError(f'Unsupported image: {path}')
            data = base64.b64encode(asset.read_bytes()).decode('ascii')
            artwork[key] = f'data:{media_type};base64,{data}'
        source = 'const ART = ' + json.dumps(artwork, ensure_ascii=False) + ';\n' + helpers
    html = html.replace(f'<script src="{filename}"></script>', f'<script>{source}</script>')
(root / '오늘도조달_단일실행.html').write_text(html, encoding='utf-8')
