import { useState, useEffect, useRef } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'zh-CN', name: 'Chinese', nativeName: '中文' },
];

function triggerGoogleTranslate(langCode: string) {
  const combo = document.querySelector<HTMLSelectElement>(
    '#google_translate_element select.goog-te-combo'
  );
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event('change'));
  }
}

function getCurrentLanguage(): string {
  const match = document.cookie.match(/googtrans=\/en\/(\w+(-\w+)?)/);
  return match ? match[1] : 'en';
}

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Language>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect current language on mount
  useEffect(() => {
    const currentCode = getCurrentLanguage();
    const found = LANGUAGES.find((l) => l.code === currentCode);
    if (found) setSelected(found);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(lang: Language) {
    setSelected(lang);
    setIsOpen(false);
    if (lang.code === 'en') {
      // Reset to original language
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      document.cookie = 'googtrans=; path=/; domain=.' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      window.location.reload();
    } else {
      triggerGoogleTranslate(lang.code);
    }
  }

  return (
    <div className="lang-selector" ref={dropdownRef}>
      <button
        className="lang-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        {/* Globe icon */}
        <svg
          className="lang-globe"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
        </svg>
        <span className="lang-current">{selected.nativeName}</span>
        <svg
          className={`lang-chevron ${isOpen ? 'lang-chevron-open' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="lang-dropdown" role="listbox">
          <div className="lang-dropdown-header">Select Language</div>
          <div className="lang-dropdown-list">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                className={`lang-option ${selected.code === lang.code ? 'lang-option-active' : ''}`}
                onClick={() => handleSelect(lang)}
                role="option"
                aria-selected={selected.code === lang.code}
              >
                <span className="lang-option-native">{lang.nativeName}</span>
                <span className="lang-option-english">{lang.name}</span>
                {selected.code === lang.code && (
                  <svg className="lang-check" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, overflow: 'hidden' }} />
    </div>
  );
}
