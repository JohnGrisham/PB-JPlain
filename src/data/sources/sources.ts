/* eslint-disable sort-keys */
import { Bias } from '../../enums'
import { Source } from '../../interfaces'

export const sources: Source[] = [
	{
		id: 'abc-news',
		name: 'ABC News',
		description:
			'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
		url: 'https://abcnews.go.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'al-jazeera-english',
		name: 'Al Jazeera English',
		description:
			'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
		url: 'http://www.aljazeera.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'associated-press',
		name: 'Associated Press',
		description:
			'The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.',
		url: 'https://apnews.com/',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'axios',
		name: 'Axios',
		description:
			'Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.',
		url: 'https://www.axios.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'bloomberg',
		name: 'Bloomberg',
		description:
			'Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.',
		url: 'http://www.bloomberg.com',
		category: 'business',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'breitbart-news',
		name: 'Breitbart News',
		description:
			'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
		url: 'http://www.breitbart.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.FarRight
	},
	{
		id: 'business-insider',
		name: 'Business Insider',
		description:
			'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
		url: 'http://www.businessinsider.com',
		category: 'business',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'buzzfeed',
		name: 'Buzzfeed',
		description:
			'BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.',
		url: 'https://www.buzzfeed.com',
		category: 'entertainment',
		language: 'en',
		country: 'us',
		bias: Bias.FarLeft
	},
	{
		id: 'cbs-news',
		name: 'CBS News',
		description:
			'CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.',
		url: 'http://www.cbsnews.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'cnn',
		name: 'CNN',
		description:
			'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
		url: 'http://us.cnn.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'fox-news',
		name: 'Fox News',
		description:
			'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
		url: 'http://www.foxnews.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Right
	},
	{
		id: 'google-news',
		name: 'Google News',
		description: 'Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.',
		url: 'https://news.google.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'mashable',
		name: 'Mashable',
		description: 'Mashable is a global, multi-platform media and entertainment company.',
		url: 'https://mashable.com',
		category: 'entertainment',
		language: 'en',
		country: 'us',
		bias: Bias.FarLeft
	},
	{
		id: 'msnbc',
		name: 'MSNBC',
		description:
			'Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.',
		url: 'http://www.msnbc.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.FarLeft
	},
	{
		id: 'national-review',
		name: 'National Review',
		description: 'National Review: Conservative News, Opinion, Politics, Policy, & Current Events.',
		url: 'https://www.nationalreview.com/',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.FarRight
	},
	{
		id: 'nbc-news',
		name: 'NBC News',
		description:
			'Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.',
		url: 'http://www.nbcnews.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'newsweek',
		name: 'Newsweek',
		description:
			'Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.',
		url: 'https://www.newsweek.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.FarLeft
	},
	{
		id: 'new-york-magazine',
		name: 'New York Magazine',
		description:
			'NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.',
		url: 'http://nymag.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.FarLeft
	},
	{
		id: 'politico',
		name: 'Politico',
		description: 'Political news about Congress, the White House, campaigns, lobbyists and issues.',
		url: 'https://www.politico.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'reuters',
		name: 'Reuters',
		description:
			'Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.',
		url: 'http://www.reuters.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'techcrunch',
		name: 'TechCrunch',
		description:
			'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
		url: 'https://techcrunch.com',
		category: 'technology',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'the-american-conservative',
		name: 'The American Conservative',
		description: 'Realism and reform. A new voice for a new generation of conservatives.',
		url: 'http://www.theamericanconservative.com/',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Right
	},
	{
		id: 'the-hill',
		name: 'The Hill',
		description:
			'The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.',
		url: 'http://thehill.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'the-huffington-post',
		name: 'The Huffington Post',
		description:
			'The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.',
		url: 'http://www.huffingtonpost.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'the-wall-street-journal',
		name: 'The Wall Street Journal',
		description:
			'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.',
		url: 'http://www.wsj.com',
		category: 'business',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	},
	{
		id: 'the-washington-post',
		name: 'The Washington Post',
		description:
			'Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.',
		url: 'https://www.washingtonpost.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'the-washington-times',
		name: 'The Washington Times',
		description:
			'The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.',
		url: 'https://www.washingtontimes.com/',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Right
	},
	{
		id: 'time',
		name: 'Time',
		description:
			'Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.',
		url: 'http://time.com',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Left
	},
	{
		id: 'usa-today',
		name: 'USA Today',
		description: 'Get the latest national, international, and political news at USATODAY.com.',
		url: 'http://www.usatoday.com/news',
		category: 'general',
		language: 'en',
		country: 'us',
		bias: Bias.Centrist
	}
]
