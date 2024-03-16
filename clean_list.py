import re

f = open("list_unclean.txt", encoding="utf-8")
text = f.read()

# Get only urls
urls = re.findall(
    r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', text)

# Remove duplicated urls
unique_urls = list(set(urls))

# Filter google links
unique_urls = [k for k in unique_urls if 'google' not in k]

with open('list_clean.txt', 'w') as f:
    for line in unique_urls:
        f.write(f"{line}\n")
