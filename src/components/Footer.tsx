export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 pb-24 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-6 text-sm">
            <a href="#" className="hover:text-[#365ffa] transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-[#365ffa] transition-colors">
              Privacy Policy
            </a>
          </div>

          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              Developed by{' '}
              <span className="text-[#365ffa] font-semibold">WebSec AI</span>
            </p>
          </div>

          <div className="text-gray-500 text-xs">
            © 2025 WebSec AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
