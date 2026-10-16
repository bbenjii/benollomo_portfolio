I use Instagram a lot. Primarily to doomscroll. A good percentage of my feed is brainrot, but once in a while I find useful posts: software to try, movies to watch, events, workouts, jiu-jitsu techniques, you get the gist. The problem is I rarely revisit what I save. And when I do, the useful bit is buried somewhere in the video.

![Two views of saved Instagram posts](/case-studies/reelly/instagram-saved-posts.png)

So I wanted a tool that could save those posts, transcribe them, summarize them, and help me organize and find them later. And this time, I wanted to try vibe coding the whole thing, from ideation and design to development and deployment. Which I've never truly done yet, cause enjoyment from dabbling in code prevents me.

### Research

First, I asked bro (ChatGPT) how to take an Instagram Reel URL and turn it into a transcript and summary. The suggested pipeline was pretty straightforward: download the video, extract the audio, transcribe it, then use an LLM to summarize and classify it. Analyzing video frames could also capture useful text that wasn't spoken. The tricky part was reliably getting the media from Instagram.

I experimented with that flow, and it worked. Then I started listing features: saving posts and other links, collections, tags, search, notes, and different ways to save from a phone or browser.

Obviously, other tools already do some of this, so I asked ChatGPT to research the competition. I like using Pro for this and explicitly asking it to do actual research. It often finds things I wouldn't have discovered myself.

![Screenshot 2026-09-21 at 11.31.36 AM](/case-studies/reelly/screenshot-2026-09-21-at-11.31.36-am.png)

That helped narrow the direction: make saved content easier to find and use. Search inside transcripts, find a post based on what you remember it saying, or pull ingredients out of a recipe video. The working name at this point was Vidgist, which later became Reelly.

### Design

I'd been wanting to try Figma Design for UI mockups and Figma Make for a working prototype, so I asked ChatGPT to turn the idea into a prompt for both. It covered saving links, browsing the library, collections, search, and AI summaries, along with things like processing failures and duplicate posts.

Here was the first draft from Figma Make:

![reelly_figma_make_demo_1](/case-studies/reelly/reelly-figma-make-demo-1.mp4)

Functionality-wise, it was cool. But the UI looked way too vibe-coded. Which it was, but users don't gotta know that.

Here are the Figma Design mockups :

![Screenshot 2026-09-21 at 12.14.20 PM](/case-studies/reelly/screenshot-2026-09-21-at-12.14.20-pm.png)

![Screenshot 2026-09-21 at 12.15.25 PM](/case-studies/reelly/screenshot-2026-09-21-at-12.15.25-pm.png)![Screenshot 2026-09-21 at 12.15.36 PM](/case-studies/reelly/screenshot-2026-09-21-at-12.15.36-pm.png)![Screenshot 2026-09-21 at 12.22.16 PM](/case-studies/reelly/screenshot-2026-09-21-at-12.22.16-pm.png)![Screenshot 2026-09-21 at 12.22.27 PM](/case-studies/reelly/screenshot-2026-09-21-at-12.22.27-pm.png)

To be honest, I liked them even less than the Figma Make prototype. But that's okay. I moved over to Codex to plan development, starting with the prototype's code.

![Screenshot 2026-09-21 at 12.24.29 PM](/case-studies/reelly/screenshot-2026-09-21-at-12.24.29-pm.png)

### Building Reelly

I'm not gonna lie, the project started getting interesting and somewhat complex, so I stopped documenting the process for a few weeks. My bad gang

But in summary...

I ended up building an iOS app, available through TestFlight at the time of writing. Users can share social media post links to the app, which saves them to their account with a transcript when available, extracted on-screen text, and an AI summary.

I also integrated Instagram's developer API so users can DM a post to Reelly's Instagram account, and the backend receives and processes it.

Here's the app at the time of writing:

![ScreenRecording_10-15-2026 14-02-47_1](/case-studies/reelly/screenrecording-10-15-2026-14-02-47-1.mp4)

I decided to make the project public and built a web app with pretty much the same functionality:

![Screenshot 2026-10-15 at 2.06.09 PM](/case-studies/reelly/screenshot-2026-10-15-at-2.06.09-pm.png)
![Screenshot 2026-10-15 at 2.05.51 PM](/case-studies/reelly/screenshot-2026-10-15-at-2.05.51-pm.png)

### What's next

The goal now is to make those saved posts more useful. Better search, reminders to revisit things, and maybe movie recommendations based on what you've saved. I'd also like to extract practical details: ingredients and instructions from recipes, restaurant addresses on a map, or saved events on a calendar.

But yea, that's Reelly for now.
check it out at getreelly.com
