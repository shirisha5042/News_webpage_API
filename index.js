document.addEventListener('DOMContentLoaded', () => {
  const data = {
      status: "ok",
      totalResults: 4030,
      articles: [
          {
              source: { id: null, name: "Yahoo Entertainment" },
              author: "Josh Schafer",
              title: "A critical labor report meets a stock market at record highs: What to know this week",
              description: "The September jobs report highlights the coming trading week as investors search for clues on how rapidly the labor market is cooling.",
              url: "https://finance.yahoo.com/news/a-critical-labor-report-meets-a-stock-market-at-record-highs-what-to-know-this-week-113035514.html/",
              urlToImage: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo.png",
              publishedAt: "2024-09-29T11:30:35Z",
              content: "For the week, the S&amp;P 500 and Dow Jones Industrial Average (^DJI) were up about 0.7%..."
          },
          {
              source: { id: null, name: "Biztoc.com" },
              author: "marketbeat.com",
              title: "Silver Lake Advisory LLC Acquires New Position in Tesla, Inc. (NASDAQ:TSLA)",
              description: "Silver Lake Advisory LLC bought a new position in Tesla, Inc. in the 2nd quarter, according to the company in its most recent disclosure...",
              url: "https://biztoc.com/x/5f2638e60c125b7d",
              urlToImage: "https://biztoc.com/cdn/5f2638e60c125b7d_s.webp",
              publishedAt: "2024-09-29T11:28:47Z",
              content: "Silver Lake Advisory LLC bought a new position in Tesla, Inc..."
          },
          {
              source: { id: null, name: "fox6now.com" },
              author: "Jenna Sachs",
              title: "Used car brand rankings",
              description: "Used car brand rankingsfox6now.com",
              url: "https://www.fox6now.com/news/used-car-brand-rankings",
              urlToImage: "https://images.foxtv.com/static.fox6now.com/www.fox6now.com/content/uploads/2024/09/1280/720/C6-CR-USED-CAR-BRAND-RANKINGS-PKG_00.00.17.48.jpg?ve=1&tl=1",
              publishedAt: "2024-09-30T21:38:08Z",
              content: "New car prices now average nearly a whopping $50,000. Maybe that sticker shock has you thinking long and hard about a used car..."
          },
          {
              source: { id: null, name: "redmondpie.com" },
              author: "Oliver Haslam",
              title: "Tesla FSD Finally Comes To Cybertruck",
              description: "When Tesla released the Cybertruck electric truck to the world after more than a few delays there were a number of features for people to look forward to.",
              url: "https://www.redmondpie.com/tesla-fsd-finally-comes-to-cybertruck/",
              urlToImage: "https://cdn.redmondpie.com/wp-content/uploads/2023/03/tesla-cybertruck.jpg",
              publishedAt: "2024-09-30T18:15:51Z",
              content: "When Tesla released the Cybertruck electric truck to the world after more than a few delays there were a number of features for people to look forward to."
          },
          {
              source: { id: null, name: "Electrek" },
              author: "Reinette LeJeune",
              title: "Segway x260 electric dirt bike $975 off, Anker SOLIX early fall Prime Day sale offers $4,134 in savings, BMX e-bike low, more",
              description: "We’re kicking off this week’s Green Deals in a higher gear, with Segway’s x260 Electric Dirt Bike taking the lead at $5,525.",
              url: "http://electrek.co/2024/09/30/segway-x260-electric-dirt-bike-anker-solix-prime-day-sale-bmx-e-bike-more/",
              urlToImage: "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/09/Segway-x260-Electric-Dirt-Bike.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
              publishedAt: "2024-09-30T18:14:58Z",
              content: "We’re kicking off this week’s Green Deals in a higher gear, with Segway’s x260 Electric Dirt Bike taking the lead at $5,525."
          },
          {
              source: { id: null, name: "Digital Trends" },
              author: "Christian de Looper",
              title: "Dodge Ram 1500 REV vs. Tesla Cybertruck: premium trucks battle it out",
              description: "The Tesla Cybertruck may make headlines for its crazy design, but it makes a case for itself in performance.",
              url: "https://www.digitaltrends.com/cars/dodge-ram-1500-rev-vs-tesla-cybertruck-premium-trucks-battle-it-out/",
              urlToImage: "https://www.digitaltrends.com/wp-content/uploads/2023/04/Cybertruck.jpeg?resize=1200%2C630&p=1",
              publishedAt: "2024-09-30T18:00:10Z",
              content: "The Tesla Cybertruck has been consistently making headlines in the electric truck world, not just for its outlandish design."
          },
          {
              source: { id: null, name: "ETF Daily News" },
              author: "MarketBeat News",
              title: "Ascent Group LLC Acquires 2,953 Shares of Tesla, Inc. (NASDAQ:TSLA)",
              description: "Ascent Group LLC grew its stake in Tesla, Inc. (NASDAQ:TSLA) by 29.8% in the second quarter, according to the company.",
              url: "https://www.etfdailynews.com/2024/09/30/ascent-group-llc-acquires-2953-shares-of-tesla-inc-nasdaqtsla/",
              urlToImage: "https://www.americanbankingnews.com/wp-content/timthumb/timthumb.php?src=https://www.marketbeat.com/logos/tesla-inc-logo-1200x675.png?v=20221020135629&w=240&h=240&zc=2",
              publishedAt: "2024-09-30T17:41:09Z",
              content: "Ascent Group LLC grew its stake in Tesla, Inc."
          }
      ]
  };

  const fetchNewsBtn = document.getElementById('fetchBtn');
  const newsContainer = document.getElementById('newsContainer');
  let articles = data.articles;

  function renderRandomArticle() {
      newsContainer.innerHTML = ''; 
      if (articles.length > 0) {
          const randomIndex = Math.floor(Math.random() * articles.length);
          const article = articles[randomIndex];
          const articleElement = document.createElement('div');
          articleElement.className = 'news-item';
          articleElement.innerHTML = `
              <h2>${article.title}</h2>
              <p>${article.description}</p>
              <img src="${article.urlToImage}" alt="${article.title}">
              <p><a href="${article.url}" target="_blank">Read more</a></p>
          `;
          newsContainer.appendChild(articleElement);
      } else {
          newsContainer.innerHTML = '<p>No articles available.</p>';
      }
  }

  fetchNewsBtn.addEventListener('click', renderRandomArticle);
});
