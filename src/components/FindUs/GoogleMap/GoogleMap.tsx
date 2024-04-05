import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import "./Map.css";

const API_KEY = ' ';

export default function Intro() {
    const position = { lat: 0, lng: -1 };
    const [open, setOpen] = useState(false);
  
    return (
      <APIProvider apiKey={API_KEY}>
        <div className="map-size" >
          <Map zoom={17} center={position} mapId={API_KEY}>
            <AdvancedMarker position={position} onClick={() => setOpen(true)}>
              <Pin
                background={"red"}
                borderColor={"green"}
                glyphColor={"purple"}
              />
            </AdvancedMarker>
  
            {open && (
              <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                <p style={{ color: "black"}}></p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    );
  }
