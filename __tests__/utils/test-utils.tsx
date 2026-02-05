import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { vi } from 'vitest';

// Mock Next.js Link component
vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: any) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  },
}));

// Custom render function with providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { ...options });

export * from '@testing-library/react';
export { customRender as render };

// Helper to mock usePathname
export const mockUsePathname = (pathname: string) => {
  vi.mock('next/navigation', async () => {
    const actual = await vi.importActual('next/navigation');
    return {
      ...actual,
      usePathname: () => pathname,
      useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
        back: vi.fn(),
        pathname,
        query: {},
        asPath: pathname,
      }),
    };
  });
};

// Helper to create a mock router
export const createMockRouter = (pathname: string = '/') => ({
  push: vi.fn(),
  replace: vi.fn(),
  prefetch: vi.fn(),
  back: vi.fn(),
  pathname,
  query: {},
  asPath: pathname,
});
