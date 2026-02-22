# Blog Image Folders

Use this folder for all post images.

## Structure

- `public/blog/featured/` -> featured/hero images used in cards and post headers
- `public/blog/instructions/` -> inline screenshots and step-by-step instruction images

## Usage in Markdown

```md
![Alt text](/blog/instructions/example-step-1.png)
```

## Usage in frontmatter

```yaml
featuredImage: "/blog/featured/example-cover.jpg"
featuredImageAlt: "Describe the image"
```
