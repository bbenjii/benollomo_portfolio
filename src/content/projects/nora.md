![Screenshot 2026-10-15 at 6.31.53 PM](/case-studies/apollofi/screenshot-2026-10-15-at-6.31.53-pm.png)
![Screenshot 2026-10-15 at 6.32.08 PM](/case-studies/apollofi/screenshot-2026-10-15-at-6.32.08-pm.png)
![Screenshot 2026-10-15 at 6.32.21 PM](/case-studies/apollofi/screenshot-2026-10-15-at-6.32.21-pm.png)


The start of 2026 was not a good period in terms of financial decisions lol. I wouldn't say I was BROKE, but I was spending as much as I was making, sometimes more (which wasn't even much in the first place). I couldn't really plan for trips, big purchases, or save/invest any money.

Eventually, I'd had enough. I also wanted to save for the summer and buy gifts for the fam, so I did what any human does in 2026 when he has a problem: I asked ChatGPT.

The responses were pretty generic, so I wrote a mega prompt telling bro to act as a financial coach, then fed him my bank statements directly (privacy and safety concerns thrown out the window, I know). I asked chat to analyze my spending and help me build a weekly budget around my habits.

And honestly, it worked. In 1 month, I saved 4 times as much as I had in the previous 4 months (bad, embarrassing, I know).

Every week, I'd download my updated bank statement, send it to chat, and wait for him to compare my spending with the budget. It took around 5 minutes, which, to be fair, isn't much, but was still too long for my liking. Chat had to process a new statement every time and do all that OCR analysis jumbo AI models gotta do.

That's when I had the brilliant idea (which already exists and is somewhat saturated, if I'm completely honest): why not build software that connects to my bank accounts and lets me chat with an AI that already has access to my transactions? Throw in a dashboard so I can see where my money goes, and we're good.

And that's how I started building Nora.

I was already familiar with Plaid from work, so I used it to let users connect multiple bank accounts. At first, I stored the data exactly as Plaid provided it, but that limited me to their structure. I wanted more freedom, so I started converting transactions to Nora's own schema. That let me add merchant details, handle categories my way, and let users edit their transactions.

Next, I built callable tools (pretty much Python functions) that the AI could use to answer financial questions. That worked quite well, so I built out the dashboard with spending and income trends, merchants, categories, balances, and all that.

![AI answer summarizing monthly grocery spending](/case-studies/nora/23-nora-answer-summary.png)
![Dashboard with financial position, spending, and income trends](/case-studies/nora/01-home-overview-top.png)
![Spending breakdown by category](/case-studies/nora/07-categories-share.png)
![Merchant spending overview](/case-studies/nora/11-merchants-overview.png)
![Account balances and cash net worth history](/case-studies/nora/13-accounts-net-cash.png)

This is getting long and I'm getting tired of writing, so I'll wrap it up. I showed some friends, they said it'd be useful to them, and I decided to make it public.

You can try it out at [nora-fi.com](https://nora-fi.com/).
