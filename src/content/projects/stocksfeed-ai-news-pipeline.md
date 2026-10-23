![StocksFeedAI news feed with article summaries, ticker tags, and sentiment indicators](/case-studies/stocksfeed-ai/news-feed.png)
![Amazon stock overview with a one-month price chart and news filters](/case-studies/stocksfeed-ai/amzn-price-history.png)
![Amazon stock overview with its price history and related news articles](/case-studies/stocksfeed-ai/amzn-related-news.png)

Last year, I started investing. After a couple of months of picking what I thought were the best companies (I was wrong and lost money btw), I settled on a few ETFs (basically baskets of stocks) covering different industries and invested in them regularly.

I used [Questrade](https://www.questrade.com/), which had a stock news section. Even though I wasn't changing my strategy, I'd check my portfolio daily and research why it went up or down. I kept seeing connections between stock prices and real-world events: companies collaborating, CEOs or politicians tweeting, etc.

That's when I wondered: could software, or even a person, use those events to figure out whether a stock is worth investing in?

The ideal process would be:

Event happens → software picks up the signal → decision to invest → right decision → money is made $🤑

First, I needed a way to pick up those events. For me, and lots of people, that means reading the news. So I went down a rabbit hole on web scraping: static sites, sites that use JS, paywalls, all that.

I ended up building a Python scraper that visits news outlets like Yahoo and Reuters, finds their article lists, and extracts the URLs.

Next came understanding the articles. I used a Python library to extract their content, authors, and publication dates, then passed that to Gemini to get a summary, the stocks mentioned, and a sentiment score for each stock. Everything gets saved in a DB.

To display it all, I built a platform with Next.js and Python. Users can browse the articles and their analysis, then click on a stock to see its price history and related news.

I think it's pretty cool. If I ever get more into algorithmic trading again, I'll explore ways to trade based on those news signals.
