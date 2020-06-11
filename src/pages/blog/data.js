import image3 from '../../assets/blog-images/blog3.gif';
import image2 from '../../assets/blog-images/blog2.jpg';
import image1 from '../../assets/blog-images/blog1.jpg';


export const posts = [
  {
    id: 1,
    caption: 'Cardpay Women in Fintech Talent Week in London ',
    preview: 'This is the call for all women from emerging economies with a strong interest in online payments, e-commerce and fintech at large!',
    imagePreview: image1,
    imageFull: image1,
    content: [
      'This is the call for all women from emerging economies with a strong interest in online payments, e-commerce and fintech at large!',
      'Here at Cardpay we believe that striving for diversity while making meaningful connections with local leaders is of utmost importance when building a global product. Hence, we came up with an idea to find female fintech enthusiasts from developing countries involved in electronic payments to contribute to our community building effort and raising women’s ambitions for innovation in financial services.',
      'The runner-ups matching the profile best will be selected to spend a week in London learning alongside industry leaders about ways of doing business, networking and sharing broader ideas. Cardpay will cover accommodation and travel cost for all the three winners.',
      {
        caption: 'We will be selecting our aspirants under the following criteria:',
        content: [
          'You reside in one of developing countries (Africa, Latin America, Saudi Arabia, etc.)',
          'You work in fintech, involved in this industry in some other way (say, hosting a weekly meetup or writing a blog, etc.), or a self-taught fintech enthusiast who wishes to boost her skills',
          'You are older than 18yo.',
        ],
      },
      {
        caption: 'Is this you? Drop us a line at m.sergeeva@cardpay.com  with a short intro and motivational letter covering these three  points:',
        content: [
          'What brings you to fintech?',
          'What drives your interest and ambition in the area?',
          'What do you think is your major achievement so far, and where are you headed to next?',
        ],
      },
      'We will select the three runner-ups who match our profile best based on your answers - so it’s your time to shine! The winners will get a chance to spend a week in Cardpay London office interning alongside our professionals to learn about our way of doing business, extract valuable insights, and share ideas and concerns.',
      'To make this initiative come true, Cardpay invites opinion leaders working in fintech to speak at Cardpay Females in Fintech Talent Week!',
      'We will be delivering an intensive course on a wide array of topics, and need your input. The event is to take place in London in the 1st week of July, and sponsored by Cardpay London office.',
      'To apply please message m.sergeeva@cardpay.com with a brief intro and the theme you’d like to cover.',
      '',
      'Please share to spread the word and let more talented ladies participate!',
    ],
    author: 'Admin',
    dateTime: '21 June 2019 15:45',
  },
  {
    id: 2,
    caption: 'Acquiring, processing, or a payment gateway? ',
    preview: 'Navigating through the landscape of online payments can be tricky not only for e-commerce newbies, but for savvy users as well.',
    imagePreview: image2,
    imageFull: image2,
    content: [
      'Don’t let Quora fool you',
      '',
      'Navigating through the landscape of online payments can be tricky not only for e-commerce newbies, but for savvy users as well. That’s why staying alert and knowing your ways around becomes increasingly important. In Cardpay ‘Making sense of …’ series we’ll be debunking common myths digging into some misconceptions that lead to miserable consequences and consumer risks. Focusing today on why we need to draw the line between ‘acquiring’, ‘payment gateway’, and  ‘processing’. Let’s dive in!',
      'These days you can often see all the three on the Internet used not just in the same context, but interchangeably at times. Do not let the ‘all-knowing Google’ mislead you, because they are all separate notions inherently different from one another.',
      'Let’s unpack a few things first. Acquiring per se is a broader area that embraces payment gateway, processing, and everything else involved in the process, while payment gateway is merely a technical tool used to process a payment. You go to a website, enter your card details - that’s when a payment gateway opens up as a set of parameters, or an entry point, that actually initiates your payment on the website. After the data is processed, the gateway spits out the result: payment approved / payment declined. Pretty much like a POS terminal in a brick-and-mortar store.',
      'Processing literally has to do with the process of data input/output serving as a connection framework for the payment. It starts immediately when you enter your card details and a secure code to enable a security check-up into a payment gateway. Essentially,  this is the system comprised of multiple participants: your banking card, a bank-issuer, a bank-acquirer, an International Payment systems,  and a merchant website or an app - all interacting together to process your payment.',
      '',
      'Anything else referred to as ‘acquiring’?',
      '',
      'That’s when things get interesting, as it turns out that acquiring - intentionally or not - is also confused with another adjacent term - a p2p payment, or payment from one card to another via apps like PayPal or Venmo.',
      'For a less savvy user, these might look pretty much the same on the surface. Yet, sending pizza money to a flatmate and buying a laptop online are two inherently different activities, if you think about it. More troubling is the fact that some artful online entrepreneurs (especially those who are new to business)  would take advantage of this grey area to avoid paying commissions associated with acquiring. Have you ever wondered when buying, say a laptop online, why are you asked to make a bank transfer instead of using a Visa payment gateway? That’s because a merchant want to avoid using Visa / Mastercard acquiring systems. And that’s actually pretty smart: with more expensive products, commission rate to be taken out of the profit can amount up to a staggering number! However, this type of activity is deemed illegal, as it is clearly misleading. Acquiring and mobile payments differ both in terms of the underlying tech, and consequences they bear for online merchants and consumers alike. With acquiring in place, you are protected by global Visa/Mastercard regulations that provide a money-back guarantee. Critically, if you buy the same laptop via a p2p transfer, you won’t have any guarantees whatsoever!',
      'This sort of confusion puts everyone involved in an awkward position — to say the least, so beware when buying online. Make sure you pay via authorized payment gateways, and stick to reputable online vendors.',
    ],
    author: 'Admin',
    dateTime: '21 June 2019 15:45',
  },
  {
    id: 3,
    caption: 'Cardpay: Looking 10 years back',
    preview: 'We bet you haven’t heard much of Cardpay’s inception story before. Well, we’re about to fix that.',
    imagePreview: image3,
    imageFull: image3,
    content: [
      'You probably don’t know Cardpay’s origin story. That’s okay — you’re here now.',
      {
        caption: 'Our vision of an open world',
        content: [
          'We founded Cardpay with one core belief: once online, international commerce requires speed and flexibility.',
          'Back in 2009, we saw that digital was winning over brick-and-mortar. It was obvious that new startups would soon need robust, flexible payment tools to power their business. The financial institutions of the time should have seen this as well but continued to offer repackaged offline services that could not meet the demands of the borderless, paperless, automated digital world.',
          'Driven by our understanding of the coming digital market, we decided to launch a novel framework to process payments from anywhere in the world. Our vision — no borders or country limitations — just an open, equal opportunity market that anyone could access.',
        ],
      },
      {
        caption: 'E-commerce runs into red tape',
        content: [
          'The reigning financial behemoths were too slow and bureaucratic to gear up for the coming changes.',
          'Existing e-payment vehicles were just banking copycats, too rigid to adjust to the needs of the all-digital age businesses. Merchants needed an e-payment platform with a different DNA — easy to tweak to the needs of any business. It had to evolve along with digital business.',
          'Without further ado, Cardpay’s founders put a team together and set out to disrupt the electronic payment status quo.',
          'The niche was there to fill. Banks were failing to satisfy fast and booming online markets, focused on big players from the US and Western Europe, to the detriment of a huge segment of their potential market. Cardpay had to connect the dots in order to translate the ideals of the open internet to traditional finance.',
          'It was the right time and place — you no longer had to be a large bank to revolutionize the financial world. Responding to the demand of then-startups that have since become big players, Cardpay set out to disrupt the customary analog workflow of manual security checks and endless paperwork.',
        ],
      },
      {
        caption: 'We stay true to our DNA, no matter where we go',
        content: [
          'Following this intuition, our team spun up Cardpay in Europe, before gradually expanding to Asia and the Americas. The platform gained traction by offering online merchants a secure payment service with a unique set of customizable features that allowed business to expand their global presence.',
          'We’ve matured over these past ten years, but we’re still young at heart. We put people first and embrace diversity in everything we do. Our talent spool spans fourteen countries. Forty percent of our employees are women. Our team consists of experts with strong backgrounds in finance and cross-border payments. We’re here to make sure that you’re always in full control of your funds.',
          'Our drive for agile functionality and the highest security standards reflects our experience, research, and customer feedback. We’re always looking for ways to make Cardpay even more customizable so we can serve an even larger variety of online businesses.',
        ],
      },
      {
        caption: 'What’s left?',
        content: [
          'We operate a little differently than your average electronic payment service. We’re against endless bureaucracy and strive to keep internal operations nice and simple.\n' +
          'Cardpay onboarding is fast — we run automatic client background checks. Our dispute resolution service lets merchants handle chargebacks seamlessly, mitigating the associated risks. Our newly-integrated Electronic Signature functionality allows complex transactions to be completed quickly and efficiently.\n' +
          'Our platform provides a payment gateway and processing all in one place, with a convenient dashboard and quick turnaround times.\n'
        ],
      },
    ],
    author: 'Marina Sergeeva',
    dateTime: '20 May 2019',
  },
];
