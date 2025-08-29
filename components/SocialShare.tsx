// --- FILE: components/SocialShare.tsx ---

interface SocialShareProps {
  birthYear: string;
}

const SocialShare = ({ birthYear }: SocialShareProps) => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareText = `I was born in ${birthYear}! Discover your own life in history at Historical Me.`;
    
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

    return (
        <div className="flex justify-center items-center gap-4 my-8">
            <p className="font-semibold text-slate-700">Share Your Timeline:</p>
            <a 
                href={twitterShareUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#1DA1F2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-3.3-1.4-6.7-2.8-10-2.8-3.3 0-6.7 1.4-10 2.8 0 0 1.6-3.4 3.3-4.9-1.3-1.3-2-3.4-2-3.4s2.1.7 4.9 2.8c2.8-2.1 4.9-2.8 4.9-2.8z"/></svg>
                Share on X
            </a>
            <a 
                href={facebookShareUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-[#1877F2] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Share on Facebook
            </a>
        </div>
    );
};

export default SocialShare;
