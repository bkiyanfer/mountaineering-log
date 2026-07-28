"""Build the verbatim Turkish Yıldızlar report page from the original DOCX."""

from html import escape
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/reports/yildiz/yildiz-zirveleri-orijinal-rapor.docx"
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
<main><div class="container"><div class="detail-layout"><article class="detail-main">
  <div style="aspect-ratio:16/9;border-radius:var(--radius-lg);overflow:hidden;margin-bottom:var(--s6)">
    <img src="../public/media/summits/yildiz/yildiz-oba-yeri-camp.jpg" alt="Yıldız zirvelerinin altındaki Oba Yeri kampı" style="width:100%;height:100%;object-fit:cover">
  </div>
  <div class="report-language-nav">
    <a class="filter-tab active" href="yildizlar-tr.html" lang="tr">Türkçe — Orijinal</a>
    <a class="filter-tab" href="yildizlar.html" lang="en">İngilizce Çeviri</a>
    <a class="filter-tab" href="../public/reports/yildiz/yildiz-zirveleri-orijinal-rapor.docx" download>Orijinal DOCX'i İndir</a>
  </div>
  <div style="background:var(--stone);border:var(--border);border-radius:var(--radius-lg);padding:var(--s4) var(--s5);margin-bottom:var(--s6)">
    <div style="font-family:var(--font-ui);font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-muted);margin-bottom:var(--s3)">İki Yıldız zirvesi</div>
    <div style="display:flex;flex-wrap:wrap;gap:var(--s3)">
      <a href="#yildizbasi" class="filter-tab">▲ Yıldızbaşı 3.454 m</a>
      <a href="#yildizbati" class="filter-tab">▲ Yıldızbatı 3.300 m</a>
    </div>
  </div>
  <section class="report-section" id="yildizbasi">
    <h2>Yıldızbaşı · 3.454 m</h2>
    <div class="photo-grid">
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-ridge-climb.jpg">
        <img src="../public/media/summits/yildiz/yildiz-ridge-climb.jpg" alt="Yıldızbaşı tırmanışı">
      </div>
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-summit-efsane-beril.jpg">
        <img src="../public/media/summits/yildiz/yildiz-summit-efsane-beril.jpg" alt="Yıldız sırtında Efsane ve Beril">
      </div>
    </div>
  </section>
  <section class="report-section" id="yildizbati">
    <h2>Yıldızbatı · 3.300 m</h2>
    <div class="photo-grid">
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-summit-view.jpg">
        <img src="../public/media/summits/yildiz/yildiz-summit-view.jpg" alt="Yıldızbatı zirvesinden Aladağlar">
      </div>
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-akcay-pass.jpg">
        <img src="../public/media/summits/yildiz/yildiz-akcay-pass.jpg" alt="Akçay Geçidi yakınındaki kaya geçişi">
      </div>
    </div>
  </section>
  <div class="report-section">
""" + "\n".join(parts) + """
  </div>
  <div class="report-section">
    <h2>FOTOĞRAFLAR</h2>
    <div class="photo-grid">
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-oba-yeri-camp.jpg"><img src="../public/media/summits/yildiz/yildiz-oba-yeri-camp.jpg" alt="Oba Yeri kampı"></div>
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-ridge-climb.jpg"><img src="../public/media/summits/yildiz/yildiz-ridge-climb.jpg" alt="Yıldız sırtı tırmanışı"></div>
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-akcay-pass.jpg"><img src="../public/media/summits/yildiz/yildiz-akcay-pass.jpg" alt="Akçay Geçidi kaya geçişi"></div>
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-summit-efsane-beril.jpg"><img src="../public/media/summits/yildiz/yildiz-summit-efsane-beril.jpg" alt="Zirvede Efsane ve Beril"></div>
      <div class="photo-grid__item" data-lightbox="../public/media/summits/yildiz/yildiz-dipsiz-gol.jpg"><img src="../public/media/summits/yildiz/yildiz-dipsiz-gol.jpg" alt="Aladağlar'daki Dipsiz Göl"></div>
    </div>
  </div>
</article>
<aside class="detail-sidebar">
  <div class="info-box">
    <div class="info-box__title">Yıldızlar Zirve Bilgisi</div>
    <div class="info-row"><span class="info-row__label">Zirveler</span><span class="info-row__value">Yıldızbaşı + Yıldızbatı</span></div>
    <div class="info-row"><span class="info-row__label">Tarihler</span><span class="info-row__value">3–7 Tem 2026</span></div>
    <div class="info-row"><span class="info-row__label">Yer</span><span class="info-row__value">Aladağlar, Niğde</span></div>
    <div class="info-row"><span class="info-row__label">Mesafe</span><span class="info-row__value">~7,4 km</span></div>
    <div class="info-row"><span class="info-row__label">İrtifa kazanımı</span><span class="info-row__value">~475 m</span></div>
    <div class="info-row"><span class="info-row__label">Zirve günü</span><span class="info-row__value">11 saat</span></div>
    <div class="info-row"><span class="info-row__label">Zorluk</span><span class="info-row__value">Zor</span></div>
    <div class="info-row"><span class="info-row__label">Kamp alanı</span><span class="info-row__value">Oba Yeri</span></div>
    <div class="info-row"><span class="info-row__label">Zemin</span><span class="info-row__value">Moloz, kar, çarşak</span></div>
    <div class="info-row"><span class="info-row__label">Ekip</span><span class="info-row__value">5 kişi</span></div>
  </div>
  <div class="info-box">
    <div class="info-box__title">Katılımcılar</div>
    <ul class="participants-list">
      <li>Hüseyin Fikret Değirmencioğlu</li><li>İlayda Efsane Algın</li>
      <li>Alp Dereli</li><li>Arca Köybaşıoğlu</li><li>Beril Kiyanfer</li>
    </ul>
  </div>
  <div class="info-box">
    <div class="info-box__title">Hava Durumu (Zirve Günü)</div>
    <div class="info-row"><span class="info-row__label">Sabah</span><span class="info-row__value">Güneşli, çok rüzgârlı</span></div>
    <div class="info-row"><span class="info-row__label">Öğle</span><span class="info-row__value">Güneşli</span></div>
    <div class="info-row"><span class="info-row__label">Akşam</span><span class="info-row__value">Açık</span></div>
  </div>
</aside>
</div></div></main>
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true">
  <button class="lightbox__close" aria-label="Kapat">×</button><img class="lightbox__img" src="" alt="">
</div>
<div id="footer-placeholder"></div>
<script src="../src/js/components.js"></script>
</body></html>
"""

TARGET.write_text(document, encoding="utf-8")
