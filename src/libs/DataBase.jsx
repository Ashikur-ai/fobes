import { FaRegBookmark } from "react-icons/fa";
import sub1 from "/images/sub1.webp"
import sub2 from "/images/sub2.webp"

const BreakingNewsData = [
  {
    id: 1,
    time: '5 hours ago',
    title: 'Musk Reportedly Planning New Starlink Deal With FAA—Raising New Conflict'
  },
  {
    id: 2,
    time: '3 hours ago',
    title: 'Apple’s Latest iPhone Update Fixes Critical Security Vulnerabilities'
  },
  {
    id: 3,
    time: '1 hour ago',
    title: 'Bitcoin Hits New All-Time High Amid Growing Institutional Interest'
  },
  {
    id: 4,
    time: '30 minutes ago',
    title: 'NASA Announces New Lunar Mission Timeline for Artemis Program'
  },
  {
    id: 5,
    time: '2 days ago',
    title: 'OpenAI Introduces New ChatGPT Model with Improved Reasoning Abilities'
  },
  {
    id: 6,
    time: '12 hours ago',
    title: 'Tesla Recalls Thousands of Cars Over Software Glitch'
  },
  {
    id: 7,
    time: '7 hours ago',
    title: 'Amazon Expands Drone Delivery Service to More Cities'
  },
  {
    id: 8,
    time: '15 minutes ago',
    title: 'Google Unveils AI-Powered Search Engine Upgrade'
  },
  {
    id: 9,
    time: '4 days ago',
    title: 'Meta Launches New Privacy Features for WhatsApp Users'
  },
  {
    id: 10,
    time: '6 hours ago',
    title: 'Netflix Announces Major Changes to Subscription Plans'
  }
];

const subNewsData = [
  {
    id: 1,
    title: 'Hong Kong’s 50 Richest 2025: Stock Market Rally Lifts Wealth But Property Woes Linger',
    desc: 'The minimum net worth to qualify rose to $1.4 billion from $1.1 billion last year.',
    image: sub1
  },
  {
    id: 2,
    title: 'Hong Kong’s 50 Richest 2025: Stock Market Rally Lifts Wealth But Property Woes Linger',
    desc: 'The minimum net worth to qualify rose to $1.4 billion from $1.1 billion last year.',
    image: sub2
  }
]

const otherNewsData = [
  {
    id: 1,
    title: 'Physical Attacks Against Bitcoin Holders Surge As BTC Price Rises',
    author: 'ByJavier Bastardo, Contributor.'
  }
]

const items = [
  {
    key: "1",
    label: <span className="font-semibold text-lg text-red-600">Trending</span>,
    children: (
      <div className="mt-4">
        {[
          "Physical Attacks Against Bitcoin Holders Surge As BTC Price Rises",
          "New Guns, More Ammo: Ukraine’s Artillery Blasts Away At A Rate Of...",
          "The Real Reasons Companies Are Forcing You Back To The Office",
          "The Highest-Paid Actors Of 2024",
          "The Real Reasons Companies Are Forcing You Back To The Office",
          "The Highest-Paid Actors Of 2024",
          "The Real Reasons Companies Are Forcing You Back To The Office",
          "The Highest-Paid Actors Of 2024",
          "4 Reasons Behind ‘Phantom Plus-One’ Relationships—By A Psychologist",
          "A Hapless Russian Soldier Couldn’t Shoot Down A Ukrainian Bomber Dron...",
        ].map((title, index) => (
          <div key={index} className="flex justify-between items-center gap-3 py-3 border-b">
            <div className="flex gap-4">
              <div className="">
                <span className="text-red-600 font-semibold text-4xl font-Playfair">{index + 1}.</span>
              </div>
              <div>
                <p className="text-black font-semibold">{title}</p>
                <p className="text-gray-500 text-sm">
                  By <span className="text-blue-600 font-medium">Author Name</span>, Contributor
                </p>
              </div>
            </div>
            <div className="">
              <FaRegBookmark className='text-2xl text-blue-600' />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "2",
    label: <span className="font-semibold text-lg text-gray-500">Editors' Picks</span>,
    children: (
      <div className="mt-4">
        {[
          "Physical Attacks Against Bitcoin Holders Surge As BTC Price Rises",
          "New Guns, More Ammo: Ukraine’s Artillery Blasts Away At A Rate Of...",
          "The Real Reasons Companies Are Forcing You Back To The Office",

          "The Highest-Paid Actors Of 2024",
          "4 Reasons Behind ‘Phantom Plus-One’ Relationships—By A Psychologist",
          "A Hapless Russian Soldier Couldn’t Shoot Down A Ukrainian Bomber Dron...",
        ].map((title, index) => (
          <div key={index} className="flex justify-between items-center gap-3 py-3 border-b">
            <div className="flex gap-4">
              <div className="">
                <span className="text-red-600 font-semibold text-4xl font-Playfair">{index + 1}.</span>
              </div>
              <div>
                <p className="text-black font-semibold">{title}</p>
                <p className="text-gray-500 text-sm">
                  By <span className="text-blue-600 font-medium">Author Name</span>, Contributor
                </p>
              </div>
            </div>
            <div className="">
              <FaRegBookmark className='text-2xl text-blue-600' />
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

import slider1 from "/images/newsSlider/slider1.webp"
import slider2 from "/images/newsSlider/slider2.webp"
import slider3 from "/images/newsSlider/slider3.webp"
const newsSliderData = [
  {
    id: 1,
    title: `Singapore’s Paragon In Deal Valuing Shopping Mall REIT At $2.1 Billion
             Thai Scion Taps U.S. Gas Wells To Help Family’s Coal Giant Go Green`,
    image: slider1
  },
  {
    id: 2,
    title: `Singapore’s Paragon In Deal Valuing Shopping Mall REIT At $2.1 Billion
             Thai Scion Taps U.S. Gas Wells To Help Family’s Coal Giant Go Green`,
    image: slider2
  },
  {
    id: 3,
    title: `Singapore’s Paragon In Deal Valuing Shopping Mall REIT At $2.1 Billion
             Thai Scion Taps U.S. Gas Wells To Help Family’s Coal Giant Go Green`,
    image: slider3
  },
  {
    id: 1,
    title: `Singapore’s Paragon In Deal Valuing Shopping Mall REIT At $2.1 Billion
             Thai Scion Taps U.S. Gas Wells To Help Family’s Coal Giant Go Green`,
    image: slider1
  },
  {
    id: 2,
    title: `Singapore’s Paragon In Deal Valuing Shopping Mall REIT At $2.1 Billion
             Thai Scion Taps U.S. Gas Wells To Help Family’s Coal Giant Go Green`,
    image: slider2
  },
  {
    id: 3,
    title: `Singapore’s Paragon In Deal Valuing Shopping Mall REIT At $2.1 Billion
             Thai Scion Taps U.S. Gas Wells To Help Family’s Coal Giant Go Green`,
    image: slider3
  }
]


export { BreakingNewsData, subNewsData, otherNewsData, items, newsSliderData }