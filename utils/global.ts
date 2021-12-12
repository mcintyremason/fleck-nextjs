import { ListMenuLink } from 'models/listMenu'
import { NextRouter } from 'next/router'

export const subLinksActive = (link: ListMenuLink, router: NextRouter): boolean => {
  const activeLink = link?.subLinks.find((subLink) => subLink.href === router.pathname)

  return activeLink ? true : false
}
