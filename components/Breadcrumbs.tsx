'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { name, href };
    }),
  ];

  return (
    <nav aria-label="Breadcrumb" className="absolute top-20 md:top-24 left-0 right-0 z-40">
      <div className="container mx-auto px-6">
        <ol className="flex items-center space-x-1.5 text-xs text-gray-500">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index > 0 && <span className="mx-1.5 text-gray-400">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-600" aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-ocean transition-colors">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

