// import { ArrowLeft, ExternalLink, LoaderCircle } from "lucide-react";
// import { useMemo, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { client } from "../data/client";
// import type { LinkTarget } from "../types";

// type ViewerMode = "proposal" | "demo" | "project";

// export default function ViewerPage({ mode }: { mode: ViewerMode }) {
//   const { projectId } = useParams();
//   const [loaded, setLoaded] = useState(false);

//   const target = useMemo<LinkTarget | undefined>(() => {
//     if (mode === "proposal") return client.proposal;
//     if (mode === "demo") return client.mainDemo;
//     return client.related.find((project) => project.id === projectId);
//   }, [mode, projectId]);

//   const backTo = mode === "project" ? "/related" : "/";

//   if (!target) {
//     return (
//       <div className="page-shell inner-page empty-state">
//         <h1>Preview not found.</h1>
//         <Link to="/related">Return to related experiences</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="viewer-page">
//       <div className="viewer-toolbar">
//         <Link to={backTo} className="back-link"><ArrowLeft size={18} /> Back</Link>
//         <div className="viewer-title">
//           <small>ICC VIEWER</small>
//           <strong>{target.title}</strong>
//         </div>
//         <a href={target.url} target="_blank" rel="noreferrer" className="external-button">
//           Open directly <ExternalLink size={17} />
//         </a>
//       </div>

//       <div className="viewer-frame-wrap">
//         {!loaded && (
//           <div className="viewer-loader">
//             <LoaderCircle className="spin" />
//             <span>Loading preview…</span>
//           </div>
//         )}
//         <iframe
//           title={target.title}
//           src={target.url}
//           className={loaded ? "is-loaded" : ""}
//           onLoad={() => setLoaded(true)}
//           allow="fullscreen; clipboard-read; clipboard-write"
//         />
//       </div>

//       <p className="iframe-note">
//         Some external websites block embedded previews. Use “Open directly” only when the preview does not appear.
//       </p>
//     </div>
//   );
// }


import {
  ArrowLeft,
  Clock3,
  FileText,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { client } from "../data/client";

export default function ViewerPage() {
  const location = useLocation();

  const isProposal = location.pathname.includes("/view/proposal");
  const isDemo = location.pathname.includes("/view/demo");

  const whatsappMessage = encodeURIComponent(
    `Hello ICC, I would like to know more about the ${client.clientName} project.`
  );

  const whatsappUrl = `${client.social.whatsapp}?text=${whatsappMessage}`;

  /* ================================
     PROPOSAL — COMING SOON
  ================================= */
  if (isProposal) {
    return (
      <div className="viewer-page unavailable-viewer">
        <div className="viewer-toolbar">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to overview</span>
          </Link>

          <div className="viewer-title">
            <small>COMMERCIAL OFFER</small>
            <strong>{client.clientName}</strong>
          </div>

          <div />
        </div>

        <div className="pending-experience">
          <div className="pending-glow" />

          <div className="pending-icon">
            <FileText size={30} />
          </div>

          <p className="pending-kicker">
            PROPOSAL • {client.clientName}
          </p>

          <h1>
            The offer details
            <br />
            will appear here.
          </h1>

          <p className="pending-description">
            The commercial offer and project details for{" "}
            {client.clientName} are currently being prepared.
          </p>

          <div className="pending-status">
            <Clock3 size={17} />
            <span>Offer preparation in progress</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="pending-primary-action"
          >
            <MessageCircle size={18} />
            <span>Contact us for more information</span>
          </a>

          <Link to="/" className="pending-secondary-action">
            Back to presentation
          </Link>
        </div>
      </div>
    );
  }

  /* ================================
     DEMO — COMING SOON
  ================================= */
  if (isDemo) {
    return (
      <div className="viewer-page unavailable-viewer">
        <div className="viewer-toolbar">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} />
            <span>Back to overview</span>
          </Link>

          <div className="viewer-title">
            <small>WEBSITE PROTOTYPE</small>
            <strong>{client.clientName}</strong>
          </div>

          <div />
        </div>

        <div className="pending-experience">
          <div className="pending-glow" />

          <div className="pending-icon">
            <Sparkles size={30} />
          </div>

          <p className="pending-kicker">
            ICC • EXPERIENCE IN PROGRESS
          </p>

          <h1>
            Drago's prototype
            <br />
            will be available soon.
          </h1>

          <p className="pending-description">
            We are currently crafting a tailored digital experience for
            Drago's. The interactive website prototype will appear here
            once it is ready for review.
          </p>

          <div className="pending-status">
            <Clock3 size={17} />
            <span>Prototype currently in development</span>
          </div>

          <Link to="/" className="pending-primary-action">
            <ArrowLeft size={18} />
            <span>Back to presentation</span>
          </Link>
        </div>
      </div>
    );
  }

  /* ================================
     FALLBACK
  ================================= */
  return (
    <div className="viewer-page unavailable-viewer">
      <div className="pending-experience">
        <div className="pending-icon">
          <Sparkles size={30} />
        </div>

        <h1>Experience unavailable.</h1>

        <Link to="/" className="pending-primary-action">
          <ArrowLeft size={18} />
          <span>Back to presentation</span>
        </Link>
      </div>
    </div>
  );
}