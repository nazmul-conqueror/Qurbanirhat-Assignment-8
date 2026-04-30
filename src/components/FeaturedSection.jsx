import { Dog } from 'lucide-react'
const FeaturedSection = () => {
    const res = await fetch("")


    return (<>
        <div>
            <h1 className="font-bold text-3xl text-center mt-4">Featued Animals</h1>

                  <div className="flex items-center mt-2 w-full max-w-md mx-auto">
        {/* Left Line */}
        <div className="grow h-px bg-slate-300"></div>
        
        {/* Icon Container */}
        <div className="mx-4">
          <Dog size={24} className="text-green-600" strokeWidth={1.5} />
        </div>
        
        {/* Right Line */}
        <div className="grow h-px bg-slate-300"></div>
      </div>

        </div>
        
        <div>

        </div>
        
        </>
    );
};

export default FeaturedSection;