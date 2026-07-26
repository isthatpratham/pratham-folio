export interface EditorProject {
  id: number;
  title: string;
  category: "Explainers" | "Shorts" | "Client Work";
  videoId?: string;
  videoSrc?: string;
  thumbnail: string;
  type: "youtube" | "external" | "local";
  externalUrl?: string;
  channelName?: string;
}

export const editorProjects: EditorProject[] = [
  // Explainers
  {
    id: 1,
    title: "I’m fat can I do calisthenics?",
    category: "Explainers",
    videoId: "goPWjqhK7rk",
    channelName: "Yellow Dude",
    thumbnail: "https://img.youtube.com/vi/goPWjqhK7rk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 2,
    title: "Top 3 reasons you fail at leg gains in calisthenics",
    category: "Explainers",
    videoId: "W6F5rA4bNfE",
    channelName: "Yellow Dude",
    thumbnail: "https://img.youtube.com/vi/W6F5rA4bNfE/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 3,
    title: "I’m skinny can I do calisthenics?",
    category: "Explainers",
    videoId: "vuv985ZKjhU",
    channelName: "Yellow Dude",
    thumbnail: "https://img.youtube.com/vi/vuv985ZKjhU/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 4,
    title: "SaaS Product Explainer – SanvyaTech",
    category: "Explainers",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990727/SanvyaTech1_gy6hux.mp4",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1115",
    type: "local"
  },
  {
    id: 5,
    title: "Enterprise Solutions – SanvyaTech",
    category: "Explainers",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990742/SanvyaTech2_kt3iuc.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1170",
    type: "local"
  },

  // Shorts
  {
    id: 6,
    title: "Whey Protein VS Cooked Dal #podcast #stws #guthealth #gym",
    category: "Shorts",
    videoId: "hzUwdVyHDE4",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/hzUwdVyHDE4/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 7,
    title: "Is McDonald's Cheaper than Fresh Fruits? #agriculture #nike #business #stws #sustainability #farming",
    category: "Shorts",
    videoId: "doxI6TLcUvk",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/doxI6TLcUvk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 8,
    title: "How Bryan Johnson made Air Pollution Headlines! #bryanjohnson #india #bjp #podcast #stws #climate",
    category: "Shorts",
    videoId: "tnOrqPE44uc",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/tnOrqPE44uc/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 9,
    title: "What You Need to Know About Diabetes and How to Control Blood Sugar #preventdiabetes #health #stws",
    category: "Shorts",
    videoId: "1ILKYs5JkK8",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/1ILKYs5JkK8/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 10,
    title: "There's Gold in our Trash? #urbanfarming #mumbai #delhi #kitchen #soil #food #organicwaste #stws",
    category: "Shorts",
    videoId: "fHuaZfg7IzA",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/fHuaZfg7IzA/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 11,
    title: "Why Are Cows Worshipped While Buffaloes Are Forgotten?🐄🤔 #chillies #podcast #animals #gaushala",
    category: "Shorts",
    videoId: "8OBEzlqxkhg",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/8OBEzlqxkhg/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 12,
    title: "Smart kids schooling grownups with no fear! #podcast #sadhana #children #plantbased #zoo #aquarium",
    category: "Shorts",
    videoId: "0vNXoHaniTw",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/0vNXoHaniTw/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 13,
    title: "People on this diet live longer. #vitamin #nutrition #health #podcast #stws",
    category: "Shorts",
    videoId: "hQu80CBsYvc",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/hQu80CBsYvc/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 14,
    title: "You Won't Believe What's Really in Your Leather! #animals #dubai #india #reality #truth #facts #ai",
    category: "Shorts",
    videoId: "FCggUrZU6wk",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/FCggUrZU6wk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 15,
    title: "Baby Chicks in Blenders? The Dark Truth #chicken #egg #food #pain #pizza #sadstatus #feel #dubai",
    category: "Shorts",
    videoId: "mKbuNIstyPM",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/mKbuNIstyPM/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 16,
    title: "Is #protein actually that important? #macros #fitness #gym #movie #superhero #telegumovie #carbs",
    category: "Shorts",
    videoId: "M5Y_K0vvTsA",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/M5Y_K0vvTsA/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 17,
    title: "They Both Got Arrested! #london #crime #animals #model #influencer #newyork #india #funny #memes",
    category: "Shorts",
    videoId: "lOpv2kSLupk",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/lOpv2kSLupk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 18,
    title: "You Don’t Need Privilege to Do This! #nature #rich #india #growth #inspiration #motivation #care",
    category: "Shorts",
    videoId: "v5PvfXjG-Jg",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/v5PvfXjG-Jg/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 19,
    title: "Zahrah Khan on eating Seafood #sustainableteawithshreya #plantbasedliving #veganism #zahrahskhan",
    category: "Shorts",
    videoId: "3ZViAdYZQoE",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/3ZViAdYZQoE/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 20,
    title: "Genelia Deshmukh's Dilemma #sustainableteawithshreya #plantbasedliving #sustainability #veganism",
    category: "Shorts",
    videoId: "gxNNSCy5qzA",
    channelName: "Sustainable Tea With Shreya",
    thumbnail: "https://img.youtube.com/vi/gxNNSCy5qzA/maxresdefault.jpg",
    type: "youtube"
  },

  // Client Work
  {
    id: 23,
    title: "Client Birthday Edit – Cinematic Style",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990772/harshita_bdy_ty7iz3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1170",
    type: "local"
  },
  {
    id: 24,
    title: "Personal Gift Video – Story Edit",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990751/siaaa_oofob6.mp4",
    thumbnail: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&q=80&w=1170",
    type: "local"
  },
  {
    id: 25,
    title: "Cinematic Event Recap",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990770/tomake_chai_final_lo2vcy.mp4",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1169",
    type: "local"
  },
  {
    id: 26,
    title: "Mood Film – Aesthetic Story",
    category: "Client Work",
    videoSrc: "/videos/way dowwwwwwwn.mp4",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1171",
    type: "local"
  },
  {
    id: 27,
    title: "Product Promo – High Impact",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990721/chanaaaa_liobnb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1493119508227-21d24263170c?auto=format&fit=crop&q=80&w=1160",
    type: "local"
  },
  {
    id: 28,
    title: "Auralia Edit – Luxury Showcase",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990732/AuraliaEdit_tsyuhl.mp4",
    thumbnail: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80&w=1170",
    type: "local"
  },
  {
    id: 29,
    title: "Client Collaboration – Step Edit",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990730/2step_tbpagw.mp4",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1171",
    type: "local"
  },
  {
    id: 30,
    title: "Custom Project Edit – Viral Flow",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990615/chana_aasa_kooda_1_okwsmp.mp4",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1170",
    type: "local"
  },
  {
    id: 31,
    title: "Cinematic Reel – Creative Cut",
    category: "Client Work",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/f_auto,q_auto/v1773990755/xxx_svt1xt.mp4",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1025",
    type: "local"
  },
  {
    id: 32,
    title: "Fairexpay Travel | Unveiling soon",
    category: "Shorts",
    videoId: "sUNoPoROOdo",
    channelName: "Fairexpay",
    thumbnail: "https://img.youtube.com/vi/sUNoPoROOdo/maxresdefault.jpg",
    type: "youtube"
  }
];
