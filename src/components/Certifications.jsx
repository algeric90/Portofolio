import { useState, useEffect } from "react";
import data from "../utils/data.json";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(3);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 992) setItemsPerRow(3);
      else if (window.innerWidth >= 768) setItemsPerRow(2);
      else setItemsPerRow(1);
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  const visibleCertifications = showAll
    ? data.certifications
    : data.certifications.slice(0, itemsPerRow);

  return (
    <section id="certifications" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Certifications</h2>
        <p className="text-muted">
          Professional credentials & achievements
        </p>
      </div>

      <div className="row g-4">
        {visibleCertifications.map((cert) => (
          <div
            key={cert.credentialId}
            className="col-md-6 col-lg-4"
          >
            <CertificationCard cert={cert} />
          </div>
        ))}
      </div>

      {data.certifications.length > itemsPerRow && (
        <div className="text-center mt-5">
          <button
            className="btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}