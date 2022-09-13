export const AppRoutes = {
  HOME: '/home',
  ARTWORK: '/artwork',
  ABOUT: '/about',
  CONNECT: '/connect'
}

export const Collections = {
  LANDSCAPES: '/landscapes',
  PORTRAITS: '/portraits',
  ABSTRACT: '/abstract',
  CALLIGRAPHY: '/calligraphy',
  MISCELLANY: '/miscellany'
}

export const navPage = (route) => {
  return `/pages${route}`;
}

export const navGallery = (collection) => {
  return `/pages/artwork${collection}`;
}