export interface EditorProject {
  id: number;
  title: string;
  category: "Explainers" | "Shorts" | "Client Work";
  videoId?: string;
  videoSrc?: string;
  thumbnail: string;
  type: "youtube" | "external" | "local";
  externalUrl?: string;
}

export const editorProjects: EditorProject[] = [
  // Explainers
  {
    id: 1,
    title: "Fintech Explainer – Study Abroad Payments",
    category: "Explainers",
    videoId: "goPWjqhK7rk",
    thumbnail: "https://img.youtube.com/vi/goPWjqhK7rk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 2,
    title: "Travel Remittance Explainer – Mihuru Travels",
    category: "Explainers",
    videoId: "W6F5rA4bNfE",
    thumbnail: "https://img.youtube.com/vi/W6F5rA4bNfE/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 3,
    title: "Animated Payment Workflow Explainer",
    category: "Explainers",
    videoId: "vuv985ZKjhU",
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
    title: "Podcast Clip – High Retention Edit",
    category: "Shorts",
    videoId: "hzUwdVyHDE4",
    thumbnail: "https://img.youtube.com/vi/hzUwdVyHDE4/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 7,
    title: "Short Form Content – Viral Hook Edit",
    category: "Shorts",
    videoId: "doxI6TLcUvk",
    thumbnail: "https://img.youtube.com/vi/doxI6TLcUvk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 8,
    title: "YouTube Shorts – Engagement Optimized",
    category: "Shorts",
    videoId: "tnOrqPE44uc",
    thumbnail: "https://img.youtube.com/vi/tnOrqPE44uc/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 9,
    title: "Podcast Clip – High Retention Edit",
    category: "Shorts",
    videoId: "1ILKYs5JkK8",
    thumbnail: "https://img.youtube.com/vi/1ILKYs5JkK8/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 10,
    title: "Short Form Content – Viral Hook Edit",
    category: "Shorts",
    videoId: "fHuaZfg7IzA",
    thumbnail: "https://img.youtube.com/vi/fHuaZfg7IzA/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 11,
    title: "YouTube Shorts – Engagement Optimized",
    category: "Shorts",
    videoId: "8OBEzlqxkhg",
    thumbnail: "https://img.youtube.com/vi/8OBEzlqxkhg/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 12,
    title: "Podcast Clip – High Retention Edit",
    category: "Shorts",
    videoId: "0vNXoHaniTw",
    thumbnail: "https://img.youtube.com/vi/0vNXoHaniTw/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 13,
    title: "Short Form Content – Viral Hook Edit",
    category: "Shorts",
    videoId: "hQu80CBsYvc",
    thumbnail: "https://img.youtube.com/vi/hQu80CBsYvc/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 14,
    title: "YouTube Shorts – Engagement Optimized",
    category: "Shorts",
    videoId: "FCggUrZU6wk",
    thumbnail: "https://img.youtube.com/vi/FCggUrZU6wk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 15,
    title: "Podcast Clip – High Retention Edit",
    category: "Shorts",
    videoId: "mKbuNIstyPM",
    thumbnail: "https://img.youtube.com/vi/mKbuNIstyPM/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 16,
    title: "Short Form Content – Viral Hook Edit",
    category: "Shorts",
    videoId: "M5Y_K0vvTsA",
    thumbnail: "https://img.youtube.com/vi/M5Y_K0vvTsA/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 17,
    title: "YouTube Shorts – Engagement Optimized",
    category: "Shorts",
    videoId: "lOpv2kSLupk",
    thumbnail: "https://img.youtube.com/vi/lOpv2kSLupk/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 18,
    title: "Podcast Clip – High Retention Edit",
    category: "Shorts",
    videoId: "v5PvfXjG-Jg",
    thumbnail: "https://img.youtube.com/vi/v5PvfXjG-Jg/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 19,
    title: "Short Form Content – Viral Hook Edit",
    category: "Shorts",
    videoId: "3ZViAdYZQoE",
    thumbnail: "https://img.youtube.com/vi/3ZViAdYZQoE/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 20,
    title: "YouTube Shorts – Engagement Optimized",
    category: "Shorts",
    videoId: "gxNNSCy5qzA",
    thumbnail: "https://img.youtube.com/vi/gxNNSCy5qzA/maxresdefault.jpg",
    type: "youtube"
  },
  {
    id: 21,
    title: "Enterprise Strategy (LinkedIn)",
    category: "Explainers",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1074",
    type: "external",
    externalUrl: "https://www.linkedin.com/posts/isthatpratham_video-editing-showreel-activity-123456789"
  },
  {
    id: 22,
    title: "Feature Film Preview (Dropbox)",
    category: "Shorts",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1159",
    type: "external",
    externalUrl: "https://www.dropbox.com/s/sample-video.mp4?dl=0"
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
    title: "Short Form Edit – High Engagement Cut",
    category: "Shorts",
    videoId: "sUNoPoROOdo",
    thumbnail: "https://img.youtube.com/vi/sUNoPoROOdo/maxresdefault.jpg",
    type: "youtube"
  }
];
