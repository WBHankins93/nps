export default function Footer() {
  return (
    <footer className="flex h-16 flex-shrink-0 items-center bg-[#0B1F3F] px-6 md:h-20 md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between text-xs text-white/80 md:text-sm">
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

