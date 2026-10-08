import { useState } from 'react';
import { Play, Sparkles, X } from 'lucide-react';

export default function StudentVideos() {
  const [activeVideo, setActiveVideo] = useState<{
    title: string;
    author: string;
    university: string;
    videoUrl: string;
  } | null>(null);

  const videos = [
    {
      title: 'What does a typical student day look like in TU Munich?',
      author: 'Arafat Rahman',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
      thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      university: 'TUM, Germany',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-a-university-campus-4318-large.mp4',
      locked: false,
    },
    {
      title: 'Campus life & monthly stipend experience in Tsinghua',
      author: 'Sajjad Hossain',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
      thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      university: 'Tsinghua, China',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-friends-sitting-on-campus-lawn-4320-large.mp4',
      locked: false,
    },
    {
      title: 'How is halal food & housing arranged around Monash Malaysia?',
      author: 'Taskin Tasnim',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120',
      thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      university: 'Monash, Malaysia',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-students-studying-in-a-university-library-4317-large.mp4',
      locked: false,
    },
    {
      title: 'Embassy interview questions & visa clearance preparation',
      author: 'Farhana Yeasmin',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120',
      thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      university: 'Heidelberg, Germany',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-a-video-call-4286-large.mp4',
      locked: false,
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-white via-amber-50/20 to-white relative overflow-hidden" id="student-life">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-800 font-bold tracking-widest text-xs px-3.5 py-1.5 rounded-full border border-amber-200">
            <Sparkles size={13} className="text-amber-500" />
            CAMPUS REELS &amp; DIARIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
            Student Life &mdash; Hear from Past Students!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Real vlog snippets of Bangladeshi scholars living abroad in Munich, Beijing, and Kuala Lumpur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl bg-white border border-gray-100 flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
            >
              {/* Thumbnail Area */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-900">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Play Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                  <button 
                    onClick={() => setActiveVideo(video)}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-white hover:scale-110 transition-all shadow-xl cursor-pointer"
                  >
                    <Play className="ml-1" fill="currentColor" size={20} />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white font-bold">
                  <span className="bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                    {video.university}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <h3 className="text-primary font-bold text-sm leading-snug line-clamp-2 mb-4 group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2.5 pt-2 border-t border-gray-100">
                  <img 
                    src={video.avatar} 
                    alt={video.author} 
                    className="w-8 h-8 rounded-full object-cover border border-accent/40" 
                  />
                  <span className="text-xs font-bold text-gray-700">{video.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-gray-900 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-3 relative border border-white/10">
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 text-white">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  {activeVideo.university}
                </span>
                <h4 className="font-bold text-white text-sm sm:text-base mt-1 line-clamp-1">
                  {activeVideo.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Video Player */}
            <div className="px-4 sm:px-6 pb-2">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video shadow-inner">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-4 sm:p-5 pt-0 flex items-center justify-between text-xs text-gray-400">
              <span className="font-medium text-white">
                Vlog recorded by: <strong className="text-accent">{activeVideo.author}</strong>
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="py-2 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
