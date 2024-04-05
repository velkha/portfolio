/*import React, { useEffect } from 'react';

const ScriptComponent = (scriptSrc) => {
 useEffect(() => {
    console.log(scriptSrc);
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDpTs4zjh4S_R3cQndlBZHB6XJNdLk3OPU&callback=console.debug&libraries=maps,marker&v=beta";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
 }, []);

 return <div>
            <gmp-map center="40.824031829833984,-5.515714645385742" zoom="14" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="40.824031829833984,-5.515714645385742" title="My location">
            </gmp-advanced-marker>
            </gmp-map>
        </div>;
};

export default ScriptComponent;*/