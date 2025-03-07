import {
  ArrowUpDoubleIcon,
  Briefcase07Icon,
  Calendar03Icon,
  CameraVideoIcon,
  ChartHistogramIcon,
  Clock02Icon,
  Comment01Icon,
  Film01Icon,
  FlimSlateIcon,
  HeadsetIcon,
  Image01Icon,
  Linkedin01Icon,
  Mail01Icon,
  Megaphone02Icon,
  Mic02Icon,
  PinIcon,
  RepeatIcon,
  Rocket01Icon,
  SaveMoneyDollarIcon,
  UserSharingIcon,
  Video02Icon,
  WhatsappIcon,
  ZapIcon
} from 'hugeicons-react';

export const hero = {
  tags: ['Video editor', 'Asset creator', 'Visual storyteller'],
  heading: 'Experience the art of video production & storytelling',
  excerpt:
    'A proven track record of leading video production teams to execute Short film, Documentary and Movie explanation across Youtube, Facebook visualand streaming formats.'
};

export const features = [
  {
    title: '4+ Years of Experience',
    description:
      'Skilled in video editing, motion graphics, and storytelling to enhance content quality.',
    icon: <Briefcase07Icon />
  },
  {
    title: 'Creating Engaging Hooks',
    description:
      'Attention-grabbing intros that keep viewers engaged and improve watch time.',
    icon: <RepeatIcon />
  },
  {
    title: 'Fast Delivery',
    description:
      'High-quality edits with a quick turnaround time to meet tight deadlines.',
    icon: <ZapIcon />
  },
  {
    title: 'Friendly Communication',
    description:
      'Clear, professional, and responsive communication throughout.',
    icon: <Comment01Icon />
  },
  {
    title: 'Affordable Pricing',
    description: 'Top-tier editing services at a budget-friendly price point.',
    icon: <SaveMoneyDollarIcon />
  },
  {
    title: '24/7 Support',
    description:
      'Available anytime to assist with edits, revisions, and creative guidance.',
    icon: <Clock02Icon />
  }
];

export const services = {
  subtitle: 'Services',
  heading: 'Unleash Stunning Videos and Watch Your Youtube Soar',
  data: [
    {
      title: 'Documentary',
      price: 25,
      icon: <Video02Icon size={28} strokeWidth={0.8} />,
      remarks: '(up to 12 minute)'
    },
    {
      title: 'Short Film',
      price: 100,
      icon: <FlimSlateIcon size={28} strokeWidth={0.8} />,
      remarks: '(up to 30 minute)'
    },
    {
      title: 'Talking Head Video',
      price: 25,
      icon: <Mic02Icon size={28} strokeWidth={0.8} />,
      remarks: '(up to 12 minute)'
    },
    {
      title: 'Podcast / Podcast to Shorts',
      price: 1.5,
      pricePer: 'minute',
      icon: <HeadsetIcon size={28} strokeWidth={0.8} />
    },
    {
      title: 'Ads',
      price: 5,
      icon: <Megaphone02Icon size={28} strokeWidth={0.8} />,
      pricePer: 'minute'
    },
    {
      title: 'Reels / Shorts',
      price: 15,
      icon: <Film01Icon size={28} strokeWidth={0.8} />
    },
    {
      title: 'Vlog',
      price: 1.5,
      pricePer: 'minute',
      icon: <CameraVideoIcon size={28} strokeWidth={0.8} />
    },
    {
      title: 'Thumbnail',
      price: 5,
      icon: <Image01Icon size={28} strokeWidth={0.8} />
    }
  ]
};

export const contacts = {
  subtitle: 'Get in touch',
  heading: 'Let’s Collaborate and Create Together',
  data: [
    {
      title: 'Email',
      icon: <Mail01Icon />,
      description: 'muslamul.siam.official@gmail.com',
      href: 'mailto:muslamul.siam.official@gmail.com'
    },
    {
      title: 'Linkedin',
      icon: <Linkedin01Icon />,
      description: '/muslamul-haq-siam',
      href: 'https://linkedin.com/in/muslamul-haq-siam-6b4732203'
    },
    {
      title: 'WhatsApp',
      icon: <WhatsappIcon />,
      description: '+8801644533750',
      href: 'https://wa.me/+8801644533750'
    }
  ]
};

export const benefits = {
  subtitle: 'why choose me?',
  heading: 'Wanna grow your channel / business? You are at right place',
  data: [
    {
      title: 'Engaging Hooks',
      description: 'Boost content',
      multiplier: 10,
      icon: <PinIcon />,
      secondaryIcon: (
        <Rocket01Icon
          size={208}
          color='#ffffff20'
          className='absolute right-0 top-0 opacity-10'
        />
      )
    },
    {
      title: 'Engaging Edit',
      description: 'Gain retention of audience',
      multiplier: 5,
      icon: <FlimSlateIcon />,
      secondaryIcon: (
        <UserSharingIcon
          size={208}
          color='#ffffff20'
          className='absolute right-0 top-0 opacity-10'
        />
      )
    },
    {
      title: 'Thumbnail',
      description: 'Boost content',
      multiplier: 2,
      icon: <Image01Icon />,
      secondaryIcon: (
        <ArrowUpDoubleIcon
          size={208}
          color='#ffffff20'
          className='absolute right-0 top-0 opacity-10'
        />
      )
    },
    {
      title: 'Consistency',
      description: 'Ranks your content',
      multiplier: 2,
      icon: <Calendar03Icon />,
      secondaryIcon: (
        <ChartHistogramIcon
          size={208}
          color='#ffffff20'
          className='absolute right-0 top-0 opacity-10'
        />
      )
    }
  ]
};

export const pricing = {
  subtitle: 'Pricing',
  heading: 'Transparent & Flexible Pricing, Choose What Works for You',
  data: [
    {
      title: 'Beginner',
      price: 150,
      features: [
        '5 Youtube Videos',
        '5 Shorts',
        'Youtube Thumbnails',
        <del>Shorts Thumbnails</del>,
        <del>SEO</del>,
        'Max video length 10min',
        <del>Generate Hooks</del>,
        '24/7 Assistence',
        '5 Revisions'
      ]
    },
    {
      title: 'Creator',
      recommended: true,
      description:
        'For growing creators seeking pro-quality content, SEO, and flexibility.',
      price: 500,
      features: [
        '10 Youtube Videos',
        '10 Shorts',
        'Youtube Thumbnails',
        'Shoerts Thumbnails',
        'SEO',
        'Max video length 20min',
        <del>Generate Hooks</del>,
        '24/7 Assistence',
        'Unlimited Revisions'
      ]
    },
    {
      title: 'Studio',
      price: 800,
      features: [
        '15 Youtube Videos',
        '15 Shorts',
        'Youtube Thumbnails - 15',
        'Shorts Thumbnails - 15',
        'SEO',
        'Max video length 20min',
        'Generate Hooks',
        '24/7 Assistence',
        'Unlimited Revisions'
      ]
    }
  ]
};

export const projects = [
  {
    title: 'Motion Reels',
    type: 'reel',
    data: ['eNabbaWiBfM', 'h5s6vuC40jA']
  },
  {
    title: 'Documentary',
    type: 'video',
    data: ['VLnvv5gOoHE', 'nyoyzgbMGwk', 'hJrTvBRUN0s', 'vMsZ7JOpMNs']
  },
  {
    title: 'Story Telling',
    type: 'video',
    data: ['UlfSwFcHW0E']
  },
  {
    title: 'Advertise',
    type: 'video',
    data: ['XADEnDr2fnM']
  }
];

export const testimonials = [
  {
    author: 'Kowshiq Ahmed',
    country: 'Bangladesh',
    comment:
      'Siam is my go-to YouTube video editor! His creativity and storytelling skills exceed my expectations every time. Plus, he’s incredibly quick to respond and delivers on time.'
  },
  {
    author: 'Shailin Chattarpal',
    country: 'Netherland',
    comment:
      'My guy SIam and I have been working together weekly for going on three months now and every project has always turned out better and better always exceeding expectations.'
  },
  {
    author: 'Arhum Ahmed',
    country: 'Pakistan',
    comment:
      'Did a great job! He is incredibly responsive, he went above and beyond with the extra details in the edits throughout the video and he made sure I was 100% happy before calling it done.'
  },
  {
    author: 'Ateq Ahmed',
    country: 'Dubai',
    comment:
      'Working with Siam was really exciting for me. He is very genius, and always look after on details of editing. His strategy helps me to grow my channel. Thanks Siam.'
  }
];
