const Footer = () => {
  return (
    <footer className="max-w-grid-max mx-auto py-[40px] px-grid-margin">
      <div>
        <div className="flex flex-col pt-[30px] border-t border-border font-sans text-xs items-center md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-grid-gutter md:pt-[40px]">
          <p className="text-center opacity-60 tracking-[0.5px] md:text-left md:col-span-4 lg:col-span-6">
            © {new Date().getFullYear()} RYAN NJOROGE. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-[20px] flex gap-[30px] justify-center md:mt-0 md:justify-self-end md:col-span-4 lg:col-span-6">
            <a href="https://github.com/Ryavnn" target="_blank" rel="noopener noreferrer" className="text-text no-underline tracking-[1px] font-medium transition-opacity duration-200 hover:opacity-60">GITHUB</a>
            <a href="https://x.com/techbuildske" target="_blank" rel="noopener noreferrer" className="text-text no-underline tracking-[1px] font-medium transition-opacity duration-200 hover:opacity-60">TWITTER (X)</a>
            <a href="https://www.instagram.com/ryanbuilds.ke/" target="_blank" rel="noopener noreferrer" className="text-text no-underline tracking-[1px] font-medium transition-opacity duration-200 hover:opacity-60">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
