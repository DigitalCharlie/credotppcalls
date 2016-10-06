# credotppcalls

To make a new blog post, do the following:

1. Create a new .md (markdown) file.

2. Save it following this naming convention: YYYY-MM-DD-title.md (so a post from September 22nd about Hoyer is 2016-09-22-hoyer.md).

3. Put the following in the file, in this format:

	---
	layout: post
	title:  
	screenshot_url: 

	text: 

	video-url: 
	---

A few notes:
- The --- are important.
- The layout should always be, "post"
- The title can be whatever you want.
- You should have a preview image for the video — it is what displays on the main page. Place it in the images folder, and put something like this in the md file: ./images/file-name.png - ideally, name it preview-posttitle.
- Text is the content of the post, if you want more than a headline. If there's nothing here, it won't display.
- Video-url is the YouTube link. Don't copy the entire link, just the unique string at the end of the link — it should look like 7FFy3dmKRrY