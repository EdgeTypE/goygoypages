import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Goygoy Engine',
  subtitle: 'Oyun Haberleri',
  lang: 'tr-TR',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/goygoyenginekare.png',
    name: 'Goygoy Engine',
    status: '👾',
    bio: 'Oyun sektörü haberlerini sizlerle paylaşıyoruz.'
  },
  themeColor: '#3D4451'
}
