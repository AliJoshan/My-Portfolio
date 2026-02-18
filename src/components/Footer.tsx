const Footer = () => (
    <footer className="border-t border-white/5 py-10 bg-[hsl(222,47%,6%)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} — Built with care and clean code.
            </p>
        </div>
    </footer>
);

export default Footer;
