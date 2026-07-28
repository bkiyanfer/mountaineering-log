"""Build the verbatim Turkish Yıldızlar report page from the original DOCX."""

from html import escape
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/media/summits/yildiz/yildiz-zirveleri-orijinal-rapor.docx"
TARGET = ROOT / "summit/yildizlar-tr.html"
W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def text_of(element):
    return "".join(node.text or "" for node in element.iter(W + "t"))


with ZipFile(SOURCE) as archive:
    body = ET.fromstring(archive.read("word/document.xml")).find(W + "body")

parts = []
list_open = False

for element in body:
    if element.tag == W + "tbl":
        if list_open:
            parts.append("</ul>")
            list_open = False
        parts.append('<div class="report-table-wrap"><table class="report-table"><tbody>')
        for row in element.findall("./" + W + "tr"):
            cells = row.findall("./" + W + "tc")
            parts.append("<tr>")
            for index, cell in enumerate(cells):
                tag = "th" if index == 0 else "td"
                parts.append(f"<{tag}>{escape(text_of(cell))}</{tag}>")
            parts.append("</tr>")
        parts.append("</tbody></table></div>")
        continue

    if element.tag != W + "p":
        continue

    text = text_of(element)
    numbered = element.find("./" + W + "pPr/" + W + "numPr") is not None
    if numbered:
        if not list_open:
            parts.append("<ul>")
            list_open = True
        parts.append(f"<li>{escape(text)}</li>")
        continue

    if list_open:
        parts.append("</ul>")
        list_open = False

    if not text.strip():
        continue
    if text.strip().endswith(":") or text.strip().isupper():
        parts.append(f"<h2>{escape(text)}</h2>")
    else:
        parts.append(f"<p>{escape(text)}</p>")

if list_open:
    parts.append("</ul>")

document = """<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Yıldız Zirveleri — değiştirilmemiş özgün Türkçe faaliyet raporu.">
  <title>Yıldızlar · Türkçe Orijinal Rapor</title>
  <link rel="stylesheet" href="../src/styles/main.css">
  <style>
    .report-language-nav { display:flex; flex-wrap:wrap; gap:var(--s3); margin-bottom:var(--s6); }
    .report-table-wrap { overflow-x:auto; margin:var(--s4) 0 var(--s6); }
    .report-table { width:100%; border-collapse:collapse; font-family:var(--font-ui); font-size:.9rem; }
    .report-table th,.report-table td { border:var(--border); padding:var(--s3); text-align:left; vertical-align:top; }
    .report-table th { width:28%; color:var(--navy-dark); background:var(--stone); }
  </style>
</head>
<body>
<div id="nav-placeholder"></div>
<header class="page-header">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Ana Sayfa</a><span class="breadcrumb__sep">›</span>
      <a href="../summits.html">Zirveler</a><span class="breadcrumb__sep">›</span>
      <a href="yildizlar.html">Yıldızlar</a><span class="breadcrumb__sep">›</span>
      <span>Türkçe Orijinal Rapor</span>
    </nav>
    <h1>Yıldız Zirveleri</h1>
    <p>5 mezun 3 zirve ve Skinny Dip · Değiştirilmemiş Türkçe rapor</p>
  </div>
</header>
<main><div class="container"><article class="detail-main" style="max-width:960px;margin-inline:auto">
  <div class="report-language-nav">
    <a class="filter-tab active" href="yildizlar-tr.html" lang="tr">Türkçe — Orijinal</a>
    <a class="filter-tab" href="yildizlar.html" lang="en">English Translation</a>
    <a class="filter-tab" href="../public/media/summits/yildiz/yildiz-zirveleri-orijinal-rapor.docx" download>Orijinal DOCX'i İndir</a>
  </div>
""" + "\n".join(parts) + """
</article></div></main>
<div id="footer-placeholder"></div>
<script src="../src/js/components.js"></script>
</body></html>
"""

TARGET.write_text(document, encoding="utf-8")
