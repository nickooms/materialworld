class Tag {
  static from(name) {
    return new Tag(name);
  }

  constructor(name, attributes = []) {
    this.name = name;
    this.attributes = attributes;
  }

  get open() {
    return `<${this.name}>`;
  }

  get close() {
    return `</${this.name}>`;
  }

  get separator() {
    return this.close + this.open;
  }

  get regex() {
    return new RegExp(`<(\\/?)${this.name}>`, 'g');
  }

  content(html) {
    const { open, close } = this;
    const start = html.indexOf(open) + open.length;
    const end = html.lastIndexOf(close);
    return html.substring(start, end);
  }

  split(html) {
    return this.content(html).split(this.separator);
  }

  replace(html, string) {
    return html.replace(this.regex, string);
  }

  remove(html) {
    return this.replace(html, '');
  }
}

module.exports = Tag;
