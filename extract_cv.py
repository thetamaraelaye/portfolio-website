import pdfplumber

with pdfplumber.open('/Users/tam/Documents/my-portfolio/public/Tamara Elayelagha CV (5).pdf') as pdf:
    text = ''
    for page in pdf.pages:
        text += page.extract_text() + '\n'
    print(text)