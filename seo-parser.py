import sys
import json
import glob
from html.parser import HTMLParser

class SEOParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = {
            'title': '',
            'meta': [],
            'h1': [],
            'img_count': 0,
            'img_alt_missing': 0,
            'schema': []
        }
        self.in_title = False
        self.in_h1 = False
        self.in_schema = False
        self.current_schema = ""

    def handle_starttag(self, tag, attrs):
        if tag == 'title':
            self.in_title = True
        elif tag == 'h1':
            self.in_h1 = True
        elif tag == 'meta':
            self.tags['meta'].append(dict(attrs))
        elif tag == 'img':
            self.tags['img_count'] += 1
            attr_dict = dict(attrs)
            if 'alt' not in attr_dict or attr_dict['alt'] == '':
                self.tags['img_alt_missing'] += 1
        elif tag == 'script':
            attr_dict = dict(attrs)
            if attr_dict.get('type') == 'application/ld+json':
                self.in_schema = True

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag == 'h1':
            self.in_h1 = False
        elif tag == 'script' and self.in_schema:
            self.in_schema = False
            try:
                # Add to schema list if parses correctly
                parsed = json.loads(self.current_schema)
                self.tags['schema'].append(parsed)
            except:
                pass
            self.current_schema = ""

    def handle_data(self, data):
        if self.in_title:
            self.tags['title'] += data
        elif self.in_h1:
            self.tags['h1'].append(data)
        elif self.in_schema:
            self.current_schema += data

def analyze_html(filepath):
    parser = SEOParser()
    with open(filepath, 'r', encoding='utf-8') as f:
        parser.feed(f.read())
    return parser.tags

results = {}
files = glob.glob('.seo/clients/indirasuperspecialityhospital/technical/crawl-data/*.html')
for f in files:
    results[f] = analyze_html(f)

print(json.dumps(results, indent=2))
