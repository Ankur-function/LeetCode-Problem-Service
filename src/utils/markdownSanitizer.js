const marked = require('marked')
const sanitizeHtmlLibrary = require('sanitize-html')
const TurndownService = require('turndown')


function sanitizeMarkdownContent(markdownContent) {

    const turndownService = new TurndownService()
    //1. convert markdown to html
    const convertedHtml = marked.parse(markdownContent);

    console.log("convertedHtml", convertedHtml);

    // 2. sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])
    });

    console.log("sanitizedHtml", sanitizedHtml);

    // turn down converts back sanitized html or any html to markdown 
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    console.log("sanitizeMarkdown", sanitizedMarkdown);

    return sanitizedMarkdown;

}

module.exports = sanitizeMarkdownContent;