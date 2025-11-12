export default function Footer() {
  return (
    <footer className="flex flex-shrink-0 items-center bg-[#0B1F3F] px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between py-3 text-xs text-white/80 md:py-4 md:text-sm">
        <p>
          © {new Date().getFullYear()} NOLA Pool Solutions. All rights reserved.
        </p>
        <a
          href="mailto:nolapoolsolutions@gmail.com"
          className="transition-colors hover:text-[#D4AF6E]"
        >
          nolapoolsolutions@gmail.com
        </a>
      </div>
    </footer>
  );
}

